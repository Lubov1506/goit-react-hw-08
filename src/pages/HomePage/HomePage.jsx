import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import { selectError, selectIsLoading } from "../../redux/contacts/selectors"
import { fetchContacts } from "../../redux/contacts/operations"

const HomePage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default HomePage