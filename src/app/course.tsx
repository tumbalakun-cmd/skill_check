import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';

const syllabusModules = [
  {
    id: '01',
    title: 'Syllabus Module 1',
    tag: 'Free Preview',
    subtitle: '4 lessons · 0 min total',
    lessons: [
      { id: '1.1', title: '1.1', duration: '00:00' },
      { id: '1.2', title: '1.2', duration: '00:00' },
      { id: '1.3', title: '1.3', duration: '00:00' },
      { id: '1.4', title: '1.4', duration: '00:00' },
    ],
  },
  {
    id: '02',
    title: 'Syllabus Module 2',
    subtitle: '2 lessons · 0 min total',
    lessons: [
      { id: '2.1', title: '2.1', duration: '00:00' },
      { id: '2.2', title: '2.2', duration: '00:00' },
    ],
  },
];

export default function CourseScreen() {
  function handleLogout() {
    router.replace('/');
  }

  function handleBack() {
    router.replace('/home');
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
        {/* Navigation & Action Row */}
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
            <View className="w-10 h-10 rounded-full bg-surface-container items-center justify-center">
              <Text className="text-xl text-on-surface">☆</Text>
            </View>

            <View className="w-10 h-10 rounded-full bg-surface-container items-center justify-center">
              <Text className="text-xl font-bold text-on-surface">🔗</Text>
            </View>
          </View>
        </View>

        {/* Video Container */}
        <View
          className="relative w-full rounded-2xl overflow-hidden bg-[#ece8e0] mb-6 shadow-sm border border-[#eeeae2] items-center justify-center"
          style={{ aspectRatio: 16 / 9 }}
        >
      
          <View className="absolute inset-0 bg-black/25" />

          {/* Centered Play Button */}
          <View className="w-14 h-14 rounded-full bg-white/95 items-center justify-center shadow-lg">
            <Text className="text-2xl text-[#1c1c17] ml-0.5">▶</Text>
          </View>
        </View>

        {/* Course Syllabus / Modules */}
        <View className="mb-8">
          <View className="mb-3.5">
            <Text className="text-base font-bold text-[#1c1c17]">
              Course Syllabus
            </Text>
            <Text className="text-xs text-[#706e68]">
              4 core units · 2 practical diagnostics
            </Text>
          </View>

          {/* Module Cards */}
          {syllabusModules.map((module) => (
            <View
              key={module.id}
              className="bg-white rounded-2xl border border-[#eeeae2] overflow-hidden mb-3.5 shadow-sm"
            >
              {/* Module Header */}
              <View className="p-4 flex-row items-center gap-3">
                <View className="w-7 h-7 rounded-lg bg-[#f1ede6] items-center justify-center">
                  <Text className="text-xs font-bold text-[#1c1c17]">
                    {module.id}
                  </Text>
                </View>
                <View className="flex-1">
                  <View className="flex-row items-center gap-2 flex-wrap">
                    <Text className="text-sm font-bold text-[#1c1c17]">
                      {module.title}
                    </Text>
                    {module.tag && (
                      <View className="px-2 py-0.5 rounded-full bg-[#396660]/10">
                        <Text className="text-[10px] font-semibold text-[#396660]">
                          {module.tag}
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text className="text-xs text-[#706e68] mt-0.5">
                    {module.subtitle}
                  </Text>
                </View>
              </View>

              {/* Lessons List (always expanded) */}
              <View className="px-4 pb-4 gap-2">
                {module.lessons.map((lesson) => (
                  <View
                    key={lesson.id}
                    className="flex-row items-center justify-between py-2.5 px-3 rounded-xl bg-[#f7f3eb]"
                  >
                    <Text
                      className="text-xs font-semibold text-[#1c1c17] flex-1 mr-2"
                      numberOfLines={1}
                    >
                      {lesson.title}
                    </Text>
                    <Text className="text-[11px] text-[#706e68]">
                      {lesson.duration}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Course Rating */}
        <View className="mb-8">
          <View className="mb-3.5 flex-row items-center justify-between">
            <Text className="text-base font-bold text-[#1c1c17]">
              Course Rating
            </Text>
            <Text className="text-xs text-[#706e68]">
              Verified Evaluators
            </Text>
          </View>

          <View className="p-4 rounded-2xl bg-white border border-[#eeeae2] shadow-sm">
            <View className="flex-row items-center justify-between">
              <View>
                <View className="flex-row items-baseline gap-1.5">
                  <Text className="text-3xl font-bold text-[#1c1c17]">4.9</Text>
                  <Text className="text-xs text-[#706e68]">/ 5.0</Text>
                </View>
                <Text className="text-sm text-[#D97706] mt-1 tracking-widest">
                  ★★★★★
                </Text>
                <Text className="text-xs text-[#706e68] mt-1">
                  1,240 verified ratings
                </Text>
              </View>

              <View className="items-end">
                <View className="px-2.5 py-1 rounded-full bg-[#f7f3eb]">
                  <Text className="text-[11px] font-semibold text-[#396660]">
                    ✓ 98% Positive
                  </Text>
                </View>
                <Text className="text-[11px] text-[#706e68] mt-1">
                  Top Rated
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Text className="mt-auto pt-10 text-center text-[12px] text-slate">
          A little progress, when in mood.
        </Text>
      </ScrollView>
    </View>
  );
}
