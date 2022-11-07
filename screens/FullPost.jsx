import { useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import { Alert } from "react-native";
import Loading from "../components/Loading";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  margin-right: 12px;
`;
const PostText = styled.Text`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 700;
`;

function FullPost({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get("https://6367830ff5f549f052d6c78f.mockapi.io/news/" + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        Alert.alert("Ошибка", "Не удалось получить статью");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.text}</PostText>
    </View>
  );
}

export default FullPost;
