import s from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((item) => {
          return <Contact key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
