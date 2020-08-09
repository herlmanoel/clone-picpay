import React from 'react';

import { Container, Option, Img, Label } from './style';

import img01 from '../../images/01.png'
import img02 from '../../images/02.png'
import img03 from '../../images/03.png'
import img04 from '../../images/04.png'
import img05 from '../../images/05.png'
import img06 from '../../images/06.png'
import img07 from '../../images/07.png'

const items = [
    {
        key: String(Math.random),
        img: img01,
        label: 'Doações',
    },
    {
        key: String(Math.random),
        img: img02,
        label: 'Doações',
    },
    {
        key: String(Math.random),
        img: img03,
        label: 'Doações',
    },
    {
        key: String(Math.random),
        img: img04,
        label: 'Doações',
    },
    {
        key: String(Math.random),
        img: img05,
        label: 'Doações',
    },
    {
        key: String(Math.random),
        img: img06,
        label: 'Doações',
    },
    {
        key: String(Math.random),
        img: img07,
        label: 'Doações',
    },
]

export default function Suggestions() {
    return (
        <Container >
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img} />
                    <Label>{item.label}</Label>
                </Option>
            ))} 
        </Container>
    );
}