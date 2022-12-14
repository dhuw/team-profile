const intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"intern\"", () => {
  const testValue = "Intern";
  const e = new intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});