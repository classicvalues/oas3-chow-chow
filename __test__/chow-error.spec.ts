import ChowError from "../src/error";

describe("ChowError", () => {
  it("should be able to initialize a ChowError", () => {
    const chowError = new ChowError("An error", { in: "test", name: "test" });
    expect(chowError.toJSON()).toMatchInlineSnapshot(`
Object {
  "code": 400,
  "location": Object {
    "in": "test",
    "name": "test",
  },
  "message": "An error",
  "rawErrors": Array [],
}
`);
  });

  it("should be able to output JSON format of the error", () => {
    const chowError = new ChowError("An error", { in: "test", name: "test" });
    expect(chowError.toJSON()).toMatchInlineSnapshot(`
Object {
  "code": 400,
  "location": Object {
    "in": "test",
    "name": "test",
  },
  "message": "An error",
  "rawErrors": Array [],
}
`);
  });
});
