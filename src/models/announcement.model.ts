export interface Announcement {
    id?: number;
    title: string;
    content: string;
    date: string;
    priority: "High" | "Medium" | "Low";
  }
  