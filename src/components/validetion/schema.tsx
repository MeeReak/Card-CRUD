import * as Yup from "yup";

declare module "yup" {
  interface MixedSchema {
    fileSize(maxSize: number, message: string): this;
  }
}

Yup.addMethod(Yup.mixed, "fileSize", function (maxSize, message) {
  return this.test("fileSize", message, function (value) {
    const { path, createError } = this;

    if (value instanceof File && value.size > maxSize) {
      return createError({
        path,
        message,
      });
    }
    return true;
  });
});


const schema = Yup.object().shape({
  name: Yup.string().required().min(3).max(25),
  age: Yup.number().required(),
  src: Yup.mixed()
    .required("A File  is Required")
    .fileSize(1024 * 1024, "File size must be less than 1MB"),
});

export default schema;
