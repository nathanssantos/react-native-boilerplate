import { flowResult } from 'mobx';
import { observer } from 'mobx-react';
import { Formik } from 'formik';
import {
  Alert,
  Box,
  Button,
  FormControl,
  Input,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import { useStore } from '../../hooks';
import { FormDefinitions } from '../../constants';

const {
  login: { initialValues, validationSchema },
} = FormDefinitions;

const Login = () => {
  const store = useStore();

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
