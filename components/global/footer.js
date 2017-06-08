/**
 *
 * @module footer
 * @desc global footer component
 *
 */

import Link from 'next/link';
import P from './../paragraph';

/**
 *
 * @desc style
 *
 */
const style = {
    footer: {
        background: '#eee',
        margin: '20px auto 0',
        padding: '2em'
    }
};

/**
 *
 * @param {Object}
 * @desc footer component
 *
 */
export default ({ children }) => (

    <footer style={style.footer}>
        <P>Contact us today @ <Link href='mailto:info@newcastleorganix.com'><a>info@newcastleorganix.com</a></Link></P>
    </footer>

);
