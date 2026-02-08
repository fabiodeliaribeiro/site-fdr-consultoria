
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  forWhom: string;
  includes: string[];
  cta: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Segment {
  name: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  readTime: string;
  category: string;
  imageUrl: string;
}
