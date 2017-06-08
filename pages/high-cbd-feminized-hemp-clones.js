/**
 *
 * @module highCbdFeminizedHempClones
 * @desc High CBD Feminized Hemp Clones view
 *
 */

import React, { Component } from 'react'
import Layout from './../components/layout';
import P from './../components/paragraph';

/**
 *
 * @class HighCbdFeminizedHempClones
 * @extends Component
 *
 */
export default class HighCbdFeminizedHempClones extends Component {

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
            <Layout title='High CBD Feminized Hemp Clones' identifier='high-cbd-feminized-hemp-clones'>
                <div>
                    <P>todo</P>
                </div>
            </Layout>
        )

    };

}
