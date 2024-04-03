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
    InfoCircleSolid,
  } from "flowbite-svelte-icons";

  let popupModal = false;
  export let data;
  let visitors = data.visitors;
  let deletDataID;
  let isAlertAvailable = false;

  async function deleteUser() {
    const client = new Client();
    const databases = new Databases(client);
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(APPWRITE_PROJECT_ID);
    try {
      const promise = await databases.deleteDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTION_ID,
        deletDataID
      );
      isAlertAvailable = true;
    } catch (e) {
      console.log(e);
    }
    popupModal = false;
  }
</script>

<svelte:head>
  <title>Visitors</title>
</svelte:head>

{#if isAlertAvailable}
  <Alert class="mt-5" color="green" dismissable>
    <InfoCircleSolid slot="icon" class="w-4 h-4" />
    Visitor data deleted;
  </Alert>
{/if}

<div class="">
  <div class="w-48 h-1 mx-auto my-4 rounded md:my-10" />
  <List tag="ul" list="none" class="w-full">
    {#if visitors && visitors.length > 0}
      {#each visitors as visitor, index}
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
                <Button
                  on:click={() => {
                    popupModal = true;
                    deletDataID = visitor.$id;
                  }}
                >
                  Delete
                </Button>
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
            <Button color="red" class="me-2" on:click={() => deleteUser()}>
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
