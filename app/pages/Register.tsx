import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';

type FormData = {
  primaryemail: string;
  secondaryemail: string;
  username: string;
  password: string;
  confirmpassword: string;
  phonenumber?: string;
};

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000';

export default function Register() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      primaryemail: '',
      secondaryemail: '',
      username: '',
      password: '',
      confirmpassword: '',
      phonenumber: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message);
      console.log('User created:', result.user);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const inputs: [string, keyof FormData][] = [
    ['Primary Email', 'primaryemail'],
    ['Secondary Email', 'secondaryemail'],
    ['Username', 'username'],
    ['Password', 'password'],
    ['Confirm Password', 'confirmpassword'],
    ['Phone Number (Optional)', 'phonenumber'],
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-4 sm:px-6 md:px-8">
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <Text className="text-center text-3xl md:text-4xl font-bold mb-2">AuthBottle</Text>
          <Text className="text-center text-xl md:text-2xl font-bold mb-6">Create your account</Text>
          <SafeAreaView className="w-full max-w-md md:max-w-lg flex flex-col gap-5">
            {inputs.map(([label, name]) => (
              <SafeAreaView key={name} className="flex flex-col gap-1">
                <Text className="text-sm font-semibold">{label}</Text>
                <Controller
                  control={control}
                  name={name}
                  rules={name !== 'phonenumber' ? { required: 'This field is required.' } : undefined}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      secureTextEntry={name.toString().toLowerCase().includes('password')}
                      className="h-10 rounded px-2 border-0 shadow-none bg-gray-100 focus:ring-0 focus:border-0"
                    />
                  )}
                />
                {errors[name] && (
                  <Text className="text-red-500 text-xs">{errors[name]?.message}</Text>
                )}
              </SafeAreaView>
            ))}
            <Button
              onPress={handleSubmit(onSubmit)}
              className={`w-full mt-2 ${buttonVariants({ size: 'lg', variant: 'default' })}`}
            >
              <Text className="text-center">Register</Text>
            </Button>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}