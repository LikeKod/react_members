import { useDispatch, useSelector } from "react-redux";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";
import styles from "../../styles/User.module.css";
import UserLoginForm from "./UserLoginForm";
import UserSignUpForm from "./UserSignUpForm";

const UserForm = () => {
  const { showForm, formType } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormTyype = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserSignUpForm
          toggleCurrentFormTyype={toggleCurrentFormTyype}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm
          toggleCurrentFormTyype={toggleCurrentFormTyype}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
