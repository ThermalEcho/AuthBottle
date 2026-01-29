import { Button, buttonTextVariants, buttonVariants } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Link, router, Stack } from 'expo-router';
import { View } from "lucide-react-native";
import { FormInput, MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import { Uniwind, useUniwind } from 'uniwind';
import { Image, type ImageStyle, StyleSheet, ScrollView } from 'react-native';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const Login = () => {
  return (
    <View className="login-page">
      <View className="login-header">
        <span className="login-brand">AuthBottle</span>
      </View>
      
      <View className="login-container">
        <View className="login-form-wrapper">
          <View className="login-title-section">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your account</p>
          </View>
          
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <View className="login-field">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" placeholderTextColor="gray" />
            </View>

            <View className="login-field">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" placeholderTextColor="gray" secureTextEntry />
            </View>
            
            <Button size="lg" className="login-submit-btn" onPress={() => {}}>
              Login
            </Button>
          </form>
          
            <Link className={buttonVariants({ variant: 'outline' })} href="/register">
                <Text className={buttonTextVariants({ variant: 'outline' })}>Don't have an account?</Text>
            </Link>
        </View>
      </View>
    </View>
  );
};

export default Login;
