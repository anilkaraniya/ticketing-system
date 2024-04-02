<script>
  // @ts-nocheck

  import { getVisitor } from "$lib/appwrite";
  // @ts-ignore
  import { redirect } from "@sveltejs/kit";
  import { Heading, P } from "flowbite-svelte";
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
  $: data;

  onMount(init);

  function init() {
    html5Qrcode = new Html5Qrcode("reader");
  }

  function start() {
    html5Qrcode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 600, height: 300 },
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
  {#if codeData}
    {#if codeData.name !== "undefined"}
      <Heading
        tag="h1"
        class="mb-4"
        customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
      >
        Name
      </Heading>
      <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {codeData}
      </P>
    {:else}
      <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        No data fetched
      </P>
    {/if}
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
