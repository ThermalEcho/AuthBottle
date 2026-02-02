import { Text } from '@/components/ui/text';
import { Link, Stack } from 'expo-router';
import { FormInput, MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import * as React from 'react';
import { Image, type ImageStyle, View, StyleSheet, ScrollView } from 'react-native';
import { Uniwind, useUniwind } from 'uniwind';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';

export default function Register(): React.ReactNode {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
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
          
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full name" {...register("Full name", {required: true})} className='space-y-2' />
      <input type="email" placeholder="Primary Email" {...register("Primary Email", {required: true})} className='space-y-2' />
      <input type="email" placeholder="Secondary Email" {...register("Secondary Email", {required: true, maxLength: 30})} className='space-y-2' />
      <input type="tel" placeholder="Phone Number (Optional)" {...register("Phone Number (Optional)", {maxLength: 12})} className='space-y-2' />
      <input type="password" placeholder="Password" {...register("Password", {required: true})} className='space-y-2' />
      <input type="password" placeholder="Confirm Password" {...register("Confirm Password", {required: true})} className='space-y-2' />

      <input type="submit" />
    </form>
          <Text className="w-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(187,100%,50%,0.5)]">
            Already have an account?{" "}
            <Link href="/pages/Login" className="text-primary hover:underline">
              Login
            </Link>
          </Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
