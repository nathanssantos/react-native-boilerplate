import { useState } from 'react';
import { flowResult } from 'mobx';
import { observer } from 'mobx-react';
import { Formik } from 'formik';
import {
  Alert,
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useStore } from '../../hooks';
import { FormDefinitions } from '../../constants';

const {
  login: { initialValues, validationSchema },
} = FormDefinitions;

const Login = () => {
  const store = useStore();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const onSubmit = async (formValues) => {
    const response = await flowResult(
      store.authStore.authenticate({ ...formValues, mock: true }),
    );

    if (response?.error) {
      Alert('Login Error');
    }
  };

  return (
    <Box padding={4}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          values,
          errors,
        }) => (
          <>
            <Box marginBottom={4}>
              <FormControl isInvalid={touched.email && errors.email}>
                <FormControl.Label>E-mail</FormControl.Label>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
            <Box marginBottom={8}>
              <FormControl isInvalid={touched.password && errors.password}>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  InputRightElement={
                    <Button
                      size="xs"
                      rounded="none"
                      h="full"
                      variant="ghost"
                      onPress={togglePassword}
                    >
                      {showPassword ? (
                        <Icon
                          as={<MaterialIcons name="visibility-off" />}
                          size={5}
                          color="muted.500"
                        />
                      ) : (
                        <Icon
                          as={<MaterialIcons name="visibility" />}
                          size={5}
                          color="muted.500"
                        />
                      )}
                    </Button>
                  }
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
            <Button onPress={handleSubmit}>
              <Text color="#fff">
                {store.authStore.isFetching ? 'Loading...' : 'Login'}
              </Text>
            </Button>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default observer(Login);
