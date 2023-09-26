<script>
  export let data;
  
</script>

<main class="cs-message">
  <div class="cs-chatBox">
    <p>{data?.message}</p>   
  </div>
</main>

<style>
  .cs-message {
    width: 100%;
    margin-top: 0.5em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .cs-chatBox {
    max-width: 60%;
    height: inherit;
    background-color: #eaeef3;
    font-size: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1em;
    border-bottom-left-radius: 0.2em;
    padding-inline: 1em;
    margin-left: 0.5em;
    color: black;
    animation: scaleUpMessageReceiver 0.2s ease-out forwards;
  }

  @keyframes scaleUpMessageReceiver {
    from {
      transform-origin: left bottom; /* Set the transform origin to the bottom-left corner */
      transform: translateY(100%) scale(0);
      opacity: 0;
    }
    to {
      transform-origin: left bottom; /* Set the transform origin to the bottom-left corner */
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }



</style>
