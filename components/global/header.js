/**
 *
 * @module header
 * @desc global header component
 *
 */

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';

/**
 *
 * @function onRouteChangeStart
 * @param {String} url
 *
 */
Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
};

/**
 *
 * @function onRouteChangeComplete
 * @todo handle route change
 *
 */
Router.onRouteChangeComplete = () => {
    NProgress.done();
};

/**
 *
 * @function onRouteChangeError
 * @todo handle error
 *
 */
Router.onRouteChangeError = () => {
    NProgress.done();
}

/**
 *
 * @desc style
 *
 */
const style = {
    container: {
        background: '#eee',
        borderBottom: '2px solid #e6e6e6',
        margin: '0 auto'
    }
};

/**
 *
 * @desc menu
 *
 */
const menuItems = [
    'Home',
    'High CBD Feminized Hemp Clones',
    'High CBD Hemp Flower',
    'High CBD Oils and Extracts',
    'Our Farm',
    'CBD Research and Articles',
    'Contact Us'
];

/*
    menuItems.forEach((item) => {
        <li className='pure-menu-item'>
            <Link href='/'>
                <a className='pure-menu-link'>{item}</a>
            </Link>
        </li>
    });
*/

/**
 *
 * @param {Object}
 * @desc header component
 * @note Prefetching pages is a production only feature
 *
 */
export default ({title, identifier}) => (

    <div style={style.container}>
        <Head>
            {/* Import CSS for nprogress */}
            <link rel='stylesheet' type='text/css' href='//cdn.jsdelivr.net/pure/0.6.2/pure-min.css' />
            <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>

        <header className='pure-menu pure-menu-horizontal pure-menu-scrollable'>
            <ul className='pure-menu-list'>
                <li className='pure-menu-item pure-menu-item-selected'>
                    <Link href='/'>
                        <a className='pure-menu-link'>Home</a>
                    </Link>
                </li>
                <li className='pure-menu-item'>
                    <Link href='/high-cbd-feminized-hemp-clones'>
                        <a className='pure-menu-link'>High CBD Feminized Hemp Clones</a>
                    </Link>
                </li>
                <li className='pure-menu-item'>
                    <Link href='/high-cbd-hemp-flower'>
                        <a className='pure-menu-link'>High CBD Hemp Flower</a>
                    </Link>
                </li>
                <li className='pure-menu-item'>
                    <Link href='/high-cbd-oils-and-extracts'>
                        <a className='pure-menu-link'>High CBD Oils and Extracts</a>
                    </Link>
                </li>
                <li className='pure-menu-item'>
                    <Link prefetch href='/farm'>
                        <a className='pure-menu-link'>Our Farm</a>
                    </Link>
                </li>
                <li className='pure-menu-item'>
                    <Link href='/cbd-research'>
                        <a className='pure-menu-link'>CBD Research &amp; Articles</a>
                    </Link>
                </li>
                <li className='pure-menu-item'>
                    <Link href='/contact'>
                        <a className='pure-menu-link'>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </header>
    </div>

);
