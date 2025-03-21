export interface Resource {
    id?: number;
    name: string;
    type: "Electronics" | "Furniture" | "Stationery" | "Others";
    description: string;
    quantity: number;
    availability_status: "Available" | "Unavailable" | "Under Maintenance";
  }
  