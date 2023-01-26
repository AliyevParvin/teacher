import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(300, "Too Long!")
    .required("Required"),
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  salary: Yup.number()
    .min(200, "Too Short!")
    .max(5000, "Too Long!")
    .required("Required"),
  profil: Yup.string().url("Invalid url").required("Required"),
});
