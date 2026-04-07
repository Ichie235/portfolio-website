import { describe, expect, it } from "vitest";
import { project } from "../library/projects/_project";
import { projectContentBySlug } from "../library/projects/_projectContent";

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
