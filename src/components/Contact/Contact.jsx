import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.card}>
      <div>
        <p>
          <FaUser />
          <span>{name}</span>
        </p>
        <p>
          <FaPhoneAlt />
          <span>{number}</span>
        </p>
      </div>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </li>
  );
};

export default Contact;
