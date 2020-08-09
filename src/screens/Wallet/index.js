import React, { useState } from 'react';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './style';
import { StatusBar } from 'react-native';

import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'
import { Switch } from 'react-native-gesture-handler';
import creditCard from '../../images/credit-card.png';

export default function Wallet() {

  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    // troca o estado
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    // troca o estado
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      {
        useBalance
          ? <StatusBar barStyle="light-content" backgroundColor="#52e78c" />
          : <StatusBar barStyle="light-content" backgroundColor="#D3D3D3" />
      }
      

      <Header
        colors={
          useBalance
            ? ['#52e78c', '#1ab563']
            : ['#D3D3D3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value> R$ <Bold>{isVisible ? '0,00' : '----'}</Bold></Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={30} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>
                Adicionar
            </ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>
                Adicionar
            </ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle> Usar saldo para pagar </UseBalanceTitle>
        <Switch
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>
      </PaymentMethods>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>
              Cadastre seu cartão de crédito
          </CardTitle>
            <CardInfo>
              Cadastre seu cartão de crédito para poder fazer
              pagamentos mesmo quando não tiver saldo no seu PicPay.
          </CardInfo>
          </CardDetails>
          <Img source={creditCard} resizeMode="contain" />
        </CardBody>
        <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0db060" />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
        </AddButton>
      </Card>

      <UseTicketButton>
        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
        <UseTicketLabel>Adicionar cartão de crédito</UseTicketLabel>
      </UseTicketButton>
    </Wrapper>

  );
}
