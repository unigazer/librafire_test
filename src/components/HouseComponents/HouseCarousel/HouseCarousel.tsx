import HouseHeader from "../HouseHeader/HouseHeader";
import styles from './HouseCarousel.module.scss';

const HouseCarousel: React.FC = () => (
    <div className='container'>
        <div className={styles.carousel__images + ' d-flex'}>
            <img src='//placehold.it/322x322' alt='' />
            <img src='//placehold.it/322x322' alt='' />
            <img src='//placehold.it/322x322' alt='' />
            <img src='//placehold.it/322x322?text=35' alt='' />
        </div>
        <div className={styles.carousel__text}>
            <h2 className='text-center'>Beschrijving</h2>
            <p className='text-center'>
                Voor een uitgebreide beschrijving, download onze luxebrochure
                op www.copandi.be voor meer informatie.
                Dit appartement gelegen op de bovenste verdieping van een prachtig
                gebouw (bouwjaar 2011) met drie slaapkamers zoekt een nieuwe eigenaar.
                Het appartement is centraal gelegen op wandelafstand van het centrum
                van Brecht winkels, scholen en openbaar vervoer.
            </p>
            <p className='text-center'>Inpandige autostaanplaats mogelijk mee aan te kopen t.W.V. €15.000.</p>
            <p className='text-center'>
                Bent u ook benieuwd naar onze unieke formules en hoe u als eigenaar
                veel geld kan besparen op de verkoop van uw eigen woning?
                Maak een vrijblijvende afspraak.
            </p>
        </div>
        <div className={styles.carousel__button + ' d-flex justify-content-center'}>
            <button type='button' className='d-flex align-items-center gap-xl-10'>
                <img src='/icons/location.svg' alt='location' />
                De kaart tonen
            </button>
        </div>
    </div>
);

export default HouseCarousel;