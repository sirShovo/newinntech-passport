export interface PostEntry {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserEntry {
  email: string; 
  password: string;
}

declare global {
  namespace Express {
    type User = UserDocument
  }
}
