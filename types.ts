export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  capacity: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
