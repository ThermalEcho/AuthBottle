import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Link, Stack } from 'expo-router';
import { FormInput, MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import * as React from 'react';
import { Image, type ImageStyle, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, buttonTextVariants, buttonVariants } from '@/components/ui/button';

export default function Register() {

  return (
    <SafeAreaProvider className="min-h-screen bg-background">
      {/* Header */}
      <SafeAreaView className="absolute top-4 right-4">
        <Text className="text-lg font-bold text-foreground">AuthBottle</Text>
      </SafeAreaView>

      {/* Register Form */}
      <SafeAreaView className="flex min-h-screen items-center justify-center p-4">
        <SafeAreaView className="w-full max-w-md space-y-6">
          <SafeAreaView className="text-center">
            <Text className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Create Account</Text>
            <Text className="text-muted-foreground">Sign up to get started</Text>
          </SafeAreaView>
          
          <View className="space-y-4">
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
