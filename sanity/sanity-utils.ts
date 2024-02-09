import { createClient, groq } from "next-sanity";
import { ProjectProps } from "../types/Project";

export async function getProjects(): Promise<ProjectProps[]> {
  const client = createClient({
    projectId: "lp8gcbb6",
    dataset: "production",
    apiVersion: "2024-02-09",
  });

  return client.fetch(
    groq`*[_type = "project]{
        
        _id,
        _createdAt,
        name,
        "slug" :slug.current,
        overview,
        "image": image.asset→url,
        url,
        content

    }`
  );
}
