/**
 *
 * @module contact
 * @desc Contact Us view
 *
 */

import React, { Component } from 'react'
import Layout from './../components/layout'
import P from './../components/paragraph';

/**
 *
 * @class Contact
 * @extends Component
 *
 */
export default class Contact extends Component {

    /**
     *
     * @returns {Object}
     * @note adds small timeout for loading effect
     *
     */
    static async getInitialProps () {

        await new Promise((resolve) => {
            setTimeout(resolve, 500);
        });

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
            <Layout title='Contact Us' identifier='contact'>
                <div>...</div>
            </Layout>
        )

    };

}
