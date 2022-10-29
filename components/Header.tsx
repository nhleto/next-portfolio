import styles from "./Header.module.scss";

export default function Header() {
  const gitHubUrl = "https://github.com/nhleto";

  return (
    <header className={styles.navbar}>
        <div className={styles.startNav}>
          <div>
            <h3 className={styles.navName}>Henry Leto</h3>
            <div className={styles.navDescription}>Full Stack Developer</div>
          </div>
        </div>
        <div className={styles.endNav}>
          {/* <h3 className={styles.navItem} onclick="about()"> */}
          {/* TODO: Add back in ONCLICK functions */}
          <h3 className={styles.navItem}>About</h3>
          <h3 className={styles.navItem}>Projects</h3>
          <h3 className={styles.navItem}>Contact</h3>
          <a
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navItem}
          >
            Github
          </a>
        </div>
    </header>
  );
}
