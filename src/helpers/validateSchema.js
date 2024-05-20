import * as Yup from "yup";

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯїЇіІєЄёЁґҐ\s']+$/, "Name can only contain letters")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Please, type your name"),
  number: Yup.string()
    .matches(/^\d{7}$/, "Number must be exactly 7 digits")
    .required("Please, type a number"),
});
