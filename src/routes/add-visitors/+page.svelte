<script lang="ts">
</script>

<svelte:head>
  <title>Add Visitors</title>
</svelte:head>

<main class="column">
  <div class="todos-container box column">
    <h1>Add Visitors</h1>
  </div>

  <form
    method="POST"
    action="?/create"
    class="box column"
    enctype="multipart/form-data"
  >
    <div class="input-container column">
      <label for="name">Name</label>
      <input type="text" name="name" />
    </div>

    <div class="input-container column">
      <label for="phone">Phone No</label>
      <input type="tel" name="phone" />
    </div>

    <div class="input-container column">
      <label for="email">Mail</label>
      <input type="email" name="email" />
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
      <input type="file" name="photo" id="photo" />
    </div>

    <div class="input-container column">
      <label for="paymentss">Payment ScreenShot</label>
      <input type="file" name="payments" id="payment" />
    </div>

    <button>Add Visitor</button>
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
