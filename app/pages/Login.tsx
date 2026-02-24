import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import { Link } from 'expo-router';

type LoginFormData = {
  primaryemail: string;
  password: string;
};

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      primaryemail: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-4 sm:px-6 md:px-8 justify-center items-center">

        {/* Debug link */}
          <Link href="/pages/Entries" asChild>
          <Text className="absolute top-4 right-4 text-sm font-semibold text-blue-500">
            Debug
          </Text>
        </Link>

        <SafeAreaView className="w-full max-w-md flex flex-col gap-6">

          <Text className="text-center text-3xl font-bold">Login</Text>
          <Text className="text-center text-2xl font-bold mb-4">
            Welcome back, please login
          </Text>

          {/* Email Input */}
          <SafeAreaView className="flex flex-col gap-2">
            <Text className="text-sm font-semibold">Email</Text>
            <Controller
              control={control}
              name="primaryemail"
              rules={{ required: 'Email is required' }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder="Enter your email"
                  className="h-10 rounded px-2 border-0 shadow-none bg-gray-100 focus:ring-0 focus:border-0"
                />
              )}
            />
            {errors.primaryemail && (
              <Text className="text-red-500 text-xs">{errors.primaryemail.message}</Text>
            )}
          </SafeAreaView>

          {/* Password Input */}
          <SafeAreaView className="flex flex-col gap-2">
            <Text className="text-sm font-semibold">Password</Text>
            <Controller
              control={control}
              name="password"
              rules={{ required: 'Password is required' }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder="Enter your password"
                  secureTextEntry
                  className="h-10 rounded px-2 border-0 shadow-none bg-gray-100 focus:ring-0 focus:border-0"
                />
              )}
            />
            {errors.password && (
              <Text className="text-red-500 text-xs">{errors.password.message}</Text>
            )}
          </SafeAreaView>

          {/* Login Button */}
          <Button
            onPress={handleSubmit(onSubmit)}
            className={`w-full mt-2 ${buttonVariants({ size: 'lg', variant: 'default' })}`}
          >
            <Text className="text-center">Login</Text>
          </Button>

        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
