<script>

export let online = false;
  export let title;

  export let profile;

  import { openWidget } from '../../store.js';

  function toogleWidget() {
    openWidget.update(value=>!value);
  }

</script>

<main class="cs-header">
  <div class="cs-profile">
    <img alt="profile" src={profile} />
    {#if online}
      <div class="cs-onlineIcon" />
    {/if}
  </div>
  <div class="cs-heading">
    <h3>{title}</h3>
    {#if online}
      <p>Online</p>
    {/if}
  </div>
  <div on:click={toogleWidget} class="closeBtn">
    <svg focusable="false" aria-hidden="true" width="8" height="8" viewBox="0 0 8 8" fill="#000000" xmlns="http://www.w3.org/2000/svg" color="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.23251L7.23251 8L4 4.76749L0.767492 8L0 7.23251L3.23251 4L0 0.767492L0.767492 0L4 3.23251L7.23251 0L8 0.767492L4.76749 4L8 7.23251Z" fill="black"></path></svg>
  </div>
</main>

<style>
  .cs-header {
    width: 100%;
    height: var(--header-height);
    display: flex;
    align-items: center;
    border: 0em solid black;
    border-bottom-width: 0.15em;
    position: relative;
  }

  .cs-profile {
    height: 60%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    position: relative;
    margin-left: 1.5em;
  }

  .cs-profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .cs-onlineIcon {
    width: 0.8em;
    aspect-ratio: 1/1;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #68de3f;
    border-radius: 100%;
    z-index: 1;
    transform: translate(-10%, -10%);
  }

  .cs-heading {
    width: 65%;
    margin-left: 1em;
  }

  .cs-heading h3 {
    font-size: 1.4em;
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Maximum number of lines to display */
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }

  .cs-heading p {
    font-size: 0.9em;
    margin: 0;
    color: grey;
    font-weight: 500;
  }

  .closeBtn{
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    padding: 0.5em;
    border-radius: 0.5em;
    cursor: pointer;
    display: none;
  }
  .closeBtn:hover{
    background-color: #d6dde6;
  }
  .closeBtn svg{
    width: 1em;
    height: 1em;
  }

  @media (max-width: 500px) {
  .closeBtn{
    display: block;
  }
  }

</style>
