/**
 *
 * @module high-cbd-oils-and-extracts
 * @desc High CBD Oils and Extracts view
 *
 */

import React, { Component } from 'react'
import Layout from './../components/layout';
import P from './../components/paragraph';

/**
 *
 * @class HighCbdOilsAndExtracts
 * @extends Component
 *
 */
export default class HighCbdOilsAndExtracts extends Component {

    /**
     *
     * @returns {Object}
     * @note adds small timeout for loading effect
     *
     */
    static async getInitialProps ({ req, res, pathname, asPath, jsonPageRes, err }) {

        await new Promise((resolve) => {
            setTimeout(resolve, 500);
        });

        // console.log(req);
        // console.log(res);
        // console.log(pathname);
        // console.log(asPath);
        // console.log(jsonPageRes);
        // console.log(err);

        return {};

    }

    /**
     *
     * @desc renders component
     * @returns {Function}
     *
     */
    render () {

        return (
            <Layout title='High CBD Oils and Extracts' identifier='high-cbd-oils-and-extracts'>
                <div>
                    <P>todo</P>
                </div>
            </Layout>
        );

    };

}
