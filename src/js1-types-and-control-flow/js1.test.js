import * as challenge from "./challenge";

const {
  createFullName,
  findLargestNumber,
  addNumbers,
  findLengthOfPassword,
  findType,
  getIsValidOnNameTag,
  convertStringToNumber,
  getHasUppercaseLetters,
  convertPascalCaseToSnakeCase
} = challenge;

xtest("createFullName() tests", () => {
  expect(createFullName()).toBeDefined();
  expect(createFullName()).toBe("John Smith");
});

xtest("findLargestNumber() tests", () => {
  expect(findLargestNumber()).toBeDefined();
  expect(findLargestNumber()).toBe(200);
});

xtest("addNumbers() tests", () => {
  expect(addNumbers()).toBeDefined();
  expect(addNumbers()).toBe(36);
});

xtest("findLengthOfPassword() tests", () => {
  expect(findLengthOfPassword()).toBeDefined();
  expect(findLengthOfPassword()).toBe(33);
});

test("findType() tests", () => {
  expect(findType()).toBeDefined();
  expect(findType()).toBe("This is a string");
});

xtest("getIsValidOnNameTag() tests", () => {
  expect(getIsValidOnNameTag()).toBeDefined();
  expect(getIsValidOnNameTag()).toBe(true);
});

xtest("convertStringToNumber() tests", () => {
  expect(convertStringToNumber()).toBeDefined();
  expect(convertStringToNumber()).toBe(14.45);
});

xtest("getHasUppercaseLetters() tests", () => {
  expect(getHasUppercaseLetters()).toBeDefined();
  expect(getHasUppercaseLetters()).toBe(true);
});

xtest("convertPascalCaseToSnakeCase() tests", () => {
  expect(convertPascalCaseToSnakeCase()).toBeDefined();
  expect(convertPascalCaseToSnakeCase()).toBe("i_want_to_be_snake_case");
});
