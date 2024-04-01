<script lang="ts">
  import { Alert, List, Li, Hr, Search, Button } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
  import {
    APPWRITE_PROJECT_ID,
    APPWRITE_STORAGE_PICTURE_ID,
  } from "$lib/appwrite.js";
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
            <div class="flex-shrink-0">
              <img
                class="w-10 h-10 lg:w-20 lg:h-20 rounded-full"
                src="https://cloud.appwrite.io/v1/storage/buckets/{APPWRITE_STORAGE_PICTURE_ID}/files/{visitor.$id}/view?project={APPWRITE_PROJECT_ID}"
                alt="Neil profile"
              />
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
                class="pr-10 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <button class="text-2xl">&#10003;</button>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <button class="pr-5 text-2xl">&#10539;</button>
              </div>
            </div>
          </div>
        </Li>
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
