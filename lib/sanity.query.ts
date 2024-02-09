import { groq } from "next-sanity";
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    overview,
    url,
    content
  }`;

export const singleProjectQuery = groq`*[_type == "project" && slug.current === $slug ][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    overview,
    content
  }
  `;
