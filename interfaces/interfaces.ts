import { JSX } from "preact/jsx-runtime";

export interface InfoObject {
    name: string;
    details: string;
    picture: string;
    description: string[];
}

export interface actionBlock extends InfoObject {
    action: JSX.Element
}

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  category: string;
}