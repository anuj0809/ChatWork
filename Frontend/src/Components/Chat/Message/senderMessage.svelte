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
    justify-content: flex-end;
    align-items: center;
    animation: scaleUpMessageSender 0.2s ease-out forwards;

  }

  .cs-chatBox {
    max-width: 60%;
    height: inherit;
    background-color: #0066ff;
    font-size: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1em;
    border-bottom-right-radius: 0.2em;
    padding-inline: 1em;
    margin-right: 0.5em;
    color: white;
  }

  @keyframes scaleUpMessageSender {
    from {
      transform-origin: right bottom; /* Set the transform origin to the bottom-right corner */
      transform: translateY(100%) scale(0);
      opacity: 0;
    }
    to {
      transform-origin: right bottom; /* Set the transform origin to the bottom-left corner */
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  
</style>
