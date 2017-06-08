/**
 *
 * @module farm
 * @desc Our farm view
 *
 */

import React, { Component } from 'react'
import Layout from './../components/layout';
import P from './../components/paragraph';

/**
 *
 * @class Farm
 * @extends Component
 *
 */
export default class Farm extends Component {

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
            <Layout title='Our Farm' identifier='farm'>
                <div>
                    <img className='pure-img' src="/static/images/trump-strain-2.jpeg" />
                    <img className='pure-img' src="/static/images/trump-strain-3.jpeg" />
                </div>
            </Layout>
        )

    };

}
