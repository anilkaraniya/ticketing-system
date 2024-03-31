<script>
  import { Html5Qrcode } from "html5-qrcode";
  import { onMount } from "svelte";

  let scanning = false;
  /**
   * @type {Html5Qrcode}
   */
  let html5Qrcode;

  onMount(init);

  function init() {
    html5Qrcode = new Html5Qrcode("reader");
  }

  function start() {
    html5Qrcode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 250, height: 100 },
      },
      onScanSuccess,
      onScanFailure
    );
    scanning = true;
  }

  async function stop() {
    await html5Qrcode.stop();
    scanning = false;
  }

  // @ts-ignore
  function onScanSuccess(decodedText, decodedResult) {
    alert(`Code matched = ${decodedText}`);
  }

  // @ts-ignore
  function onScanFailure(error) {}
</script>

<svelte:head>
  <title>Scanner</title>
</svelte:head>

<main>
  <reader id="reader" />
  {#if scanning}
    <button on:click={stop}>stop</button>
  {:else}
    <button on:click={start}>start</button>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  reader {
    width: 100%;
    min-height: 500px;
    background-color: black;
  }

  @media (max-width: 720px) {
    reader {
      width: 100%;
      min-height: 300px;
      background-color: black;
    }
  }
</style>
