import style from './Header.module.scss';

const Header = () => (
    <>
        <header className={style.header}>
            <div className={style.logo}>
                <img src='/librafire_product_logo.svg' alt='logo' />
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
