import { useEffect, useState } from 'react';
import HouseCard from '../HouseCard/HouseCard';
import { getData } from '../../../pages/api/requests';
import styles from './Hero.module.scss';

const Hero: React.FC<{ limit?: number }> = ({ limit }) => {
  type HouseProps = [{
    image?: string,
    desc: string,
    address: string,
    specs: {
      estateSurface: string,
      bedrooms: number | string,
      price: number | string
    }
  }]

  const [houseData, setHouseCard] = useState<HouseProps>([{
    image: '',
    desc: '',
    address: '',
    specs: {
      estateSurface: '',
      bedrooms: '',
      price: '',
    },
  }]);

  useEffect(() => {
    (async () => {
      const json = await getData();
      setHouseCard(json);
      return () => {
        setHouseCard([{
          image: '',
          desc: '',
          address: '',
          specs: {
            estateSurface: '',
            bedrooms: '',
            price: '',
          },
        }]);
      };
    })();
  }, []);

  return (
    <>
      <main className={styles.main}>
        {
          houseData.slice(0, limit).map((value: {
            image?: string,
            desc: string,
            address: string,
            specs: {
              estateSurface: string,
              bedrooms: number | string,
              price: number | string
            }
          }) => (
              <HouseCard house={value} />
          ))
        }
      </main>
    </>
  );
};

Hero.defaultProps = {
  limit: 9,
};

export default Hero;
