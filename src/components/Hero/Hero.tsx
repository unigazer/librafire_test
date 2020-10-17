import { useEffect, useState } from 'react';
import HouseCard from '../HouseCard/HouseCard';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
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

  const getData = async () => {
    try {
      const res = await fetch('/api/getHouses');
      const json = await res.json();
      setHouseCard(json);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getData();
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
  }, []);

  return (
    <>
      <div className={styles.blank__rectangle}></div>
      <main className={styles.main}>
        {
          houseData.map((value: {
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

export default Hero;
