import toast from "react-hot-toast";
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

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Incorrect format")
    .required("Type email!"),
  password: Yup.string()
    .required("Type password")
    .min(6, "Must be not shorter 6 symbols")
    .max(20, "Too long!"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯїЇіІєЄёЁґҐ\s']+$/, "Name can only contain letters")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Please, type your name"),
  email: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Incorrect format")
    .required("Type email!"),
  password: Yup.string()
    .required("Type password")
    .min(6, "Must be not shorter 6 symbols")
    .max(20, "Too long!"),
});
