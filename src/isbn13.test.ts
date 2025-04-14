import { isValid } from "./isbn13";

describe("isValid - ISBN-13", () => {
  test("valid ISBN: 9783866801929", () => {
    expect(isValid("9783866801929")).toBe(true);
  });

  test("valid ISBN: 9791091146135", () => {
    expect(isValid("9791091146135")).toBe(true);
  });

  test("invalid ISBN: wrong checksum", () => {
    expect(isValid("9783866801928")).toBe(false);
  });

  test("invalid ISBN: too short", () => {
    expect(isValid("97838668019")).toBe(false);
  });

  test("invalid ISBN: contains letters", () => {
    expect(isValid("9783X66801929")).toBe(false);
  });
});
