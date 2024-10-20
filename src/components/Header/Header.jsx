import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Header = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(s.link, isActive && s.activeLink);

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <div>Welcome, {user?.name || "Guest"}</div>{" "}
      {/* Проверка на существование user */}
      <div className={s.leftLinks}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      </div>
      <div className={s.rightLinks}>
        {!isLoggedIn ? (
          <>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </>
        ) : (
          <button className={s.btn}>Exit</button>
        )}
      </div>
    </header>
  );
};

export default Header;
