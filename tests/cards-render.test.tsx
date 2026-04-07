import type React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BlogPage from "../src/app/blog/page";
import ProjectsPage from "../src/app/projects/page";
import { blogPost } from "../library/blogPost/_blogPost";
import { project } from "../library/projects/_project";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({
    alt,
    src,
    ...props
  }: {
    alt: string;
    src: string;
  }) => <img alt={alt} src={src} {...props} />,
}));

describe("data-driven pages", () => {
  it("renders all blog cards from blog data", () => {
    render(<BlogPage />);

    for (const post of blogPost) {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    }
  });

  it("renders all project cards from project data", async () => {
    render(await ProjectsPage());

    for (const item of project) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    }
  });
});
