import { Stack } from 'expo-router';
import "../../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="home" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="course" options={{ title: 'Course', headerShown: false }} />
    </Stack>
  );
}
