import React from 'react';
import styled, { css } from 'styled-components/native';
import { Box } from 'rebass-native';
import { Text } from '@components/atoms';

const Wrapper = styled.View`
  position: relative;
`;

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.font.family.semibold};
  font-size: 14px;
  margin-bottom: 10px;
`;

const Error = ({ error }) => {
  return error ? (
    <Box mt="5px">
      <Text fontSize="xs" color="pinkRed">
        {error}
      </Text>
    </Box>
  ) : null;
};

const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: 1px solid
    ${({ error, theme }) => theme.colors[error ? 'pinkRed' : 'grey']};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.font.family.normal};
  font-size: ${({ theme }) => theme.font.size.sm};
  height: 60px;
  padding: 10px 15px;
`;

export const Input = ({ label, error, ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <TextInput
        allowFontScaling={false}
        autoCapitalize="none"
        error={error}
        keyboardAppearance="dark"
        placeholderTextColor="#0A386582"
        {...props}
      />
      <Error error={error} />
    </Wrapper>
  );
};
