import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

const categories = ['Popular', 'Design', 'Technology', 'Business', 'Creative'];

const courses = [
  {
    title: 'UI/UX Heuristics Evaluation',
    level: 'Intermediate',
    duration: '20m',
    tests: '14 verification tests',
    category: 'Design'
    //image:
  },
  {
    title: 'Python Scripting for Automation',
    level: 'Beginner',
    duration: '15m',
    tests: '8 verification tests',
    category: 'Technology'
    //image:
  },
  {
    title: 'Strategic Editorial & Copywriting',
    level: 'Advanced',
    duration: '25m',
    tests: '18 verification tests',
    category: 'Creative'
    //image:
  },
  {
    title: 'Product Funnel & Cohort Analysis',
    level: 'Intermediate',
    duration: '18m',
    tests: '12 verification tests',
    category: 'Business',
    //image:
  }
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Popular');

  function handleLogout() {
    router.replace('/');
  }

  const visibleCourses =
    activeCategory === 'Popular'
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <View className="flex-1 bg-[#fdf9f1]">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="h-16 px-5 flex-row items-center justify-between bg-[#fdf9f1] border-b border-[#eeeae2]">
        <View className="flex-row items-center gap-2">
          <View className="w-9 h-9 rounded-xl bg-[#396660] items-center justify-center">
            <Text className="text-white text-lg font-bold">S</Text>
          </View>
          <Text className="text-lg font-bold text-[#1c1c17]">Skill Check</Text>
        </View>

        <View className="flex-row items-center gap-4">
          <Text className="text-sm font-semibold text-[#464742]">Home</Text>
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
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 112 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Greeting */}
        <View className="px-5 pt-5 pb-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-2">
              <Text className="text-[11px] font-bold tracking-widest text-[#66675f]">
                DASHBOARD
              </Text>
              <Text className="mt-1 text-[26px] leading-8 font-bold text-[#1c1c17]">
                Welcome back, ...
              </Text>
            </View>
          </View>
        </View>

        {/* Metrics */}
        <View className="px-5 py-2">
          <View className="flex-row items-center rounded-xl bg-white px-2 py-4">
            <View className="flex-1 items-center">
              <Text className="text-xl font-bold text-[#1c1c17]">12</Text>
              <Text className="mt-1 text-[10px] text-[#66675f]">Skills Checked</Text>
            </View>
            <View className="h-9 w-px bg-[#ece8e0]" />
            <View className="flex-1 items-center">
              <Text className="text-xl font-bold text-[#396660]">92%</Text>
              <Text className="mt-1 text-[10px] text-[#66675f]">Avg Accuracy</Text>
            </View>
            <View className="h-9 w-px bg-[#ece8e0]" />
            <View className="flex-1 items-center">
              <Text className="text-xl font-bold text-[#1c1c17]">4</Text>
              <Text className="mt-1 text-[10px] text-[#66675f]">Certificates</Text>
            </View>
          </View>
        </View>

        {/* Continue learning */}
        <View className="pt-5">
          <View className="px-5 mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-[#1c1c17]">Continue learning</Text>
            <Pressable>
              <Text className="text-xs font-bold text-[#396660]">View all  ›</Text>
            </Pressable>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
          >
            <View className="w-[270px] rounded-xl bg-white p-3">
              <View className="h-32 overflow-hidden rounded-lg bg-[#ece8e0]">

                <View className="absolute left-2 top-2 rounded-full bg-[#1c1c1a] px-2 py-1">
                  <Text className="text-[10px] font-semibold text-white">Module 4 of 6</Text>
                </View>
                <View className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1">
                  <Text className="text-[10px] font-semibold text-[#1c1c17]">◷ 12 min left</Text>
                </View>
              </View>
              <View className="mt-3">
                <View className="flex-row justify-between">
                  <Text className="text-[10px] font-bold uppercase tracking-wider text-[#396660]">
                    Design Systems
                  </Text>
                  <Text className="text-[10px] text-[#66675f]">65%</Text>
                </View>
                <Text className="mt-1 text-sm font-bold text-[#1c1c17]">
                  Mastering Product Design
                </Text>
                <View className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e6e2db]">
                  <View className="h-full w-[65%] rounded-full bg-[#396660]" />
                </View>
              </View>
              <Pressable className="mt-3 h-10 flex-row items-center justify-center rounded-lg bg-[#1c1c1a]">
                <Text className="text-xs font-bold text-white">Resume Assessment  →</Text>
              </Pressable>
            </View>

            <View className="w-[270px] rounded-xl bg-white p-3">
              <View className="h-32 overflow-hidden rounded-lg bg-[#ece8e0]">

                <View className="absolute left-2 top-2 rounded-full bg-[#1c1c1a] px-2 py-1">
                  <Text className="text-[10px] font-semibold text-white">Module 2 of 5</Text>
                </View>
                <View className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1">
                  <Text className="text-[10px] font-semibold text-[#1c1c17]">◷ 15 min test</Text>
                </View>
              </View>
              <View className="mt-3">
                <View className="flex-row justify-between">
                  <Text className="text-[10px] font-bold uppercase tracking-wider text-[#396660]">
                    Quantitative
                  </Text>
                  <Text className="text-[10px] text-[#66675f]">40%</Text>
                </View>
                <Text className="mt-1 text-sm font-bold text-[#1c1c17]">
                  Advanced Data Analysis
                </Text>
                <View className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e6e2db]">
                  <View className="h-full w-[40%] rounded-full bg-[#396660]" />
                </View>
              </View>
              <Pressable className="mt-3 h-10 flex-row items-center justify-center rounded-lg bg-[#ece8e0]">
                <Text className="text-xs font-bold text-[#1c1c17]">Resume Assessment  →</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>

        {/* Daily challenge */}
        <View className="px-5 pt-5">
          <Pressable className="flex-row items-center gap-3 rounded-xl bg-[#f7f3eb] p-4">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#396660]">
              <Text className="text-xl font-bold text-white">ϟ</Text>
            </View>
            <View className="flex-1">
              <View className="flex-row items-center gap-2">
                <Text className="text-[10px] font-bold uppercase tracking-wider text-[#396660]">
                  Daily Diagnostic
                </Text>
                <Text className="rounded bg-[#ffdcc3] px-1.5 py-0.5 text-[10px] font-bold text-[#6e3900]">
                  +50 XP
                </Text>
              </View>
              <Text className="mt-1 text-sm font-bold text-[#1c1c17]">
                Figma Prototyping Speed Test
              </Text>
              <Text className="mt-1 text-xs leading-4 text-[#66675f]">
                5 quick questions on auto-layout tokens and component variants.
              </Text>
            </View>
            <Text className="text-lg text-[#1c1c17]">›</Text>
          </Pressable>
        </View>

        {/* Explore skills */}
        <View className="pt-7">
          <View className="mb-4 flex-row items-center justify-between px-5">
            <Text className="text-lg font-bold text-[#1c1c17]">Explore new skill</Text>
            <Text className="text-[10px] font-medium text-[#66675f]">64 assessments available</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}
          >
            {categories.map((category) => {
              const selected = activeCategory === category;
              return (
                <Pressable
                  key={category}
                  onPress={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 ${
                    selected ? 'bg-[#1c1c1a]' : 'bg-white'
                  }`}
                >
                  <Text
                    className={`text-xs font-semibold ${
                      selected ? 'text-white' : 'text-[#66675f]'
                    }`}
                  >
                    {category}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <View className="mt-4 flex-row flex-wrap px-5">
            {visibleCourses.map((course) => (
              <Pressable
                key={course.title}
                className="mb-3 w-1/2 px-1.5"
              >
                <View className="rounded-xl bg-white p-2.5">
                  <View className="h-24 overflow-hidden rounded-lg bg-[#ece8e0]">
                    <View className="absolute right-1.5 top-1.5 rounded-full bg-white/95 px-2 py-1">
                      <Text className="text-[9px] font-bold text-[#396660]">✓ Check</Text>
                    </View>
                  </View>
                  <View className="mt-2">
                    <View className="flex-row items-center gap-1">
                      <Text className="rounded bg-[#f1ede6] px-1.5 py-1 text-[9px] text-[#464742]">
                        {course.level}
                      </Text>
                      <Text className="text-[10px] text-[#66675f]">• {course.duration}</Text>
                    </View>
                    <Text className="mt-2 text-xs font-bold leading-4 text-[#1c1c17]">
                      {course.title}
                    </Text>
                    <Text className="mt-1 text-[10px] text-[#66675f]">{course.tests}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View className="absolute bottom-0 left-0 right-0 h-[76px] flex-row items-center justify-around border-t border-[#eeeae2] bg-white px-2">
        <Pressable className="w-16 items-center gap-1">
          <Text className="text-xl text-[#1c1c17]">⌂</Text>
          <Text className="text-[10px] font-bold text-[#1c1c17]">Home</Text>
        </Pressable>
        <Pressable className="w-16 items-center gap-1">
          <Text className="text-xl text-[#66675f]">⌕</Text>
          <Text className="text-[10px] text-[#66675f]">Explore</Text>
        </Pressable>
        <Pressable className="w-16 items-center gap-1">
          <Text className="text-xl text-[#66675f]">▤</Text>
          <Text className="text-[10px] text-[#66675f]">Assessment</Text>
        </Pressable>
        <Pressable className="w-16 items-center gap-1">
          <Text className="text-xl text-[#66675f]">♙</Text>
          <Text className="text-[10px] text-[#66675f]">Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}
