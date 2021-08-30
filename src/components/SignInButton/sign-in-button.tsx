import { FaGithub } from "react-icons/fa";
import { FiX } from 'react-icons/fi';
import styles from "./sign-in-button-styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#84d361" />
      Grasiela Gomes
      <FiX color="#737380"/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
