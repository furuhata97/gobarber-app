import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px 40px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
  text-align: left;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;

  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const ExitButton = styled(RectButton)`
  height: 32px;
  background: #d4022f;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 0;
  margin-left: 70px;
  margin-right: 70px;
`;

export const ExitButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 12px;
  color: #f4ede8;
`;
