import PomodoroTimer from './PomodoroTimer';
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

function Pomodoro() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <PomodoroTimer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default Pomodoro;
