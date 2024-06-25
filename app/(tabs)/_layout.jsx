import React from 'react';
import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function TabLayout() {
    

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="home"
                options={{
                    tabBarLabel: "HOME",
                    tabBarLabelStyle: { fontSize: 15, color: "#000" },
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={30} color="#060D55" />
                }}
            />
            <Tabs.Screen name="notices"
                options={{
                    tabBarLabel: "NOTICES",
                    tabBarLabelStyle: { fontSize: 15, color: "#000" },
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="notifications" size={30} color="#060D55" />
                    ),
                    
                    tabBarBadgeStyle: { backgroundColor: 'red' },
                }}
            />
        </Tabs>
    );
}
