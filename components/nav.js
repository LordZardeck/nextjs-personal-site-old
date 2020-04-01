import Link from "next/link";
import classNames from "classnames";
import styles from "./nav.module.css";

const Nav = ({ settings }) => (
    <header className={styles.topHeader}>
        <div>
            <a href="/" className={styles.profilePicture}>
                <img src="/profile.jpeg" />
            </a>
            <nav className={styles.links}>
                {
                    settings &&
                    settings.content.main_navigation.map(
                        (navitem, index) => (
                            <Link href={navitem.link.cached_url} prefetch>
                                <a className={styles.link}>{navitem.name}</a>
                            </Link>
                        )
                    )
                }
            </nav>
        </div>
    </header>
);

export default Nav;
