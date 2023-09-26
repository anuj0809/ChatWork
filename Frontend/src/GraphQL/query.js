import { gql } from "@apollo/client";

// Define subscription query
export const GET_CHATS = gql`
  query GetChats($id: Int!) {
    chats(id: $id) {
      message
      createdAt
      user
      id
    }
  }
`;

export const NEW_CHAT_MESSAGE = gql`
  subscription NewChatMessage($chatRoomId: Int!) {
    newChatMessage(chatRoomId: $chatRoomId) {
      id
      message
      chatRoomId
      user
      createdAt
    }
  }
`;


export const SEND_MESSAGE = gql`
  mutation SendMessage($message: String!, $chatRoomId: Int!, $user: Boolean!) {
    createChat(
      createChatInput: {
        message: $message
        chatRoomId: $chatRoomId
        user: $user
      }
    ) {
      chatRoomId
      message
      user
      id
    }
  }
`;

export const CREATE_CHATROOM = gql`
  mutation {
    createRoom(createRoomInput: {}) {
      id
    }
  }
`;
