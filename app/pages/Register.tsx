import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Link, Stack } from 'expo-router';
import { FormInput, MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import * as React from 'react';
import { Image, type ImageStyle, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { Button, buttonTextVariants, buttonVariants } from '@/components/ui/button';

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      primaryemail: "",
      secondaryemail: "",
      username: "",
      password: "",
      confirmpassword: "",
      phonenumber: "",
    },
  });

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
          
          <View className="space-y-4">
            <Controller
                control={control}
                name="primaryemail"
                rules={{ required: 'This is required.' }}
               render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Primary Email" value={value} onBlur={onBlur} onChangeText={onChange} />
              )}
            />
            {errors.primaryemail && (
              <Text className="text-destructive">{errors.primaryemail.message}</Text>
            )}
            <Controller
                control={control}
                name="secondaryemail"
                rules={{ required: 'This is required.' }}
               render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Secondary Email (Required)" value={value} onBlur={onBlur} onChangeText={onChange} />
              )}
            />
            {errors.secondaryemail && (
              <Text className="text-destructive">{errors.secondaryemail.message}</Text>
            )}
            <Controller
                control={control}
                name="username"
                rules={{ required: 'This is required.' }}
               render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Username" value={value} onBlur={onBlur} onChangeText={onChange} />
              )}
            />
            {errors.username && (
              <Text className="text-destructive">{errors.username.message}</Text>
            )}
            <Controller
                control={control}
                name="password"
                rules={{ required: 'This is required.' }}
               render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Password" value={value} onBlur={onBlur} onChangeText={onChange} secureTextEntry />
              )}
            />
            {errors.password && (
              <Text className="text-destructive">{errors.password.message}</Text>
            )}
            <Controller
                control={control}
                name="confirmpassword"
                rules={{ required: 'This is required.' }}
               render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Confirm Password" value={value} onBlur={onBlur} onChangeText={onChange} secureTextEntry />
              )}
            />
            {errors.confirmpassword && (
              <Text className="text-destructive">{errors.confirmpassword.message}</Text>
            )}
            <Controller
                control={control}
                name="phonenumber"
                rules={{ required: false }}
               render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Phone Number (Optional)" value={value} onBlur={onBlur} onChangeText={onChange} />
              )}
            />
            <Button onPress={handleSubmit(onSubmit)} className={buttonVariants({ size: 'lg', className: 'w-full', variant: "default"})}>
              Register
            </Button>
          </View>
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
}
