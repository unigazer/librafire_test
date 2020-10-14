import Head from 'next/head';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import Hero from '../src/components/Hero/Hero';

const Home = () => (
    <>
        <Head>
            <link href='https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap' rel='stylesheet' />
        </Head>
        <Header />
        <Hero />
        <Footer />
    </>
);

export default Home;
