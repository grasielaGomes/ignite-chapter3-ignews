import Link from 'next/link';
import Image from 'next/image';
import { SignInButton } from '../SignInButton/sign-in-button';
import logoImg from '../../../public/images/logo.svg';
import styles from './header-styles.module.scss';
import { NavLink } from '../NavLink/navlink';


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <NavLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </NavLink>
          <NavLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </NavLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}