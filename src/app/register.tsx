import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
  function handleBackToLogin() {
    router.replace('/');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-background"
    >
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          width: '100%',
          maxWidth: 520,
          alignSelf: 'center',
          paddingHorizontal: 28,
          paddingTop: 24,
          paddingBottom: 28,
        }}
        keyboardShouldPersistTaps="handled"
      >
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
