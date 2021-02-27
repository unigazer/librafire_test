import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>LibraFire Test</title>
            <link href='https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap' rel='stylesheet' />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
);

export default MyApp;