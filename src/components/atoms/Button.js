import React from 'react';
import styled from 'styled-components/native';
import { Text } from './Text';

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  height: 45px;
  justify-content: center;
  width: 100%;
`;

export const Button = ({ text, ...props }) => {
  return (
    <Wrapper activeOpacity={0.8} {...props}>
      <Text color="white" fontWeight="bold" fontsize="md">
        {text}
      </Text>
    </Wrapper>
  );
};
