/**
 *
 * @module high-cbd-hemp-flower
 * @desc High CBD Hemp Flower view
 *
 */

import React, { Component } from 'react'
import Layout from './../components/layout';
import P from './../components/paragraph';

/**
 *
 * @class HighCbdHempFloder
 * @extends Component
 *
 */
export default class HighCbdHempFlower extends Component {

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
            <Layout title='High CBD Hemp Flower' identifier='high-cbd-hemp-flower'>
                <div>
                    <P>todo</P>
                </div>
            </Layout>
        );

    };

}
