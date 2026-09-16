// Shape used to validate user data (e.g. with Zod/Yup later)
export const userSchema = {
  name: { type: "string", required: true },
  email: { type: "string", required: true },
};
