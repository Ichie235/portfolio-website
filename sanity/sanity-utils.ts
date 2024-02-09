import { createClient, groq } from "next-sanity";
import { ProjectProps } from "../types/Project";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<ProjectProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      overview,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<ProjectProps> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      overview,
      content
    }
    `,
    { slug }
  );
}
