import { createContext, Dispatch, SetStateAction } from 'react';

type Settings = {
  showSettings: boolean;
  setShowSettings: Dispatch<SetStateAction<boolean>>;
  workMinutes: number;
  setWorkMinutes: Dispatch<SetStateAction<number>>;
  breakMinutes: number;
  setBreakMinutes: Dispatch<SetStateAction<number>>;
};

const SettingsContext = createContext({} as Settings);

export default SettingsContext;
