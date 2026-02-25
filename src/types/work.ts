export type WorkItem = {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  images: { src: string; alt: string }[];
  stack: string[];
  tools?: string[];
  github?: { visibility: "public" | "private"; url?: string };
  behance?: string;
  zip?: string;
};