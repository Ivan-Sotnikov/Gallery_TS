export const validationNameAuth = [
  (v: string) => !!v || "Name is required",
  (v: string) => v.length <= 10 || "Name must be less than 10 characters",
];
export const validationEmailAuth = [
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
];
export const validationPasswordAuth = [
  (v: string) => !!v || "Password is required",
  (v: string) => v.length > 5 || "Password must be more than 5 characters",
];
export const validationCommentImage = [
  (v: string) => v.length > 3 || "Need more than 3 symbols",
];