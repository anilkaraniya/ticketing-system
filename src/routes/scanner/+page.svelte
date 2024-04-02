<script>
  // @ts-nocheck

  import { getVisitor, updateIsVisited } from "$lib/appwrite";
  import { Html5Qrcode } from "html5-qrcode";
  import { onMount } from "svelte";
  import { Alert, List, Li, P } from "flowbite-svelte";
  import {InfoCircleSolid} from 'flowbite-svelte-icons'

  let scanning = false;
  /**
   * @type {Html5Qrcode}
   */
  let html5Qrcode;
  /**
   * @type {string}
   */
  let codeData;

  let data;
  $: data;

  let visitorUpdate;
  let visitorUpdateColor = "green";
  let isVisitorUpdate = false;
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
    alert("Scanned : Data in process");
    // @ts-ignore
    const fetchedData = await getVisitor(decodedText);
    data = fetchedData;
  }

  async function onScanFailure() {}

  async function setIsVisited(id) {
    console.log("Visited");
    try {
      const response = await updateIsVisited(id);
      data.isVisited = true;
      visitorUpdateColor = "green";
      isVisitorUpdate = true;
      visitorUpdate = "The flag chnaged 🌳👍";
    } catch {
      visitorUpdate = "Danger ⚠️☠️🚨 : An unknown error occurred";
      visitorUpdateColor = "red";
      isVisitorUpdate = true;
    }
  }

  function closeAlert () {
    isVisitorUpdate = false
  }
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
  {#if isVisitorUpdate}
  <Alert color="{visitorUpdateColor}" class="mb-4" dismissable on:close={closeAlert}>
    <InfoCircleSolid slot="icon" class="w-4 h-4" />
    {visitorUpdate}
  </Alert>
  {/if}
  {#if data}
    <List tag="ul" list="none" class="w-full">
      <Li class="pb-3 sm:pb-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-1 min-w-0">
            <p
              class="text-xl font-medium text-gray-900 truncate dark:text-white"
            >
              {data.name}
            </p>
            <p class="text-base text-gray-500 truncate dark:text-gray-400">
              {data.email}
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
            <div
              class="pr-5 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              {#if data.isVisited}
                <div class="card border-green-400 p-2">Visited</div>
              {:else}
                <div class="card border-red-500 p-2">Not Visited</div>
              {/if}
            </div>

            {#if !data.isVisited}
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <button class="text-1xl pl-4" on:click={setIsVisited(data.$id)}>
                  &#10003;
                </button>
              </div>
            {/if}
          </div>
        </div>
      </Li>
      <Li class="pb-3 sm:pb-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-1 min-w-0">
            <p
              class="text-xl font-medium text-gray-900 truncate dark:text-white"
            >
              {data.phone}
            </p>
            <p class="text-base text-gray-500 truncate dark:text-gray-400">
              MOP: {data.mop}
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
            <div
              class="pr-5 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              {data.course}
            </div>

            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              Year : {data.year}
            </div>
          </div>
        </div>
      </Li>
    </List>
  {:else}
    <div class="p-8">
      <Alert color="red">
        <span class="font-medium">Info</span>
        No data Fetched.
      </Alert>
    </div>
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

  div.card {
    background: transparent;
    border-style: solid;
    border-width: 4px 4px 4px 4px;
    border-radius: 0.3rem;
  }

  @media (max-width: 720px) {
    reader {
      width: 100%;
      min-height: 300px;
      background-color: black;
    }
  }
</style>
