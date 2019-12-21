import { createContext } from 'react';

// empty function is a placeholder - we put a hook into the createContext [state, updater]
const ThemeContext = createContext<[string, (theme: string) => void]>([
  'red',
  () => {},
]);

export default ThemeContext;
