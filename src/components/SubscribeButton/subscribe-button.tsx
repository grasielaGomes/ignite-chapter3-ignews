import styles from "./subscribe-button-styles.module.scss";

export function SubscribeButton() {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
