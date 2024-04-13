<script lang="ts">
  // @ts-nocheck
  import {
    deleteVisitorData,
    sendMail,
    updateTotalIsVisited,
  } from "$lib/appwrite.js";

  import {
    Alert,
    List,
    Li,
    Hr,
    Button,
    Modal,
    Label,
    Input,
    Select,
  } from "flowbite-svelte";
  import {
    ExclamationCircleOutline,
    InfoCircleSolid,
  } from "flowbite-svelte-icons";

  let formModal = false;
  let popupModal = false;
  let selectedCourse;
  let selectedYear;
  let course = [
    { value: "BBA", name: "BBA" },
    { value: "BACS", name: "BACS" },
    { value: "BCA", name: "BCA" },
    { value: "B'com", name: "B'com" },
  ];
  let year = [
    { value: "1", name: "First Year" },
    { value: "2", name: "Second Year" },
    { value: "3", name: "Third Year" },
  ];
  export let data;
  let visitors = data.visitors;
  let modelData;
  let isAlertAvailable = false;
  let alertMessage = "";

  async function deleteUser() {
    try {
      await deleteVisitorData;
      alertMessage = "Visitor Data Deleted";
      isAlertAvailable = true;
    } catch (e) {
      console.log(e);
    }
    popupModal = false;
    formModal = false;
  }
</script>

<svelte:head>
  <title>Visitors</title>
</svelte:head>

{#if isAlertAvailable}
  <Alert class="mt-5" color="green" dismissable>
    <InfoCircleSolid slot="icon" class="w-4 h-4" />
    {alertMessage}
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
                {visitors.length - index}
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
                    modelData = visitor;
                    selectedCourse = visitor.course;
                    selectedYear = visitor.year;
                    formModal = true;
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </Li>
        <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
          <form preventDefault class="flex flex-col space-y-6" action="#">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Edit the Visitors data
            </h3>
            <Label class="space-y-2">
              <span>Name</span>
              <Input
                type="text"
                name="name"
                bind:value={modelData.name}
                placeholder="John Doe"
                id="email"
                required
              />
            </Label>
            <Label class="space-y-2">
              <span>Phone</span>
              <Input
                type="tel"
                name="phone"
                bind:value={modelData.phone}
                placeholder="555-555-1212"
                id="phone"
                required
              />
            </Label>
            <Label class="space-y-2">
              <span>Email</span>
              <Input
                type="email"
                name="email"
                bind:value={modelData.email}
                placeholder="name@company.com"
                id="email"
                required
              />
            </Label>
            <Label class="space-y-2">
              <span>Course</span>
              <Select
                class="mt-2"
                name="course"
                id="course"
                items={course}
                bind:value={selectedCourse}
              />
            </Label>
            <Label class="space-y-2">
              <span>Year</span>
              <Select
                class="mt-2"
                name="year"
                id="year"
                items={year}
                bind:value={selectedYear}
              />
            </Label>

            <div class="flex justify-between">
              <Button
                type="submit"
                class="w-2/1"
                on:click={() => {
                  popupModal = true;
                }}
              >
                Delete
              </Button>
              <Button
                type="submit"
                color="white"
                class="w-2/1 text-primary-600"
                on:click={async () => {
                  await sendMail(
                    modelData.email,
                    modelData.name,
                    modelData.$id
                  );
                  alertMessage = `Email sent to ${modelData.name} at ${modelData.email}`;
                  formModal = false;
                  isAlertAvailable = true;
                }}
              >
                Resend Email
              </Button>
              <Button
                type="submit"
                color="green"
                class="w-2/1"
                on:click={async () => {
                  await updateTotalIsVisited(modelData);
                  alertMessage = "Data Updated";
                  isAlertAvailable = true;
                  formModal = false;
                }}
              >
                Save
              </Button>
            </div>
          </form>
        </Modal>
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
