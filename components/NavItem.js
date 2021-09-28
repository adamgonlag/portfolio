import navStyles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ item }) => {
  const router = useRouter();
  const { asPath } = useRouter();

  const activeStyle = `${navStyles.active} ${navStyles.item}`;

  return (
    <li
      className={asPath.slice(2) === item.slug ? activeStyle : navStyles.item}
    >
      <Link href={"/#" + item.slug}>
        <a className={navStyles.link}>
          <span className={navStyles.span}>{"<"}</span>
          {item.name}
          <span className={navStyles.span}>{" />"}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
