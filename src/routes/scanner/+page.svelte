<script>
  import { getVisitor } from "$lib/appwrite";
  // @ts-ignore
  import { redirect } from "@sveltejs/kit";
  import { Html5Qrcode } from "html5-qrcode";
  import { onMount } from "svelte";

  let scanning = false;
  /**
   * @type {Html5Qrcode}
   */
  let html5Qrcode;
  /**
   * @type {string}
   */
  let codeData;

  /**
   * @type {{}}
   */
  let data;

  onMount(init);

  function init() {
    html5Qrcode = new Html5Qrcode("reader");
  }

  function start() {
    html5Qrcode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 1000, height: 1000 },
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
  // @ts-ignore
  async function onScanSuccess(decodedText, decodedResult) {
    codeData = decodedText;
    alert("Scanned");
    // @ts-ignore
    data = await getVisitor(decodedText);
    console.log(data);
  }

  // @ts-ignore
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

  {#if codeData !== ""}{/if}
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
