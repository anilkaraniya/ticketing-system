<script lang="ts">
  // @ts-nocheck
  import {
    APPWRITE_COLLECTION_ID,
    APPWRITE_DATABASE_ID,
    APPWRITE_PROJECT_ID,
  } from "$lib/appwrite.js";
  import { Client, Databases } from "appwrite";

  import { Alert, List, Li, Hr, Search, Button, Modal } from "flowbite-svelte";
  import {
    SearchOutline,
    ExclamationCircleOutline,
  } from "flowbite-svelte-icons";
  let popupModal = false;

  async function deleteUser(id) {
    const client = new Client();
    const databases = new Databases(client);
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(APPWRITE_PROJECT_ID);
    const promise = await databases.deleteDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_COLLECTION_ID,
      id
    );
    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    popupModal = false;
  }

  export let data;
</script>

<svelte:head>
  <title>Visitors</title>
</svelte:head>

<form class="flex gap-2">
  <Search size="md" />
  <Button class="!p-2.5">
    <SearchOutline class="w-5 h-5" />
  </Button>
</form>

<div class="">
  <div class="w-48 h-1 mx-auto my-4 rounded md:my-10" />
  <List tag="ul" list="none" class="w-full">
    {#if data.visitors && data.visitors.length > 0}
      {#each data.visitors as visitor, index}
        <Li class="pb-3 sm:pb-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-shrink-0">
              <div class="rounded-xl p-3 border-solid border-2 border-grey">
                {index + 1}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-xl font-medium text-gray-900 truncate dark:text-white"
              >
                {visitor.name}
              </p>
              <p class="text-base text-gray-500 truncate dark:text-gray-400">
                {visitor.email}
              </p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <Button on:click={() => (popupModal = true)}>Delete</Button>
              </div>
            </div>
          </div>
        </Li>
        <Modal bind:open={popupModal} size="xs" autoclose>
          <div class="text-center">
            <ExclamationCircleOutline
              class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            />
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              Are you sure you want to delete this product?
            </h3>
            <Button
              color="red"
              class="me-2"
              on:click={() => deleteUser(visitor.$id)}
            >
              Yes, I'm sure
            </Button>
            <Button color="alternative">No, cancel</Button>
          </div>
        </Modal>
        <Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-10" />
      {/each}
    {:else}
      <div class="p-8">
        <Alert>
          <span class="font-medium">Info alert!</span>
          There are no visitors. Create come visitor!.
        </Alert>
      </div>
    {/if}
  </List>
</div>
