import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box } from 'rebass-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export const BackArrow = ({ px, ...props }) => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack} {...props}>
      <Box px={px}>
        <Icon name="arrow-back" color="#2E1F82" size={24} />
      </Box>
    </TouchableOpacity>
  );
};

BackArrow.defaultProps = {
  px: 20,
};

export default BackArrow;
