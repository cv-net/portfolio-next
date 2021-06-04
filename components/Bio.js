import Image from 'next/image';
import styled from 'styled-components';
import Card from './Card';
import { StaticRouter as Router, Route, Link, Switch } from 'react-router-dom';

const ProjectStyle = styled.div`
    border: 2px solid black;
    padding: 1.5em;
    border-radius: 15px;
    img {
        width: 100%;
    }
    .bio {
        width: 30%;
        display: grid;
        grid-template-rows: 50% 50%;
        grid-template-columns: 1fr 1fr;
    }
    p {
        font-family: serif, 'Footlight MT Light';
    }
    h4 {
        letter-spacing: .1em;
    }
`



export default function Bio() {
    return(
        <Router>
            <Switch>
        <div>
            <div className='bio'>
            <div>
                <h2>Khalil Abdellah</h2>
                <p>khalil.mktg@gmail.com</p>
                    <p>
                        I'm a recent graduate in Marketing from Temple University, 
                        building skills and looking for experience in UX, web development, and SEO. <br/>
                        My biggest interest now is using UX for journalism, or communication design.
                    </p>
                    <p><a href='/resume621.pdf' target='_blank' rel='noreferrer'>Resume</a> | <a href='https://twitter.com/abdellica' target='_blank' rel='noreferrer'>Twitter</a></p>
            </div>
            <div></div>
            </div>
            <h3>Projects</h3>
            <hr />
            <ProjectStyle>
                <Link to='/datajournalism'><h4>Plastic Bag Props</h4></Link>
                <p>
                    Data visualization using Tableau and editorial. Data analysis using Python and Pandas.
                </p>
                <Link to='/datajournalism' >
                    <Image src='/img/plastic_bag_props/fig.3.jpg' alt='Tableau data visualization by Khalil Abdellah' width={1833} height={731} />
                </Link>

            </ProjectStyle>
            <hr />
            <ProjectStyle>
                <h4>React Journal Timer (WIP)</h4>
                <p>
                    Productivity aid built with create-react-app framework, Hooks, and Styled Components.
                </p>
                <Card />
            </ProjectStyle>
        </div>
        </Switch>
        </Router>
    );
}