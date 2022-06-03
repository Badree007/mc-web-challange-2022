import main from "./main";

test("", () => {
  expect(() => main(-1)).toThrow();
  expect(main(5)).toBe(0);
  expect(main(65)).toBe(0);
  expect(main(66)).toBe(1);
  expect(main(60 * 24 - 1)).toBe(21);
  expect(main(60 * 24)).toBe(22);
});
