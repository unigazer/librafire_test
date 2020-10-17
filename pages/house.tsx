import HouseHeader from '../src/components/HouseComponents/HouseHeader/HouseHeader';
import HouseCarousel from '../src/components/HouseComponents/HouseCarousel/HouseCarousel';

const House: React.FC = () => (
    <main>
        <HouseHeader />
        <section id='house_carousel'>
            <HouseCarousel />
        </section>
    </main>
);

export default House;
