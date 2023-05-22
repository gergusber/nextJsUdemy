import classes from './main-header.module.css';
import Link from 'next/link'

function MainHeader(props) {
  return <header className={classes.header}>
    <div className={classes.logo}>
      <Link href='/'>next events</Link>
    </div>
    <nav className={classes.navigation}>
      <li>
        <Link href='/events'>All events</Link>
      </li>
    </nav>
  </header>
}

export default MainHeader;
