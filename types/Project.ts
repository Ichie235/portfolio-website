import { PortableTextBlock } from "sanity";

export type ProjectProps = {
  _id: string;
  _createdAt: Date;
  name: string;
  overview: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
