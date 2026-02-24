import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Link, Stack, useRouter } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import * as React from 'react';
import { Image, type ImageStyle, View, StyleSheet } from 'react-native';
import { Uniwind, useUniwind } from 'uniwind';

const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  title: 'React Native Reusables',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

const IMAGE_STYLE: ImageStyle = {
  height: 200,
  width: 200,
};

export default function Screen() {
  const { theme } = useUniwind();
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View className="flex min-h-screen items-center justify-center bg-background p-4">
      <View className="flex flex-col items-center gap-6">
        {/* Logo Area */}
        <View className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-primary/50 flex items-center justify-center">
          <Image className="logoimage" source={require('@/assets/images/icon.png')} style={IMAGE_STYLE} />
        </View>
        
        {/* App Name */}
        <Text className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Authbottle</Text>

        <Button 
          variant="default" 
          size="lg"
          className="min-w-[200px] sm:min-w-[240px] text-base sm:text-lg font-semibold border-secondary text-secondary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(187,100%,50%,0.5)]"
          onPress={() => router.navigate('/pages/Login')}
        >
          Login
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="min-w-[200px] sm:min-w-[240px] text-base sm:text-lg font-semibold border-primary text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:shadow-[0_0_20px_hsl(187,100%,50%,0.5)]"
          onPress={() => router.navigate('/pages/Register')}
        >
          Register
        </Button>
      </View>
    </View>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { theme } = useUniwind();

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    Uniwind.setTheme(newTheme);
  }

  return (
    <Button
      onPressIn={toggleTheme}
      size="icon"
      variant="ghost"
      className="ios:size-9 web:mx-4 rounded-full">
      <Icon as={THEME_ICONS[theme ?? 'light']} className="size-5" />
    </Button>
  );
}

