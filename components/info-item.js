/**
 *
 * @module info-item
 *
 */

/**
 *
 * @param {Object}
 * @desc info-item component
 *
 */
export default ({ title, children }) => (

    <section className='info-item'>
        <h1>{title}</h1>

        {children}

        <style jsx>{`
            p {
                color: red;
            }
        `}</style>
    </section>

);
