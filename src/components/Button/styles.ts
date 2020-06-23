import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  min-width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
  /* No React native não é necessário o display flex pois por
  padrão já é tudo flex
   */
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;
