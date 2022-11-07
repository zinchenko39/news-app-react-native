import { View, Text, ActivityIndicator } from "react-native";

function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15 }}>Загрузка...</Text>
    </View>
  );
}

export default Loading;
