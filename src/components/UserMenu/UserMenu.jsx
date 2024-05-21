import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
const UserMenu = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUserName);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div className={s.logout}>
        <h2>{user}</h2>
        <button className={s.logout_btn} type="button" onClick={openModal}>
          Logout
        </button>
      </div>

      {isOpen && (
        <Modal title="Are you sure?" onClose={closeModal}>
          <div className={s.btn_modal}>
              <Button
                onClick={() => {
                  dispatch(logoutThunk());
                  closeModal();
                }}
              >
                Yes
              </Button>
              <Button onClick={closeModal}>No</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UserMenu;
