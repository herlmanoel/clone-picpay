import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #000;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;

`;
export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;
export const Value = styled.Text`
    font-size: 38px;
    color: #fff;
    font-weight: 200;
`;
export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;
export const Bold = styled.Text`
    font-size: 42px;
    color: #fff;
    font-weight: bold;
`;

export const Info = styled.Text`
     color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    margin-top: 40px;
    flex-direction: row;
    
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;  
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
`;
export const UseBalance = styled.View`
    background: #1C1C1E;
    height: 60px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;
export const UseBalanceTitle = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;
export const PaymentMethods = styled.View`

`;
export const PaymentMethodsTitle = styled.Text`
    color: #8e8e93;
    text-transform: uppercase;
    margin-top: 25px;
    padding: 0 16px;
`;

export const Card = styled.View`
   background: #1E232A;
   padding: 20px;
   border-radius: 8px;
   margin: 20px 16px 0;
`;
export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 22px;
`;
export const CardTitle = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;

`;
export const CardInfo = styled.Text`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 15px
`;
export const Img = styled.Image`
    width: 60px;
`;

export const AddButton = styled.View`
    margin-top: 25px;
    flex-direction: row;
    align-items: center;
`;
export const AddLabel = styled.Text`
    color: #0db060;
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
`;

export const UseTicketButton = styled.TouchableOpacity`
    margin-top: 25px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const UseTicketLabel = styled.Text`
    color: #0db060;
    font-size: 16px;
    font-weight: bold;
    margin-left: 15px;
    text-decoration: underline;
`;
