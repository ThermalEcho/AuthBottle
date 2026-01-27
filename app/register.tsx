import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Link, Stack } from 'expo-router';
import { FormInput, MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import * as React from 'react';
import { Image, type ImageStyle, View, StyleSheet, ScrollView } from 'react-native';
import { Uniwind, useUniwind } from 'uniwind';
import { SignUpForm } from '@/components/sign-up-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type } from '../components/ui/button';


const Register = () => {
  return (
    <View className="min-h-screen bg-background">
      {/* Header */}
      <View className="absolute top-4 right-4">
        <Text className="text-lg font-bold text-foreground">AuthBottle</Text>
      </View>

      {/* Register Form */}
      <View className="flex min-h-screen items-center justify-center p-4">
        <View className="w-full max-w-md space-y-6">
          <View className="text-center">
            <Text className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Create Account</Text>
            <Text className="text-muted-foreground">Sign up to get started</Text>
          </View>

          <View className="space-y-4">
            <View className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </View>

            <View className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="you@example.com" />
            </View>

            <View className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" secureTextEntry={true} />
            </View>

            <View className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" placeholder="••••••••" secureTextEntry={true} />
            </View>

            <Button 
              className="w-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(187,100%,50%,0.5)]"
              size="lg"
            >
              Register
            </Button>
          </View>
          <Text className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/" className="text-primary hover:underline">
              Login
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Register;