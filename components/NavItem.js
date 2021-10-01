import navStyles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const NavItem = ({ item }) => {
  const router = useRouter();
  const { asPath } = useRouter();

  const activeStyle = `${navStyles.active} ${navStyles.item}`;

  const liAnimation = {
    hidden: { opacity: 0, y: "-50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,

        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.li
      className={asPath.slice(2) === item.slug ? activeStyle : navStyles.item}
      variants={liAnimation}
    >
      <Link href={"/#" + item.slug}>
        <a className={navStyles.link}>
          <span className={navStyles.span}>{"<"}</span>
          {item.name}
          <span className={navStyles.span}>{" />"}</span>
        </a>
      </Link>
    </motion.li>
  );
};

export default NavItem;
