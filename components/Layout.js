import Head from 'next/head';
import Header from './Header';
import styled from 'styled-components';

const LayoutStyle = styled.div`
    .content {
        margin: 0 auto;
        width: 60%
    }
    .container {
        display: flex;
        flex-flow: row no-wrap;
    }
    .panel {
        width: 20%
    }
`

export default function Layout({title, keywords, description, children}) {
    return(
        <LayoutStyle>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            <div className='container'>
                <div className='panel'></div>
                <div className='content'>
                    {children}
                </div>
                <div className='panel'></div>
            </div>
        </LayoutStyle>
    );
}

Layout.defaultProps = {
    title: 'Khalil Abdellah | Portfolio',
    description: 'yooo',
    keywords: 'web developer, react.js, python, accessibility, note-taking apps, productivity aid'
}