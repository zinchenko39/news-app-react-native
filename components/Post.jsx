import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  margin-top: 30px;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0 0.1);
  border-bottom-styled: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  heigth: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

const PostData = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;
const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "...";
  }
  return str;
};

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostData>{new Date(createdAt).toLocaleDateString()}</PostData>
      </PostDetails>
    </PostView>
  );
};
