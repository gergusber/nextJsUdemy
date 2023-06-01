import classes from "./main-navigation.module.css";

import Logo from "../logo/logo"
import Link from 'next/link'
const MainNavigation = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Link href='/'>
          <Logo />
        </Link>
        <ul>
          <li>
            <Link href='/posts'>
              Posts
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </header >
    </>)
}
export default MainNavigation