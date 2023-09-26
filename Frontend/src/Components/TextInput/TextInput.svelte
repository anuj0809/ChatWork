<script>
  export let sendMessage;

  let svgColor = {
    active: "#0066FF",
    inactive: "#d7d7d7",
  };

  let inputValue = ""; // Initialize the input value
  let isInputEmpty = true;

  // Function to handle input changes
  function handleInputChange(event) {
    inputValue = event.target.value?.trim();
    isInputEmpty = inputValue === "";
  }

  function handleButtonClick() {
    sendMessage(inputValue)
    inputValue = "";
    isInputEmpty = true;
  }

  function handleInputKeyDown(event) {
    if (event.key === "Enter" && !isInputEmpty) {
      handleButtonClick();
    }
  }



</script>

<main class="cs-InputWrapper">
  <div class="cs-input">
    <input
      placeholder="Enter your message"
      on:input={handleInputChange}
      bind:value={inputValue}
      on:keydown={handleInputKeyDown}
    />
  </div>
  <button
    on:click={handleButtonClick}
    class="cs-send"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      xml:space="preserve"
      style="fill: {isInputEmpty ? svgColor.inactive : svgColor.active};"
      ><path
        d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"
      /></svg
    >
  </button>
</main>

<style>
  .cs-InputWrapper {
    width: 100%;
    height: calc(var(--textInput-height) - 0.2em);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0em solid black;
    border-top-width: 0.15em;
  }

  .cs-input {
    height: 80%;
    width: 80%;
  }

  .cs-input input {
    width: 100%;
    height: 100%;
    border: 0;
    border: 0;
    outline: none;
    font-size: 1.1em;
    margin-top: -0.1em;
  }

  .cs-send {
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    background: none;
    margin: 0;
  }

  .cs-send svg {
    width: 65%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }


</style>
