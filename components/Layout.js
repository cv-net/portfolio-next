import Head from 'next/head';
import Header from './Header';

export default function Layout({title, keywords, description, children}) {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            {children}
        </div>
    );
}

Layout.defaultProps = {
    title: 'Khalil Abdellah | Portfolio',
    description: 'yooo',
    keywords: 'web developer, bro'

}