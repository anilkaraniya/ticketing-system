<script>
  // @ts-nocheck

  import Alert from "flowbite-svelte/Alert.svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";

  export let data;
  import "../app.pcss";
  import "./styles.css";
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="BFC Farewell" />
</svelte:head>

<div class="app">

  <main>
<section>
  {#if data}
    <div class="container">
      <div class="ticket basic">
        <p>Admit One</p>
      </div>

      <div class="ticket airline">
        <div class="top">
          <h1>Bakliwal Foundation College of Arts, Commerce and Science</h1>
          <div class="big">
            <p class="from">Farewell</p>
            <p class="to">
              <i class="fas fa-arrow-right"></i>
              2K24
            </p>
          </div>
        </div>
        <div class="bottom">
          <div class="column">
            <div class="row row-1">
              <p class="small-text">
                <span>Email</span>
                {data.response.email}
              </p>
              <p class="row--right small-text">
                <span>MOP</span>
                {data.response.mop}
              </p>
            </div>
            <div class="row row-2">
              <p>
                <span>Entry</span>
                03:00 PM
              </p>
              <p class="row--center">
                <span>Commencement</span>
                04:00 PM
              </p>
              <p class="row--right">
                <span>End</span>
                9:00 PM
              </p>
            </div>
            <div class="row row-3">
              <p>
                <span>Name</span>
                {data.response.name}
              </p>
              <p class="row--center">
                <span>Year</span>
                {data.response.year}
              </p>
              <p class="row--right">
                <span>Group</span>
                {data.response.course}
              </p>
            </div>
          </div>
          <div>
            <img
              class="barcode"
              alt="Barcode"
              src="https://barcode.tec-it.com/barcode.ashx?data={data.response
                .id}"
            />
          </div>
        </div>
        <div
          class="justify-center mt-5 px-10 py-3 text-center items-center font-semibold text-gray-900 dark:text-white"
        >
          {#if data.response.isVisited}
            <div class="card card-green p-2">Visited</div>
          {:else}
            <div class="card card-red p-2">Not Visited</div>
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <div class="p-8">
      <Alert color="red" rounded={false} class="border-t-4">
        <InfoCircleSolid slot="icon" class="w-4 h-4" />
        <span class="font-medium">Alert!</span>
        Enter a valid URL.
      </Alert>
    </div>
  {/if}
</section></main>

<footer>
  <p>
    Made with ❤️ by <a href="https://anil.live">Anil Karaniya</a>
    using
    <a href="https://svelte.dev/">Svelte</a>
  </p>
</footer>
</div>

<style>

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  box-sizing: border-box;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  z-index: 2;
}

footer a {
  font-weight: bold;
}

@media (min-width: 480px) {
  footer {
    padding: 12px 0;
  }
}
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  p,
  h1 {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  .container .ticket {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .container .basic {
    display: none;
  }
  .airline {
    display: block;
    height: 575px;
    width: 270px;
    border-radius: 25px;
  }
  .airline .top {
    box-shadow:
      -5px -5px 9px rgba(255, 255, 255, 0.45),
      5px 5px 9px rgba(94, 104, 121, 0.3);

    height: 165px;
    background: #ffcc05;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }
  .airline .top h1 {
    text-transform: uppercase;
    color: black;
    font-weight: bold;
    font-size: 8px;
    letter-spacing: 0;
    text-align: center;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .airline .bottom {
    box-shadow:
      -5px -5px 9px rgba(255, 255, 255, 0.45),
      5px 5px 9px rgba(94, 104, 121, 0.3);

    height: 335px;
    background: #fff;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  .top .big {
    position: absolute;
    top: 50px;
    font-size: 63px;
    font-weight: 700;
    line-height: 0.8;
  }
  .top .big .from {
    color: #ffcc05;
    text-shadow:
      -1px 0 #000,
      0 1px #000,
      1px 0 #000,
      0 -1px #000;
  }
  .top .big .to {
    color: black;
    position: absolute;
    top: 60px;
    left: 32px;
    font-size: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .top .big .to i {
    margin-top: 1px;
    margin-right: 10px;
    font-size: 15px;
    color: black;
  }

  .bottom p {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 700;
    color: black;
  }
  .bottom p span {
    font-weight: 400;
    font-size: 11px;
    color: #6c6c6c;
  }
  .bottom .column {
    margin: 0 auto;
    width: 80%;
    padding: 2rem 0;
  }
  .bottom .row {
    display: flex;
    justify-content: space-between;
  }
  .bottom .row--right {
    text-align: right;
  }
  .bottom .row--center {
    text-align: center;
  }
  .bottom .row-2 {
    margin: 30px 0 60px 0;
    position: relative;
  }
  .bottom .row-2::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -30px;
    left: 0;
    background: #000;
    height: 1px;
  }

  .barcode {
    height: 50px;
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  .small-text {
    font-size: 12px !important;
  }

  div.card {
    background: white;
    border-radius: 1.3rem;
  }
  div.card-green {
    color: green;
    box-shadow:
      -5px -5px 9px rgba(43, 255, 0, 0.616),
      5px 5px 9px rgba(9, 255, 0, 0.603);
  }

  div.card-red {
    color: red;
    box-shadow:
      -5px -5px 9px rgb(247, 122, 122),
      5px 5px 9px rgba(190, 0, 0, 0.603);
  }
</style>
