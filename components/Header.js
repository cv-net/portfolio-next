import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import keys from '../keys';
import Link from 'next/link';
import styled from 'styled-components';
import { StaticRouter as Router, Route, Switch} from 'react-router-dom';
import Image from 'next/image';

const HeaderStyle = styled.div`
    display: flex;
    flex-flow: row no-wrap;
    border-bottom: 2px solid #CDCDEB;
    a:link, a:visited, a:active {
        color: black;
    }
    a:hover {
        color: #CDCDEB;
        color: white;
        background-color: black;
    }
    .spacer {
        padding:
    }
`

export default function Header({url, temp}) {

    return(
        <Router>
            <Switch>
        <HeaderStyle>
            <div className='spacer'></div>
            <ul className='header-ul'>
                <li>khalil abdellah</li>
                <li>khalil.mktg@gmail.com</li>
                <li><a href='/resume621.pdf' target='_blank' rel="noreferrer">resume</a></li>
            </ul>
            <ul className='header-ul'>
                <li><Link href='/'>home</Link></li>
                <li>freq.ly used code</li>
                <li><Link href='/datajournalism'>data journalism</Link></li>
            </ul>
            <ul className='header-ul'>
                <li>Site under construction..</li>
                {/* <li>Philadelphia, PA</li>
                <li><img src={url} alt='icon depicting current weather forecast'/><h5>{temp}&#176;</h5></li> */}
            </ul>
            <div className='socials'>
                <a href='https://twitter.com/abdellica' target='_blank' rel="noreferrer">
                    <Image src='/img/twitter.png' alt="link to Khalil Abdellah's Twitter page" width={10} height={10} />  
                </a>      
                <a href='https://linkedin.com/in/khalilabdellah' target='_blank' rel="noreferrer">
                    <Image src='/img/linkedin.png' alt="link to Khalil Abdellah's LinkedIn page" width={10} height={10} />
                </a>
                <a href='https://github.com/cv-net' target='_blank' rel="noreferrer">
                    <Image src='/img/github.png' alt="link to Khalil Abdellah's GitHub page" width={10} height={10} />
                </a>
            </div>
            <div className='spacer'></div>
        </ HeaderStyle>
            </Switch>
        </Router>

    );
}

// export async function getStaticProps() {
//     try {
//         const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=${keys.openweatherdata}`);
//         let url = `https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`;
//         let temp = parseInt(res.data.main.temp)
        
//         return {
//             props: {
//                 url,
//                 temp
//             },
//         }

//     } catch (err) {
//         console.log(err);
//     }
// }