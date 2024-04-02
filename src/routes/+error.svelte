<script>
  import { InfoCircleSolid } from "flowbite-svelte-icons";
  import { Alert } from "flowbite-svelte";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="BFC Farewell" />
</svelte:head>

<section>
  <div class="p-8">
    <Alert color="red" class="!items-start">
      <span slot="icon">
        <InfoCircleSolid slot="icon" class="w-4 h-4" />
        <span class="sr-only">Info</span>
      </span>
      <p class="font-medium">
        {$page.error?.message} Try the following fixes:
      </p>
      <ul class="mt-1.5 ms-4 list-disc list-inside">
        <li>Check if the entered URL is valid</li>
        <li>Your not re-using someones else's TICKET</li>
        <li>If nothing seems to work contact the organisers</li>
      </ul>
    </Alert>
  </div>
</section>
