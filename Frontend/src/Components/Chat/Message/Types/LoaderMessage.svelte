<script>
</script>

<main class="cs-message">
  <div class="cs-chatBox">
    <div class="loader-container">
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>
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
    padding-top: 1.4em;
    padding-bottom: 1em;
    animation: scaleUpMessageReceiver 0s ease-out forwards;

  }

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    width: 0.7em;
    height: 0.7em;
    background-color: rgb(60, 60, 60);
    border-radius: 50%;
    margin: 0 0.13em;
    animation: bounce 1s infinite ease-in-out;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.4em);
    }
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
