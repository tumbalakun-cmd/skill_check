import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  function handleLogout() {
    router.replace('/');
  }

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          width: '100%',
          maxWidth: 520,
          alignSelf: 'center',
          paddingHorizontal: 28,
          paddingTop: 40,
          paddingBottom: 28,
        }}
      >
        <View className="flex-row items-center justify-between mb-8">
          <View>
            <Text className="text-2xl font-bold text-on-surface">
              Dashboard
            </Text>
            <Text className="text-sm text-slate">
              Selamat datang kembali, admin!
            </Text>
          </View>

          <Pressable
            onPress={handleLogout}
            className="px-4 py-2 rounded-lg bg-surface-container-highest active:opacity-75"
          >
            <Text className="text-sm font-semibold text-error">
              Log out
            </Text>
          </Pressable>
        </View>

        <View className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant mb-6 shadow-sheet">
          <Text className="text-lg font-bold text-on-surface mb-2">
            Status Aktivitas
          </Text>
          <Text className="text-sm text-slate leading-relaxed">
            Semua sistem berjalan dengan normal. Anda berhasil masuk menggunakan akun demo.
          </Text>
        </View>

        <View className="flex-row gap-4 mb-8">
          <View className="flex-1 p-4 rounded-xl bg-surface-container-low border border-outline-variant">
            <Text className="text-xs text-slate mb-1">Total Sesi</Text>
            <Text className="text-xl font-bold text-on-surface">24</Text>
          </View>
          <View className="flex-1 p-4 rounded-xl bg-surface-container-low border border-outline-variant">
            <Text className="text-xs text-slate mb-1">Status Keamanan</Text>
            <Text className="text-xl font-bold text-secondary">Aman</Text>
          </View>
        </View>

        <Text className="mt-auto pt-10 text-center text-[12px] text-slate">
          A little progress, when in mood.
        </Text>
      </ScrollView>
    </View>
  );
}