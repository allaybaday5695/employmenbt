export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  salary: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}