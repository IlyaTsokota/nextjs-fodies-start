import Link from "next/link";
import logoImg from '@/assets/logo.png';
import Image from "next/image";
import styles from './header.module.scss';
import NavLink from "../nav-link/nav-link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={logoImg} alt="A plate with food on it" priority />
                NextLevel Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}