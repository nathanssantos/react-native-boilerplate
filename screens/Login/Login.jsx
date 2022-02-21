import { flowResult } from 'mobx';
import { observer } from 'mobx-react';
import { Alert, Box, Button, Input, Text } from 'native-base';
import { useStore } from '../../hooks';

const Login = () => {
  const store = useStore();

  const authenticate = async () => {
    const response = await flowResult(
      store.authStore.authenticate({ mock: true }),
    );

    if (response?.error) {
      Alert('Login Error');
    }
  };

  return (
    <Box padding={4}>
      <Box marginBottom={2}>
        <Input placeholder="E-mail" />
      </Box>
      <Box marginBottom={4}>
        <Input placeholder="Password" />
      </Box>
      <Button onPress={authenticate}>
        <Text color="#fff">
          {store.authStore.isFetching ? 'Loading...' : 'Login'}
        </Text>
      </Button>
    </Box>
  );
};

export default observer(Login);
