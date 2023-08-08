export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type DiaryEntryNonCommets = Omit<DiaryEntry, "comment">;

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
