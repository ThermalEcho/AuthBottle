import * as React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "expo-router";

// Mock entries data
const mockEntries = [
  { id: 1, title: "GitHub", account: "user@example.com", code: "A1B2C3" },
  { id: 2, title: "Google", account: "john.doe@gmail.com", code: "X9Y8Z7" },
  { id: 3, title: "Discord", account: "cooluser#1234", code: "D4E5F6" },
];

export default function Entries() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/pages/Login");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-4 bg-background">
        <Text className="text-center text-3xl font-bold mb-6 text-foreground">Entries</Text>
        <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {mockEntries.map((entry) => (
            <View
              key={entry.id}
              className="w-[48%] bg-card rounded-xl p-4 mb-4 border border-border shadow-sm"
            >
              <Text className="text-lg font-semibold text-foreground">{entry.title}</Text>
              <Text className="text-sm text-muted-foreground mt-1">{entry.account}</Text>
              <Text className="font-mono text-foreground mt-2">{entry.code}</Text>
            </View>
          ))}
        </ScrollView>

        <Button
          onPress={handleLogout}
          className={buttonVariants({ size: "lg", className: "w-full mt-4", variant: "default" })}
        >
          Logout
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
