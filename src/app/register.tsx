import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleBackToLogin() {
    router.replace('/');
  }

  function handleRegister() {
    router.replace('/home');
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

        {/* Input Form Container */}
        <View className="w-full">
          <Text className="mb-[9px] text-[13px] font-semibold text-on-surface">
            Username
          </Text>

          <TextInput
            accessibilityLabel="Username"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setUsername}
            placeholder="Enter your username"
            placeholderTextColor="#8B918A"
            returnKeyType="next"
            className="mb-[22px] min-h-[54px] rounded-xl border border-outline-variant bg-surface-container-lowest px-4 text-[15px] text-on-surface"
            value={username}
          />

          <View className="flex-row justify-between">
            <Text className="mb-[9px] text-[13px] font-semibold text-on-surface">
              Password
            </Text>
          </View>

          <View className="min-h-[54px] flex-row items-center rounded-xl border border-outline-variant bg-surface-container-lowest">
            <TextInput
              accessibilityLabel="Password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={setPassword}
              onSubmitEditing={handleRegister}
              placeholder="Enter your password"
              placeholderTextColor="#8B918A"
              returnKeyType="done"
              className="min-h-[52px] flex-1 pl-4 text-[15px] text-on-surface"
              value={password}
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View className="w-full mt-6">
          <Pressable
            accessibilityRole="button"
            onPress={handleRegister}
            className="min-h-[56px] flex-row items-center justify-center rounded-xl bg-primary active:opacity-85"
          >
            <Text className="text-[15px] font-bold text-on-primary">
              Register
            </Text>
            <Text className="absolute right-5 text-[20px] text-on-primary">
              →
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={handleBackToLogin}
            className="mt-3 min-h-[56px] flex-row items-center justify-center rounded-xl border border-outline-variant bg-surface-container-lowest active:bg-surface-container-low"
          >
            <Text className="text-[15px] font-bold text-on-surface">
              Back to Log in
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
