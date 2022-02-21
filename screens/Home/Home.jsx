import { Box, Button, Text } from 'native-base';
import { useStore } from '../../hooks';

const Home = () => {
  const store = useStore();

  return (
    <Box padding={4}>
      <Button
        onPress={() => {
          store.authStore.unauthenticate();
        }}
      >
        <Text color="#fff">Unauthenticate</Text>
      </Button>
    </Box>
  );
};

export default Home;
