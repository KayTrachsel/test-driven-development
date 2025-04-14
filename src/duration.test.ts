import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test("should format seconds only 33s", () => {
    expect(formatDuration(33)).toBe("33s");
  });

  test("should return 0s for input 0", () => {
    expect(formatDuration(0)).toBe("0s");
  });
  
  test("should throw error for negative input", () => {
    expect(() => formatDuration(-5)).toThrow("duration must be positive");
  });
  
  test("should round seconds", () => {
    expect(formatDuration(62.7)).toBe("1m3s");
  });

  test("should format 123s to 2m3s", () => {
    expect(formatDuration(123)).toBe("2m3s");
  });
  
  test("should format 500s to 8m20s", () => {
    expect(formatDuration(500)).toBe("8m20s");
  });
  
  test("should format 3600s to 1h", () => {
    expect(formatDuration(3600)).toBe("1h");
  });
  
  test("should format 3999s to 1h6m39s", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });
});