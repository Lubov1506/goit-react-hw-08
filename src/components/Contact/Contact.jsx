import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { name, number, id } = item;
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
      <div className={s.options}>
        <Button onClick={openModal}>Edit</Button>
        <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
      </div>
      {isOpen && (
        <Modal title="Edit contact" onClose={closeModal}>
          <ContactForm id={id} name={name} number={number} type="edit" />
        </Modal>
      )}
    </li>
  );
};

export default Contact;
