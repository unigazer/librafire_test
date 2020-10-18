import Link from 'next/link';
import style from './Header.module.scss';

const Header = () => (
    <>
        <header className={style.header}>
            <div className={style.logo}>
                <Link href='/'>
                    <a>
                        <img src='/librafire_product_logo.svg' alt='logo' />
                    </a>
                </Link>
            </div>
            <nav className={style.nav}>
                <ul className={style.ul}>
                    <li><a href='/' className={style.nav__links}>Lorem ipsum</a></li>
                    <li><a href='/' className={style.nav__links}>Lorem ipsum</a></li>
                    <li><a href='/' className={style.nav__links}>Lorem ipsum</a></li>
                    <li><a href='/' className={style.nav__links}>Lorem ipsum</a></li>
                    <li><a href='/' className={style.nav__links}>Lorem ipsum</a></li>
                    <li><a href='/' className={style.nav__links}>Lorem ipsum</a></li>
                    <li><a href='/' className={style.nav__links}>Lorem ipsum</a></li>
                </ul>
            </nav>
        </header>
    </>
);

export default Header;
