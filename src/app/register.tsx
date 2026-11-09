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
        {/* Intro */}
        <View className="mt-[76px] mb-[34px]">
          <Text className="text-[42px] font-bold leading-[47px] text-on-surface">
            {'Create your\nnew account.'}
          </Text>
        </View>

        {/* Content Container with text (no username and password) */}
        <View className="w-full p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sheet">
        </View>

        {/* Action Button */}
        <View className="w-full mt-6">
          <Pressable
            accessibilityRole="button"
            onPress={handleBackToLogin}
            className="min-h-[56px] flex-row items-center justify-center rounded-xl bg-primary active:opacity-85"
          >
            <Text className="text-[15px] font-bold text-on-primary">
              Back to Log in
            </Text>
            <Text className="absolute right-5 text-[20px] text-on-primary">
              →
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <Text className="mt-auto pt-10 text-center text-[12px] text-slate">
          A little progress, when in mood.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
