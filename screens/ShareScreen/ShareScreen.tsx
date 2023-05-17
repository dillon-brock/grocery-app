import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList, PublicUser } from "../../types/types";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function ShareScreen() {

  const { id, name, type } = useRoute<RouteProp<HomeStackParamList, 'Share'>>().params;
  const [username, setUsername] = useState<string>('');
  const [users, setUsers] = useState<PublicUser[]>([]);
  const [searchBegun, setSearchBegun] = useState<boolean>(false);
  
  return (
    <View>
      <Header showBackButton showMenuButton />
      <Text>{`Share ${name}`}</Text>
      <View>
        <Ionicons name='search-outline' size={25} />
        <TextInput
          placeholder="Find users"
          value={username}
          onChange={(e) => setUsername(e.nativeEvent.text)}
        />
      </View>
      {users.length == 0 && searchBegun &&
        <Text>No users found</Text>
      }
      {users.map(user => (
        <Pressable>
          <Text>{user.username}</Text>
        </Pressable>
      ))}
    </View>
  )
}