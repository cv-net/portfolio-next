import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import fs from 'fs';
import styled from 'styled-components';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from '../components/Layout';
// import twitter from './img/twitter.png';
// import linkedin from './img/linkedin.png';
// import github from './img/github.png';
// import resume from './resume521.pdf';
// import headerbg from './img/ibnalrabin.png';



const HomeStyle = styled.div`
  body {
    font-family: sans-serif, 'Segoe-UI';
  }
  .nav {
    width: 100%;
    height: 20%;
    padding: 1em;
    margin: 0 auto;
    color: white;
    background-color: #CDCDCD;
  }
`

export default function Home({slugs}) {
  return(
    <Layout>    
      <HomeStyle>
        <div className='nav'>
          Blog posts:
          {slugs.map(slug => {
            return (
              <div key={slug}>
                <Link href={'/blog/' + slug}>
                  <a> {'/blog/' + slug} </a>
                </Link>
              </div>
            );
          })}
        </div>
      </HomeStyle>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', ''))
    }
  }
}
