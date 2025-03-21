export interface Event {
    id?: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: "Seminar" | "Workshop" | "Conference" | "Meetup";
  }
  