import styles from './HouseHeader.module.scss';

const HouseHeader: React.FC = () => (
    <div className={styles.house__header__image + ' d-flex'}>
        <div className='container'>
            <div className={styles.house__header__hero}>
                <div className={styles.house__header__hero__left}>
                    <div className='house__header__hero__left__child'>
                        <img src='/icons/place.svg' alt='place' />
                        <p>Hendrik Schoofstraat 17, 2960 Brecht</p>
                    </div>
                    <h1>Prachtig dakappartement met 3 SLKS en ruim terras.</h1>
                    <div className='d-flex gap-xl-10 justify-content-between w-50'>
                        <div className='d-flex align-items-center gap-xl-10'>
                            <img src='/icons/couch.svg' alt='couch' />
                            <div className='d-flex gap-xl-10'>
                                <span>3</span>
                                <p className='remove-margin'>Slaapkamers</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-xl-10'>
                            <img src='/icons/bathtub.svg' alt='bathtub' />
                            <div className='d-flex gap-xl-10'>
                                <span>1</span>
                                <p className='remove-margin'>Badkamer</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-xl-10'>
                            <img src='/icons/toilet.svg' alt='toilet' />
                            <div className='d-flex gap-xl-10'>
                                <span>1</span>
                                <p className='remove-margin'>WC</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.house__header__hero__right}>
                    <div className='d-flex' style={{ justifyContent: 'flex-end' }}>
                        <p>€ 299.000</p>
                    </div>
                    <div className={styles.duncan__card + ' d-flex align-items-center'}>
                        <img src='/mr_duncan.jpg' alt='Duncan Van Reck' />
                        <div className={styles.duncan__card__info}>
                            <p>Duncan Van Reck</p>
                            <div style={{ lineHeight: '1.5em', marginBottom: '2em' }}>
                                <div className={styles.duncan__card__el__container + ' d-flex align-items-center gap-xl-10'}>
                                    <img src='/icons/mail.svg' alt='mail' />
                                    <p className='remove-margin'>duncan@copandi.be</p>
                                </div>
                                <div className={styles.duncan__card__el__container + ' d-flex align-items-center gap-xl-10'}>
                                    <img src='/icons/phone.svg' alt='phone' />
                                    <p className='remove-margin'>033037696</p>
                                </div>
                            </div>
                            <a href='#'>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HouseHeader;
