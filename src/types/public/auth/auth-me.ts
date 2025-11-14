type ProfilePictureType = { path: string; filename: string };
export interface AuthMe {
  id: number;
  role: string;
  userType: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: ProfilePictureType | null;
}
