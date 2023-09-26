<script>
  export let data;

  import LoaderMessage from "./Message/Types/LoaderMessage.svelte";
  import RecieverMessage from "./Message/Types/recieverMessage.svelte";
  import SenderMessage from "./Message/senderMessage.svelte";
  import { afterUpdate } from "svelte";
  import { messageLoader } from "../../store";

  // Scroll to the bottom of the chat container
  let chatContainer;
  function scrollToBottom() {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
  afterUpdate(scrollToBottom);

  $: showLoader = $messageLoader;

</script>


<main class="cs-chat" bind:this={chatContainer}>
  {#each data as item (item.id)}
    {#if item?.user}
      <SenderMessage data={item} />
    {:else}
      <RecieverMessage data={item} />
    {/if}
  {/each}

  {#if showLoader}
  <LoaderMessage />
  {/if}
</main>


<style>
  .cs-chat {
    width: 100%;
    height: calc(
      100% - calc(var(--header-height) + var(--textInput-height) + 0.7em)
    );
    overflow-y: scroll;
    padding-bottom: 0.7em;
  }
</style>
