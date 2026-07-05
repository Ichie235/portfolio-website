import { describe, expect, it } from "vitest";
import { project } from "../src/content/projects";
import { projectContentBySlug } from "../src/content/projects/content";

describe("project content", () => {
  it("has content for every configured project slug", () => {
    for (const item of project) {
      expect(projectContentBySlug[item.slug]).toBeDefined();
      expect(projectContentBySlug[item.slug].overview.length).toBeGreaterThan(0);
      expect(projectContentBySlug[item.slug].features.length).toBeGreaterThan(0);
      expect(projectContentBySlug[item.slug].technologies.length).toBeGreaterThan(0);
    }
  });
});
