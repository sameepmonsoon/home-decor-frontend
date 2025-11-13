import { jwtDecode } from 'jwt-decode';
import {
  getServerSession,
  type NextAuthOptions,
  Session,
  type User,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

type Credentials = {
  email: string;
  password: string;
  token?: string;
  isOAuthLogin?: string;
};
export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'jsmith@example.com',
        },
        password: { label: 'Password', type: 'password' },
        token: { label: 'Token', type: 'text' },
        isOAuthLogin: { label: 'OAuthLogin', type: 'boolean' },
      },
      async authorize(
        credentials: Credentials | undefined
      ): Promise<User | null> {
        try {
          const isOAuth = credentials?.isOAuthLogin === 'true';
          console.log({ isOAuthLogin: credentials?.isOAuthLogin, isOAuth });
          if (!isOAuth && (!credentials?.email || !credentials?.password)) {
            throw new Error('Invalid Email or Password!');
          }
          let response;
          if (!credentials.isOAuthLogin) {
            response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}admin/auth/login`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: credentials.email,
                  password: credentials.password,
                }),
              }
            );
          } else {
            // for Oauth Login
            response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}admin/auth/login`,
              {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${credentials.token}`,
                },
              }
            );
          }

          const data = await response.json();

          if (!response.ok || !data) {
            throw new Error('Invalid Email or Password!');
          }

          // Handle backend error structure (e.g., 401 with message)
          if (data.statusCode && data.statusCode !== 200) {
            throw new Error('Invalid Email or Password!');
          }

          // Extract token
          const token =
            data?.tokens?.accessToken || data?.data?.tokens?.accessToken;
          if (!token) throw new Error('Invalid Email or Password!');

          const decoded: any = jwtDecode(token);
          return {
            id: data?.data?.user?.id || decoded.sub || decoded.id,
            accessToken: token,
            accessExpireTime: decoded.exp,
            email:
              decoded.email || data?.data?.user?.email || credentials.email,
            role: decoded.role || data?.data?.user?.role,
            firstName:
              decoded.firstName || data?.data?.user?.firstName || 'N/A',
            lastName: decoded.lastName || data?.data?.user?.lastName || 'N/A',
            verified: data?.data?.user?.verified,
            picture: data?.data?.user?.image || null,
            image_url: data?.data?.user?.image_url || null,
          };
        } catch (err: any) {
          console.error('Authorization error:', err?.message || err);
          throw new Error('Invalid Email or Password!');
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
    signOut: '/signout',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) token.user = user;

      if (trigger === 'update' && session?.user) {
        token.user = { ...token.user, ...session.user };
      }

      const now = Math.floor(Date.now() / 1000);
      if (token.user?.accessExpireTime && token.user.accessExpireTime < now) {
        return { ...token, error: 'TokenExpired' };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      session.error = token.error;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      return baseUrl;
    },
  },
};

export const getUserSession = (): Promise<Session | null> => {
  return getServerSession(options);
};
