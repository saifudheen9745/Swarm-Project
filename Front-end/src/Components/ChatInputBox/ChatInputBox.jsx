import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { FiSend } from "react-icons/fi";
import chatApi from "../../Api/chatApi";


export default function ChatInputBox({data}) {
  const { getAChat, sentMessage } = chatApi();
  const {chatId,userId,socket,setChat,chat} = data
  const [text, setText] = useState("");

  async function handleOnEnter(text) {
    try {
      const messageObject = {
        chatId,
        sender:userId,
        message:text,
      };
      setText("")
      // const response = await sentMessage(messageObject);
      const response = await sentMessage(messageObject);
      await socket.emit("newMessage",response.data)
      const msg = response.data
      setChat(prevState => ({
        ...prevState,
        messages: [...prevState.messages, msg]
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const handleMessageSubmit = async () => {
    try {
      const messageObject = {
        chatId,
        sender:userId,
        message:text,
      };

      setText("")
      const response = await sentMessage(messageObject);
      await socket.emit("newMessage",response.data)
      const msg = response.data
      setChat(prevState => ({
        ...prevState,
        messages: [...prevState.messages, msg]
      }));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[100%]">
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
      </div>
      <p className="dark:text-white text-gray-600 text-2xl hover:cursor-pointer" onClick={handleMessageSubmit}>
        <FiSend />
      </p>
    </div>
  );
}
