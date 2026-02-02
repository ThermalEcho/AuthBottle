import { Button, buttonTextVariants, buttonVariants } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link, router, Stack } from 'expo-router';
import { Uniwind, useUniwind } from 'uniwind';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaProvider className="flex min-h-screen items-center justify-center bg-background p-4">
      <SafeAreaView className="login-header">
        <Text className="login-brand">AuthBottle</Text>
      </SafeAreaView>
      
      <SafeAreaView className="login-container">
        <SafeAreaView className="login-form-wrapper">
          <SafeAreaView className="login-title-section">
            <Text className="login-title">
              Welcome Back
            </Text>
            <Text className="login-subtitle">Sign in to your account</Text>
          </SafeAreaView>
          
            <SafeAreaView  className="login-field">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" placeholderTextColor="gray" />
            </SafeAreaView>

            <SafeAreaView className="login-field">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" placeholderTextColor="gray" secureTextEntry />
            </SafeAreaView>
            
            <Button size="lg" className="login-submit-btn" onPress={() => {}}>
              Login
            </Button>
          
            <Link className={buttonVariants({ variant: 'outline' })} href="/pages/Register">
                <Text className={buttonTextVariants({ variant: 'outline' })}>Don't have an account?</Text>
            </Link>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
