import style from './HouseCard.module.scss';

type HouseProps = {
    house: {
        image?: string,
        desc: string,
        address: string,
        specs: {
            estateSurface: string,
            bedrooms: number | string,
            price: number | string
        }
    }
}

const HouseCard: React.FC<HouseProps> = ({ ...data }: HouseProps) => (
    <div className={style.house__container}>
        <div className={style.house__image}>
            <img src={data.house.image} alt='' />
        </div>
        <div className={style.house__info}>
            <div className='house__info__desc'>
                <p>{data.house.desc}</p>
            </div>
            <div className='house__info__address d-flex align-items-center'>
                <img src='/icons/place.svg' alt='location'/>
                <p>{data.house.address}</p>
            </div>
            <hr />
            <div className={style.house__info__specs}>
                <div className={style.house__info__specs__surface}>
                    <p>Vierkante meters</p>
                    <p>
                        {data.house.specs.estateSurface}
                        <span>&#13217;</span>
                    </p>
                </div>
                <div className={style.house__info__specs__rooms}>
                    <p>Slaapkamers</p>
                    <p>{data.house.specs.bedrooms}</p>
                </div>
                <div className={style.house__info__specs__price}>
                    <p>Plaats</p>
                    <p>{data.house.specs.price}</p>
                </div>
            </div>
        </div>
    </div>
);

export default HouseCard;
