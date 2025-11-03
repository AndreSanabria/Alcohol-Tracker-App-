import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomTabs from './BottomTabs';

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: '#F9F6EF' },
};

export default function RootNavigation() {
  return (
    <NavigationContainer theme={theme}>
      <BottomTabs />
    </NavigationContainer>
  );
}
