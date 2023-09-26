<script>
  import {
    setClient,
    query,
    subscribe,
    getClient,
    mutation,
  } from "svelte-apollo";
  import { onMount } from "svelte";

  import Chat from "./Components/Chat/Chat.svelte";
  import Header from "./Components/Header/Header.svelte";
  import TextInput from "./Components/TextInput/TextInput.svelte";
  import Widget from "./Components/Widget/Widget.svelte";
  import { openWidget, messageLoader } from "./store.js";
  import { v4 as uuidv4 } from "uuid";
  import client from "./GraphQL/apollo";

  import {
    NEW_CHAT_MESSAGE,
    GET_CHATS,
    SEND_MESSAGE,
    CREATE_CHATROOM,
  } from "./GraphQL/query";

  // GLOBAL VARIABLES
  $: widgetIsOpen = $openWidget; // Reactive variable derived from the store
  let chatData = [];
  let chatRoomId;
  let windowWidth = 0;
  let chatsData;
  let Messagedata;
  let sendMessage;

  setClient(client);
  const createChatRoom = mutation(CREATE_CHATROOM);

  onMount(async () => {
    if (!localStorage.getItem("chatRoomId")) {
      const chatRoomData = await createChatRoom();
      chatRoomId = chatRoomData?.data?.createRoom?.id;
      console.log(chatRoomId);
      localStorage.setItem("chatRoomId", JSON.parse(chatRoomId));
    } else {
      chatRoomId = JSON.parse(localStorage.getItem("chatRoomId"));
    }

    alert("ChatRoom Id: " + chatRoomId);

    windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;
    });
  });

  let oldMessage;

  $: {
    chatsData = query(GET_CHATS, { variables: { id: chatRoomId } });
    Messagedata = subscribe(client, {
      query: NEW_CHAT_MESSAGE,
      variables: { chatRoomId },
    });
    sendMessage = mutation(SEND_MESSAGE);
  }

  $: {
    if ($chatsData.data?.chats) {
      chatData = $chatsData.data?.chats;
    }
  }

  $: {
    if (oldMessage != $Messagedata?.data?.newChatMessage?.id) {
      let tempMessage = $Messagedata?.data?.newChatMessage;
      if (tempMessage) {
        if (!tempMessage?.user) {
          let tempData = chatData.filter(
            (message) => message.id !== tempMessage.id
          );
          chatData = [...tempData, tempMessage];
          setTimeout(() => {
            messageLoader.set(false);
          }, 100);
        }
      }
      oldMessage = tempMessage?.id;
    }
  }

  async function handlesendingMessage(message) {
    const sentMessage = {
      id: Math.floor(100000 + Math.random() * 900000),
      message: message,
      user: true,
      chatRoomId: chatRoomId,
      createdAt: new Date(Date.now()),
    };

    chatData = [...chatData, sentMessage];
    messageLoader.set(true);

    await sendMessage({
      variables: sentMessage,
    });
  }
</script>

{#if widgetIsOpen}
  <main class="cs-main">
    <Header
      title="Chat Support"
      online={true}
      profile={"https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/FPBAPaZFOOqqiCbV.png"}
    />
    <Chat data={chatData} />
    <TextInput sendMessage={handlesendingMessage} />
  </main>
{/if}

{#if windowWidth <= 500}
  {#if !widgetIsOpen}
    <Widget />
  {/if}
{:else}
  <Widget />
{/if}

<style global>
  :root {
    --header-height: 5em;
    --textInput-height: 4em;
  }

  .cs-main {
    width: 370px;
    height: 80%;
    background-color: white;
    border: 0.15em solid black;
    border-radius: 1em;
    animation: slideUp 0.2s ease-out forwards;
    position: fixed;
    right: 0;
    bottom: 6em;
    font-size: 14px;
    margin-right: 2em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  @media (max-width: 500px) {
    .cs-main {
      width: 100%;
      height: 100%;
      margin-right: 0;
      bottom: 0;
      border: 0;
      border-radius: 0;
    }
    /* CSS rules for narrow screens in portrait mode */
  }

  @keyframes slideUp {
    from {
      transform: translateY(10%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 500px) {
    .cs-main {
      font-size: 4vw;
    }
  }
</style>
