import HouseHeader from '../src/components/HouseComponents/HouseHeader/HouseHeader';
import HouseCarousel from '../src/components/HouseComponents/HouseCarousel/HouseCarousel';
import HouseTabs from '../src/components/HouseComponents/HouseTabs/HouseTabs';
import HousePlanning from '../src/components/HouseComponents/HousePlanning/HousePlanning';
import HouseDocuments from '../src/components/HouseComponents/HouseDocuments/HouseDocuments';
import HouseReference from '../src/components/HouseComponents/HouseReference/HouseReference';

const House: React.FC = () => (
    <main>
        <HouseHeader />
        <section id='house_carousel'>
            <HouseCarousel />
        </section>
        <section id='house_tabs'>
            <HouseTabs />
        </section>
        <section id='house_planning'>
            <HousePlanning />
        </section>
        <section id='house_documents'>
            <HouseDocuments />
        </section>
        <section id='house_reference'>
            <HouseReference />
        </section>
    </main>
);

export default House;
