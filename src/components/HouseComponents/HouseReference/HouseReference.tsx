import Hero from '../../Hero/Hero';
import styles from './HouseReference.module.scss';

const HouseReference: React.FC = () => (
    <div className={styles.house__reference}>
        <div className='container'>
            <div className='d-flex justify-content-center'>
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
            <div className={styles.house__reference__cards}>
                <h3 className='text-center'>Gerelateerde gebouwen</h3>
                <Hero limit={3} />
            </div>
        </div>
    </div>
);

export default HouseReference;
