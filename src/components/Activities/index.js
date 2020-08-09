import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Devider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './style';

import avatar from '../../images/avatar.png';

export default function Activities() {
    return (
        <Container>

            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />

                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@herlmanoel</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Herlmanoel Fernandes</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>
                            R$ 500,00
                    </Value>

                        <Devider />


                        <Feather name="lock" color="#fff" />
                        <Date>há 2 anos</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons 
                                name="comment-outline" 
                                size={14} 
                                color="#fff" 
                            />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign 
                                name="hearto" 
                                size={14} 
                                color="#fff" 
                            />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>




        </Container>
    );
}