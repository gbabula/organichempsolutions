/**
 *
 * @module cbd-research
 * @desc CBD Research and Articles view
 *
 */

import React, { Component } from 'react'
import Layout from './../components/layout';
import P from './../components/paragraph';

/**
 *
 * @class CbdResearch
 * @extends Component
 *
 */
export default class CbdResearch extends Component {

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
            <Layout title='CBD Research & Articles' identifier='cbd-research'>
                <div>todo</div>
            </Layout>
        );

    };

}
