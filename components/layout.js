/**
 *
 * @module layout
 * @desc core layout component
 *
 */

import Link from 'next/link';
import Head from 'next/head';
import Header from './global/header';
import Footer from './global/footer';

const fullTitle = 'Organic Hemp Solutions';
const canonicalUrl = 'https://www.organichempsolutions.com';
const currentYear = new Date().getFullYear();
const copyright = `${currentYear} ${fullTitle}`;

/**
 *
 * @param {Object}
 * @desc core layout component
 *
 */
export default ({
    children,
    title = fullTitle,
    titleLong = 'Organic Hemp Solutions | Premium Hemp Clones | Hemp Products',
    description = 'Premium Hemp Clones and Hemp prodcuts for sale.',
    identifier = 'home'
}) => (

    <div>
        <Head>
            <title>{title}</title>

            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='author' content={fullTitle} />
            <meta name='copyright' content={copyright} />

            <meta name='description' content={description} />
            <meta name='keywords' content='hemp, hemp clones, hemp products, premium hemp' />
            <meta name='robots' content='index,follow' />
            <meta name='robots' content='noodp' />

            /* Facebook Meta */
            <meta property='og:site_name' content={title} />
            <meta property='og:title' content={titleLong} />
            <meta property='og:url' content={canonicalUrl} />
            <meta property='og:type' content='website' />
            <meta property='og:description' content={description} />

            /* Microsoft */
            <meta name='msvalidate.01' content='B76949453ED7A403F248E1EA8EABB29C' />
            <meta name='msapplicationTileColor' content='#da532c' />
            <meta name='msapplicationTileImage' content='/assets/favicon/mstile-144x144.png' />
            <meta name='msapplicationconfig' content='/assets/favicon/browserconfig.xml' />
            <meta name='themeColor' content='#ffffff' />

            /* Canonical URL */
            <link rel='canonical' href={canonicalUrl} />

        </Head>

        <Header title={title} identifier={identifier} />
        <h1>{title}</h1>
        {children}
        <Footer />
    </div>

);
