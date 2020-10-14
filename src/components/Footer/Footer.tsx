import styles from './Footer.module.scss';

const Footer: React.FC = () => (
    <footer>
        <div className={styles.footer__main}>
            <div className={styles.footer__main__navigation}>
                <div className={styles.footer__main__logo}>
                    <img src='/librafire_product_logo.svg' alt='logo' />
                    <p>BE0677.970.513</p>
                </div>
                <div>
                    <p>COPANDI</p>
                    <ul>
                        <li>Blog</li>
                        <li>Team</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <p>VASTGOED</p>
                    <ul>
                        <li>Te koop</li>
                        <li>Te huur</li>
                        <li>Nieuwbouw</li>
                        <li>Ik ben op zoek</li>
                    </ul>
                </div>
                <div>
                    <p>ALGEMEEN</p>
                    <ul>
                        <li>Algemene voorwaarden</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p>CONTACT</p>
                    <ul>
                        <li>
                            <img src='/icons/place.svg' alt='plave_icon' />
                            <span>Leopoldstraat 37 , 2800 Mechelen</span>
                        </li>
                        <li>
                            <img src='/icons/mail.svg' alt='mail_icon' />
                            <a href='mailto:info@copandi.be'>info@copandi.be</a>
                        </li>
                        <li>
                            <img src='/icons/phone.svg' alt='phone_icon' />
                            <a href='tel:+015 79 46 44'>015 79 46 44</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>SOCIAL</p>
                    <ul>
                    <li>
                        <img src='/icons/instagram.svg' alt='instagram' />
                    </li>
                    <li>
                        <img src='/icons/facebook.svg' alt='facebook' />

                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.footer__copyright}>
            <p>
                {new Date().getFullYear()}
                &nbsp;
                copyright - alle rechten voorbehouden Copandi
            </p>
        </div>
    </footer>
);

export default Footer;