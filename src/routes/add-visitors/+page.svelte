<script lang="ts">
  // @ts-nocheck
  import { createVisitors } from "$lib/appwrite";
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
  import emailjs from "@emailjs/browser";

  let iscreated = false;

  async function uploadStart() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const mop = document.getElementById("mop").value;

    if (!name || !phone) {
      return {
        status: 400,
        body: {
          message: "Title and description are required",
        },
      };
    }
    const uniqueID = name.substring(0, 5).trim().toLowerCase() + phone;
    console.log(uniqueID);

    const result = await createVisitors(
      name,
      phone,
      email,
      course,
      year,
      mop,
      uniqueID
    );

    emailjs.send("service_fsvkdnp","template_75mq9im",{
      to_name: name,
      message: `https://farewell-bfc.netlify.app/?id=${uniqueID}`,
      reply_to: email,
    },
      {
        publicKey: '8Vvkzh0V5CQHPLnaq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

    // emailjs
    //   .send(
    //     "service_fosyqp9",
    //     "template_lm9mvzd",
    //     {
    //       to_name: name,
    //       message: `https://farewell-bfc.netlify.app/?id=${uniqueID}`,
    //       reply_to: email,
    //     },
    //     {
    //       publicKey: "xntlUgpGgtSKEStQw",
    //     }
    //   )
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //     }
    //   );

    document.getElementById("form").reset();
    iscreated = true;
    return {
      status: 200,
      body: result,
    };
  }

  function closeAlert() {
    iscreated = false;
  }
</script>

<svelte:head>
  <title>Add Visitors</title>
</svelte:head>

{#if iscreated}
  <Alert color="green" class="mb-4" dismissable on:close={closeAlert}>
    <InfoCircleSolid slot="icon" class="w-4 h-4" />
    The visitor was added successfully !!
  </Alert>
{/if}

<main class="column">
  <div class="todos-container box column">
    <h1>Add Visitors</h1>
  </div>

  <form class="box column" on enctype="multipart/form-data" id="form">
    <div class="input-container column">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>

    <div class="input-container column">
      <label for="phone">Phone No</label>
      <input type="tel" name="phone" id="phone" />
    </div>

    <div class="input-container column">
      <label for="email">Mail</label>
      <input type="email" name="email" id="email" />
    </div>

    <div class="input-container column">
      <label for="course">Course</label>
      <select name="course" id="course">
        <option value="BBA">BBA</option>
        <option value="BACS">BACS</option>
        <option value="BCA">BCA</option>
        <option value="B'com">B'com</option>
      </select>
    </div>

    <div class="input-container column">
      <label for="year">Year</label>
      <select name="year" id="year">
        <option value="1">First Year</option>
        <option value="2">Second Year</option>
        <option value="3">Third Year</option>
      </select>
    </div>

    <div class="input-container column">
      <label for="payment">Mode of Payment</label>
      <select name="mop" id="mop">
        <option value="Cash">Cash</option>
        <option value="Online">Online</option>
      </select>
    </div>

    <button on:click={uploadStart}>Add Visitor</button>
  </form>
</main>

<style>
  main {
    margin: 0 auto;

    max-width: 480px;

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #3e4850;

    gap: 1em;
  }

  .box {
    padding: 1em;

    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(75, 79, 91, 0.1);
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 0;

    font-size: 1.5rem;
  }

  form {
    gap: 0.5em;
  }

  .input-container {
    gap: 0.5em;
  }

  label {
    font-size: 0.8rem;
    color: #717378;
  }

  input,
  select {
    padding: 0.5em;

    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.5em;

    border: 0px;
    border-radius: 4px;
    background-color: #151c29;

    color: white;

    cursor: pointer;
  }
</style>
