import { describe, it, expect } from "vitest";
import { getYouTubeEmbedUrl } from "./helper";

describe("getYouTubeEmbedUrl", () => {
  it("should return null for empty or invalid urls", () => {
    expect(getYouTubeEmbedUrl("")).toBeNull();
    expect(getYouTubeEmbedUrl(null as unknown as string)).toBeNull();
    expect(getYouTubeEmbedUrl("https://google.com")).toBeNull();
  });

  it("should parse regular YouTube watch urls", () => {
    expect(
      getYouTubeEmbedUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    ).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
    
    expect(
      getYouTubeEmbedUrl("https://youtube.com/watch?v=dQw4w9WgXcQ&t=10s")
    ).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
  });

  it("should parse shortened youtu.be urls", () => {
    expect(getYouTubeEmbedUrl("https://youtu.be/dQw4w9WgXcQ")).toBe(
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    );
  });

  it("should parse YouTube Shorts urls", () => {
    expect(
      getYouTubeEmbedUrl("https://www.youtube.com/shorts/tPEE9ZwTmy0")
    ).toBe("https://www.youtube.com/embed/tPEE9ZwTmy0");
  });

  it("should parse already embedded urls", () => {
    expect(
      getYouTubeEmbedUrl("https://www.youtube.com/embed/dQw4w9WgXcQ")
    ).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
  });
});
