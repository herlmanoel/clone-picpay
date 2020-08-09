import React from 'react';

import {
    Container,
    Datails,
    Title,
    Img,
    Description
} from './style';

import img13 from '../../images/13.png';

export default function Banner(){
    return (
        <Container>
            <Datails>
                
                <Title>Cobre um amigo</Title>
                
                <Description>
                    Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
                </Description>
            </Datails>
            <Img source={img13} />
        </Container>
    );
}