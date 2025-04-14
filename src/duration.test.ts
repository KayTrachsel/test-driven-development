import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test("should format seconds only (33s)", () => {
    expect(formatDuration(33)).toBe("33s");
  });
});