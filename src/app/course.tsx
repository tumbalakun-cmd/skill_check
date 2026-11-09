import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, ScrollView, Share, Platform, Image } from 'react-native';
import { router } from 'expo-router';

export default function CourseScreen() {
  const [isSaved, setIsSaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleLogout() {
    router.replace('/');
  }
  function handleBack() {
    router.replace('/home');
  }

  function handleSave() {
    setIsSaved((prev) => !prev);
  }

  function handlePlayVideo() {
    setIsPlaying((prev) => !prev);
  }

  async function handleShare() {
    try {
      if (Platform.OS === 'web' && typeof navigator !== 'undefined' && !navigator.share) {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText('Check out Mastering Product Design Systems on Skill Check!');
          alert('Link copied to clipboard!');
          return;
        }
      }
      await Share.share({
        message: 'Check out Mastering Product Design Systems on Skill Check!',
        title: 'Mastering Product Design Systems',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  }

  return (
    <View className="flex-1 bg-[#fdf9f1]">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="h-16 px-5 flex-row items-center justify-between bg-[#fdf9f1] border-b border-[#eeeae2]">
        <Pressable onPress={handleBack} className="flex-row items-center gap-2">
          <View className="w-9 h-9 rounded-xl bg-[#396660] items-center justify-center">
            <Text className="text-white text-lg font-bold">S</Text>
          </View>
          <Text className="text-lg font-bold text-[#1c1c17]">Skill Check</Text>
        </Pressable>

        <View className="flex-row items-center gap-4">
          <Pressable onPress={handleBack}>
            <Text className="text-sm font-semibold text-[#464742]">Home</Text>
          </Pressable>
          <Pressable
            onPress={handleLogout}
            className="w-9 h-9 rounded-full bg-[#e6e2db] items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Log out"
          >
            <Text className="text-sm font-bold text-[#1c1c17]">AD</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          width: '100%',
          maxWidth: 520,
          alignSelf: 'center',
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 28,
        }}
      >
        <View className="flex-row items-center justify-between mb-6">
          <Pressable
            onPress={handleBack}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            className="w-10 h-10 rounded-full bg-surface-container items-center justify-center active:bg-surface-variant"
          >
            <Text className="text-xl font-bold text-on-surface">←</Text>
          </Pressable>

          <View className="flex-row items-center gap-2">
            <Pressable
              onPress={handleSave}
              accessibilityRole="button"
              accessibilityLabel={isSaved ? 'Saved to bookmarks' : 'Save course'}
              className={`w-10 h-10 rounded-full items-center justify-center active:bg-surface-variant ${
                isSaved ? 'bg-secondary/15' : 'bg-surface-container'
              }`}
            >
              <Text
                className={`text-xl ${
                  isSaved ? 'text-secondary' : 'text-on-surface'
                }`}
              >
                {isSaved ? '★' : '☆'}
              </Text>
            </Pressable>

            <Pressable
              onPress={handleShare}
              accessibilityRole="button"
              accessibilityLabel="Share syllabus"
              className="w-10 h-10 rounded-full bg-surface-container items-center justify-center active:bg-surface-variant"
            >
              <Text className="text-xl font-bold text-on-surface">🔗</Text>
            </Pressable>
          </View>
        </View>

        {/* Hero Video Preview Container */}
        <View
          className="relative w-full rounded-2xl overflow-hidden bg-[#ece8e0] mb-6 shadow-sm"
          style={{ aspectRatio: 16 / 9 }}
        >
          
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