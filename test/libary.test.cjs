// test/library.test.cjs
// CommonJS test file that imports ESM modules via dynamic import

describe("Library functions", () => {
  test("add: adds two numbers", async () => {
    const { default: add } = await import("../src/add.js");
    expect(add(6, 4)).toBe(10);
    expect(add(-2, 3)).toBe(1);
  });

  test("divide: current behavior", async () => {
    const { default: divide } = await import("../src/divide.js");
    expect(divide(10, 2)).toBe(1);
  });

  test("ceil: rounds up", async () => {
    const { default: ceil } = await import("../src/ceil.js");
    expect(ceil(4.006)).toBe(5);
    expect(ceil(-4.006)).toBe(-4);
  });

  test("capitalize: capitalizes first char", async () => {
    const { default: capitalize } = await import("../src/capitalize.js");
    expect(capitalize("fred")).toBe("Fred");
    expect(capitalize("FRED")).toBe("Fred");
  });

  test("upperFirst: uppercases first char", async () => {
    const { default: upperFirst } = await import("../src/upperFirst.js");
    expect(upperFirst("fred")).toBe("Fred");
    expect(upperFirst("")).toBe("");
  });

  test("compact: current behavior", async () => {
    const { default: compact } = await import("../src/compact.js");
    const result = compact([0, 1, false, 2, "", 3, null, undefined]);

  
    expect(Array.from(result)).toEqual([2, 3]);
  });

  test("chunk: current behavior", async () => {
    const { default: chunk } = await import("../src/chunk.js");
    const result = chunk([1, 2, 3, 4], 2);

    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toEqual([3, 4]);
  });

 test("clamp: current behavior", async () => {
  const { default: clamp } = await import("../src/clamp.js");
  expect(clamp(10, -5, 5)).toBe(-5);
  expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test("endsWith: checks string suffix", async () => {
    const { default: endsWith } = await import("../src/endsWith.js");
    expect(endsWith("abc", "c")).toBe(true);
    expect(endsWith("abc", "b")).toBe(false);
  });

  test("toString: converts values to string (current behavior)", async () => {
    const { default: toString } = await import("../src/toString.js");
    expect(toString(null)).toBe("null");
    expect(toString(42)).toBe("42");
    expect(toString([1, 2, 3])).toBe("1,2,3");
  });

  test("toNumber: converts values to number when possible", async () => {
    const { default: toNumber } = await import("../src/toNumber.js");
    expect(toNumber("3.2")).toBe(3.2);
    expect(toNumber(10)).toBe(10);
    // NaN check (Jest uses toBeNaN)
    expect(toNumber("not-a-number")).toBeNaN();
  });

  test("defaultTo: current behavior", async () => {
    const { default: defaultTo } = await import("../src/defaultTo.js");
    expect(defaultTo(null, 10)).toBe(10);
    expect(defaultTo(undefined, 10)).toBe(10);
    expect(defaultTo(NaN, 10)).toBeNaN(); 
    expect(defaultTo(5, 10)).toBe(5);
  });

  test("words: splits into words", async () => {
    const { default: words } = await import("../src/words.js");
    expect(words("fred, barney, & pebbles")).toEqual(["fred", "barney", "pebbles"]);
  });
});