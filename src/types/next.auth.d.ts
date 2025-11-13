import type { DefaultSession, DefaultUser } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      accessToken: string;
      role: string;
      verified: boolean;
      email: string;
      firstName: string;
      lastName: string;
      accessExpireTime: number;
      picture: {
        filename: string;
        path: string;
        mime: string;
      } | null;
      image_url: string;
    } & DefaultSession['user'];
    error?: 'TokenExpired';
  }

  interface User extends DefaultUser {
    id: string;
    accessToken: string;
    role: string;
    verified: boolean;
    email: string;
    firstName: string;
    lastName: string;
    accessExpireTime: number;
    picture: {
      filename: string;
      path: string;
      mime: string;
    } | null;
    image_url: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    user?: User;
    error?: 'TokenExpired';
  }
}
