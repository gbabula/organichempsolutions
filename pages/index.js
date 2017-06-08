/**
 *
 * @module index
 * @desc Home view
 * @see https://zeit.co/blog/next2
 * @see https://purecss.io/
 *
 */

import Layout from './../components/layout';
import P from './../components/paragraph';
import InfoItem from './../components/info-item';

/**
 *
 * @desc home view
 *
 */
export default () => (

    <Layout title='Home' identifier='home'>
        <section>
            <P>Welcome to New Castle Organix, a high quality hemp cultivating operation located in the Colorado Rocky Mountains.</P>

            <P>Our mission is to provide the absolute best in top tier high-CBD Hemp, intended for use in extraction
            applications, at great prices and consistent availability. Every day we strive to apply our
            extensive cannabis-specific horticulture knowledge to the rich and fertile land of New Castle Colorado.</P>

            <P>This complete dedication to the craft, which we consider a lifestyle, enables us to produce extremely
            large and vigorous <strong>high-CBD plants</strong>, as well as <strong>the most sought after clones on the market</strong>.</P>

            <P>At New Castle Organix we make every effort, take every precaution and spare no expense to ensure that
            our plants meet their peak potential through every stage of growth and production.</P>

            <hr />

            <InfoItem>
                <P>WIP</P>
            </InfoItem>

            <InfoItem>
                <P>WIP</P>
            </InfoItem>
        </section>
    </Layout>

);
