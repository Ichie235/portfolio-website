import { PortableTextBlock } from "sanity";

export type ProjectProps = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  overview: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
