// types.ts

export interface BaserowResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Matches your "Sermons" table fields exactly
export interface Sermon {
  id: number;
  order: string;
  Title: string; // "Field Name" in Baserow
  Date: string;  // ISO Date string
  Speaker: {
    id: number;
    value: string;
    color: string;
  };
  Video_URL: string; // Baserow converts spaces to underscores in API
  Series: string;
}

// Matches your "Events" table
export interface ChurchEvent {
  id: number;
  Event_Name: string;
  Date: string;
  Description: string;
  Signup_Link: string;
}