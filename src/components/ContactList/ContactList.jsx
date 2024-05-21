import s from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div>
      {contacts.length ? (
        <ul className={s.list}>
          {contacts.map((item) => {
            return <Contact key={item.id} item={item} />;
          })}
        </ul>
      ) : (
        <p className={s.info}>There is not any contact yet.Add now!</p>
      )}
    </div>
  );
};

export default ContactList;
