import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View, StatusBar, FlatList, Alert, ActivityIndicator,
} from 'react-native';
import styled from 'styled-components/native';
import { Post } from './components/Post';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://6367830ff5f549f052d6c78f.mockapi.io/news')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        Alert.alert('Ошибка', 'Не удалось получить статьи');
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <View>
      <ActivityIndicator size="large" />
      <FlatList
        data={items}
        renderItem={({ item }) => <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />}
      />
      <StatusBar theme="auto" />

    </View>
  );
}
