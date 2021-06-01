import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import styled from 'styled-components';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const HeaderStyle = styled.div`
    display: flex;
    flex-flow: column no-wrap;
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

export default function Header() {
    const [ temperature, setTemp ] = useState();
    const [ iconUrl, setUrl ] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=${keys.openweatherdata}`);
                setUrl(`https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`);
                setTemp(parseInt(res.data.main.temp))
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    return(

        <HeaderStyle>
            <div className='spacer'></div>
            <ul className='header-ul'>
                <li>khalil abdellah</li>
                <li>khalil.mktg@gmail.com</li>
                <li><a href='https://google.com' target='_blank' rel="noreferrer">resume</a></li>
            </ul>
            <ul className='header-ul'>
                <li>home</li>
                <li>freq.ly used code</li>
                <li>data journalism</li>
            </ul>
            <ul className='header-ul'>
                <li>Site under construction..</li>
                <li>Philadelphia, PA</li>
                <li><img src={iconUrl} alt='icon depicting current weather forecast'></img><h5>{temperature}&#176;</h5></li>
            </ul>
            <div className='socials'>
                <a href='https://twitter.com/abdellica' target='_blank' rel="noreferrer">
                    {/* <img src={twitter} alt="link to Khalil Abdellah's Twitter page"/>   */}
                </a>      
                <a href='https://linkedin.com/in/khalilabdellah' target='_blank' rel="noreferrer">
                    {/* <img src={linkedin} alt="link to Khalil Abdellah's LinkedIn page"/> */}
                </a>
                <a href='https://github.com/cv-net' target='_blank' rel="noreferrer">
                    {/* <img src={github} alt="link to Khalil Abdellah's GitHub page"/> */}
                </a>
            </div>
        </ HeaderStyle>

    );
}