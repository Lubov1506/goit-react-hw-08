import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";
import clsx from "clsx";

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
