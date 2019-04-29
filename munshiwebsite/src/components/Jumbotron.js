import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import containerimage from '../assets/container.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${containerimage}) no-repeat fixed bottom;
        background-size: cover;
        color: #fff;
        height: 200px;
        position: relative;
        z-index: -200;
        
        
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute 0 0 0 0;
        z-index:-50;
    }
`;

export const Jumbotron = () =>(
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
            </Container>
        </Jumbo>
     </Styles>

)
