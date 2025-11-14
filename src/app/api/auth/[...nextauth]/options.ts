import { jwtDecode } from 'jwt-decode';
import { getServerSession, type NextAuthOptions, Session, type User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { supabase } from '@/lib/supabaseClient';

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
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@example.com' },
        password: { label: 'Password', type: 'password' },
        token: { label: 'Token', type: 'text' },
        isOAuthLogin: { label: 'OAuthLogin', type: 'boolean' },
      },
      async authorize(credentials: Credentials | undefined): Promise<User | null> {
        try {
          const isOAuth = credentials?.isOAuthLogin === 'true';

          let supabaseResponse;

          if (!isOAuth) {
            // Email -password login
            const { data, error } = await supabase.auth.signInWithPassword({
              email: credentials!.email!,
              password: credentials!.password!,
            });
            if (error || !data.session) throw new Error(error?.message || 'Login failed');

            supabaseResponse = data;
          } else {
            // OAuth login using token
            const { data, error } = await supabase.auth.getUser(credentials!.token!);

            if (error || !data.user) throw new Error(error?.message || 'OAuth login failed');

            supabaseResponse = { user: data.user, session: { access_token: credentials!.token } };
          }
          // Decode JWT to extract info
          const token = supabaseResponse.session?.access_token;
          if (!token) throw new Error('No token returned from Supabase');

          const decoded: any = jwtDecode(token);
          return {
            id: supabaseResponse.user?.id || decoded.sub,
            email: decoded.email || supabaseResponse.user?.email || credentials!.email!,
            accessToken: token,
            accessExpireTime: decoded.exp,
            firstName: supabaseResponse.user?.user_metadata?.firstName || 'N/A',
            fullName: supabaseResponse.user?.user_metadata?.fullName || 'N/A',
            lastName: supabaseResponse.user?.user_metadata?.lastName || 'N/A',
            role: supabaseResponse.user?.user_metadata?.role || 'user',
            verified: supabaseResponse.user?.email_confirmed_at ? true : false,
            picture: supabaseResponse.user?.user_metadata?.avatar_url || null,
            image_url: supabaseResponse.user?.user_metadata?.avatar_url || null,
          };
        } catch (err: any) {
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

// Helper to get session in server components / server actions
export const getUserSession = (): Promise<Session | null> => {
  return getServerSession(options);
};
