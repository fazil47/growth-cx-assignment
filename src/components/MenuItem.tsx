import { Link, useLocation } from "react-router-dom";
import "./MenuItem.css";

export default function MenuItem({ to, name }: { to: string; name: string }) {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={
        location.pathname.slice(1) === to ? "selectedMenuItem" : "menuItem"
      }
    >
      {name}
    </Link>
  );
}
