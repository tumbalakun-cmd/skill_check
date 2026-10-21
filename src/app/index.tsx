
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleLogin() {
    if (!username.trim() || !password) {
      setMessage('Enter your username and password to continue.');
      return;
    }

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long.');
      return;
    }

    if (username === 'admin' && password === '1sampai8') {
      setMessage(`Demo login submitted for ${username.trim()}.`);
    } else {
      setMessage(
        'Invalid username or password. (Username: admin, Password: 1sampai8)'
      );
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-[#F4F3EC]"
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
          <Text className="text-[42px] font-bold leading-[47px] text-black">
            {'Good to\nsee you again.'}
          </Text>
        </View>

        {/* Login Form */}
        <View className="w-full">
          <Text className="mb-[9px] text-[13px] font-semibold text-black">
            Username
          </Text>

          <TextInput
            accessibilityLabel="Username"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => {
              setUsername(value);
              setMessage('');
            }}
            placeholder="Enter your username"
            placeholderTextColor="#8B918A"
            returnKeyType="next"
            className="mb-[22px] min-h-[54px] rounded-xl border border-[#BBBBBB] bg-white px-4 text-[15px] text-black"
            value={username}
          />

          <View className="flex-row justify-between">
            <Text className="mb-[9px] text-[13px] font-semibold text-black">
              Password
            </Text>
          </View>

          <View className="min-h-[54px] flex-row items-center rounded-xl border border-[#BBBBBB] bg-white">
            <TextInput
              accessibilityLabel="Password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(value) => {
                setPassword(value);
                setMessage('');
              }}
              onSubmitEditing={handleLogin}
              placeholder="Enter your password"
              placeholderTextColor="#8B918A"
              returnKeyType="done"
              className="min-h-[52px] flex-1 pl-4 text-[15px] text-black"
              value={password}
            />
          </View>

          {/* Validation Message */}
          <Text
            accessibilityLiveRegion="polite"
            className="min-h-[36px] pt-[10px] text-[12px] text-[#FF2F00]"
          >
            {message}
          </Text>

          {/* Login Button */}
          <Pressable
            accessibilityRole="button"
            onPress={handleLogin}
            className="min-h-[56px] flex-row items-center justify-center rounded-xl bg-black active:opacity-85"
          >
            <Text className="text-[15px] font-bold text-white">
              Log in
            </Text>

            <Text className="absolute right-5 text-[20px] text-white">
              →
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <Text className="mt-auto pt-10 text-center text-[12px] text-[#8B918A]">
          A little progress, when in mood.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
