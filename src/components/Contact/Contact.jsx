import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openDelModal = () => setIsDelModalOpen(true);
  const closeDelModal = () => setIsDelModalOpen(false);

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
        <Button onClick={openModal}>
          <MdEdit />
        </Button>
        <Button onClick={openDelModal}>
          <MdDeleteOutline />
        </Button>
      </div>
      {isOpen && (
        <Modal title="Edit contact" onClose={closeModal}>
          <ContactForm
            id={id}
            name={name}
            number={number}
            type="edit"
            onClose={closeModal}
          />
        </Modal>
      )}
      {isDelModalOpen && (
        <Modal title="Delete this contact?" onClose={closeDelModal}>
          <div className={s.btn_modal}>
            <Button
              onClick={() => {
                dispatch(deleteContact(id));
                closeDelModal();
              }}
            >
              Yes
            </Button>
            <Button onClick={closeDelModal}>No</Button>
          </div>
        </Modal>
      )}
    </li>
  );
};

export default Contact;
