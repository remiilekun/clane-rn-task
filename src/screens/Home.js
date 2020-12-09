import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from 'rebass-native';
import Logo from '@assets/svg/logo.svg';
import { Button } from '@components/atoms';

const Wrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  justify-content: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <SafeAreaView>
        <Box mb={40}>
          <Logo />
        </Box>

        <Box mb={20}>
          <Button text="React Hook Form" />
        </Box>

        <Box>
          <Button text="Custom" />
        </Box>
      </SafeAreaView>
    </Wrapper>
  );
};

export default Home;
