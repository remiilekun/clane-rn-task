import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from '@components/atoms';
import { Input, NavHeader } from '@components/molecules';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  padding: 20px;
`;

const TextWrapper = styled.View`
  margin-bottom: 20px;
`;

const InputWrapper = styled.View`
  margin-bottom: 20px;
`;

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  number: yup
    .number()
    .typeError('Value should be a number')
    .required('Number is required'),
  optional: yup.string(),
  required: yup.string().required('Field is required'),
});

const formFields = [
  {
    label: 'Email',
    defaultValue: '',
    name: 'email',
  },
  {
    label: 'Number',
    defaultValue: '',
    name: 'number',
  },
  {
    label: 'Optional field',
    defaultValue: '',
    name: 'optional',
  },
  {
    label: 'Required field',
    defaultValue: '',
    name: 'required',
  },
];

const ReactHookForm = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerShown: true,
      headerLeft: () => <NavHeader.BackArrow />,
    });
  }, [navigation]);

  const getError = field => {
    if (errors[field] && errors[field].message) return errors[field].message;

    return null;
  };

  const onSubmit = form => {
    // do something with form
    Alert.alert('Form submitted successfully');
  };

  return (
    <Wrapper>
      <SafeAreaView>
        <TextWrapper>
          <Text
            color="black"
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
          >
            Welcome to Access!
          </Text>
        </TextWrapper>

        <TextWrapper>
          <Text
            color="grey"
            fontSize="xs"
            fontWeight="semibold"
            textAlign="center"
          >
            In order to open an account, please fill in the details below
          </Text>
        </TextWrapper>

        <TextWrapper>
          <Text
            color="orange"
            fontSize="sm"
            fontWeight="semibold"
            textAlign="center"
          >
            Create an account with BVN
          </Text>
        </TextWrapper>

        {formFields.map(field => (
          <InputWrapper>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <Input
                  label={field.label}
                  error={getError(field.name)}
                  onBlur={onBlur}
                  onChangeText={v => onChange(v)}
                  value={value}
                />
              )}
              defaultValue={field.defaultValue}
              name={field.name}
            />
          </InputWrapper>
        ))}

        <Button text="CONTINUE" onPress={handleSubmit(onSubmit)} />
      </SafeAreaView>
    </Wrapper>
  );
};

export default ReactHookForm;
