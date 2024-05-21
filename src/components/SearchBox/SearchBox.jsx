import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import clsx from "clsx";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  return (
    <div className={s.col}>
      <label htmlFor="searchID">Find contacts by name or number</label>
      <input
        className={clsx(s.input, s.search_input)}
        type="search"
        name="name"
        defaultValue={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        id="searchID"
      />
    </div>
  );
};

export default SearchBox;
