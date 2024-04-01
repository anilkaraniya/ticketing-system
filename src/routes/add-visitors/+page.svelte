<script lang="ts">
  // @ts-nocheck
  import { browser } from "$app/environment";
  import { createVisitors, uploadImage } from "$lib/appwrite";
  import { onMount } from "svelte";

  let selectedPaymentFile;
  let selectedPictureFile;
  let resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      resize(file, 500, 500, "JPEG", 100, 0, (uri) => resolve(uri), "blob");
    });
  };
  if (browser) {
    onMount(() => {
      let picture =
        /** @type {HTMLInputElement} */ document.getElementById("photo");
      if (picture !== null) {
        picture.onchange = () => {
          selectedPictureFile = picture.files[0];
          console.log(selectedPictureFile);
        };
      }
      let payment =
        /** @type {HTMLInputElement} */ document.getElementById("payment");
      if (payment !== null) {
        payment.onchange = () => {
          selectedPaymentFile = payment.files[0];
          console.log(selectedPaymentFile);
        };
      }
    });
  }
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
    let uniqueID = name.substring(0, 5).trim() + phone;
    await uploadImage(true, uniqueID, selectedPictureFile);
    await uploadImage(false, uniqueID, selectedPaymentFile);

    const result = await createVisitors(
      name,
      phone,
      email,
      course,
      year,
      mop,
      uniqueID,
      uniqueID,
      uniqueID
    );

    return {
      status: 200,
      body: result,
    };
  }
</script>

<svelte:head>
  <title>Add Visitors</title>
</svelte:head>

<main class="column">
  <div class="todos-container box column">
    <h1>Add Visitors</h1>
  </div>

  <form class="box column" action="" enctype="multipart/form-data" id="form">
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

    <div class="input-container column">
      <label for="photo">Photo</label>
      <input
        type="file"
        name="photo"
        id="photo"
        accept=".jpg, .png, .jpeg, .gif"
      />
    </div>

    <div class="input-container column">
      <label for="paymentss">Payment ScreenShot</label>
      <input
        type="file"
        name="payments"
        id="payment"
        accept=".jpg, .png, .jpeg, .gif"
      />
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
