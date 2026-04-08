import React from "react";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import BlogPage from "../src/app/blog/page";
import ProjectsPage from "../src/app/projects/page";
import { blogPost } from "../library/blogPost/_blogPost";
import { project } from "../library/projects/_project";

let container: HTMLDivElement;
let root: Root;

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => React.createElement("a", { href, ...props }, children),
}));

vi.mock("next/image", () => ({
  default: ({
    alt,
    src,
    ...props
  }: {
    alt: string;
    src: string;
  }) => React.createElement("img", { alt, src, ...props }),
}));

describe("data-driven pages", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    root.unmount();
    container.remove();
  });

  it("renders all blog cards from blog data", () => {
    act(() => {
      root.render(React.createElement(BlogPage));
    });

    for (const post of blogPost) {
      expect(container.textContent).toContain(post.title);
    }
  });

  it("renders all project cards from project data", async () => {
    await act(async () => {
      root.render(await ProjectsPage());
    });

    for (const item of project) {
      expect(container.textContent).toContain(item.name);
    }
  });
});
