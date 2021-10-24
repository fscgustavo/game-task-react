import { Box } from '@chakra-ui/layout';
import Header from '../../components/Header/Header';
import Pomodoro from '../../components/Pomodoro/Pomodoro';
import Stats from '../../components/Stats/Stats';

export default function PomodoroPage() {
  return (
    <>
      <Header />
      <Box
        as="main"
        maxWidth="1024px"
        marginInline="auto"
        display="grid"
        gridGap={4}
        padding="24px 16px"
        placeItems="center"
      >
        <Stats />
        <Box
          className="pomodoro"
          maxWidth="340px"
          textAlign="center"
          marginTop="40px"
        >
          <Pomodoro />
        </Box>
      </Box>
    </>
  );
}
