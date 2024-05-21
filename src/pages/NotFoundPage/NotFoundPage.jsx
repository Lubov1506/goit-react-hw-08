import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={s.not_found}>
      <img
        src="https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png"
        alt="Not Found"
      />
      <button>
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
