<script>
  // @ts-nocheck

  import Alert from "flowbite-svelte/Alert.svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
  import { page } from "$app/stores";

  const id = $page.url.searchParams.get("id");
  export let data;
  import "../app.pcss";
  import "./styles.css";

  let title;
  if (id == "johnd9999999999") {
    title = `Home | John Doe`;
  } else {
    title = "Home";
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="BFC Freshers 2k24" />
</svelte:head>

<body>
  <main>
    <section>
      {#if data}
        <div class="main">
          <div class="ticket">
            <div class="holes-top"></div>
            <div class="title">
              <p class="cinema">BFC STUDENTS PRESENTS</p>
              <p class="movie-title" style="font-weight: bolder;">
                UNOFFICIAL FRESHERS
              </p>
              <p style="font-size: 18px;">{data.response.name}</p>
              <p style="font-size: 15px;">{data.response.email}</p>
              <p style="font-size: 15px;">{data.response.phone}</p>
            </div>
            <div class="poster">
              <img
                src="https://www.bookeventz.com/blog-old/wp-content/uploads/2016/07/freshers.jpg"
                alt="Movie: Only God Forgives"
                height="50px"
              />
            </div>
            <div class="info">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Year</th>
                  <th>MOP</th>
                </tr>
                <tr>
                  <td class="bigger">{data.response.course}</td>
                  <td class="bigger">{data.response.year}</td>
                  <td class="bigger">{data.response.mop}</td>
                </tr>
              </table>
              <table>
                <tr>
                  <th>PRICE</th>
                  <th>DATE</th>
                  <th>TIME</th>
                </tr>
                <tr>
                  <td>₹500</td>
                  <td>17/8/24</td>
                  <td>12:00 PM</td>
                </tr>
              </table>
            </div>
            <div class="holes-lower"></div>
            <div class="serial">
              <img
                class="barcode"
                alt="Barcode"
                src="https://barcode.tec-it.com/barcode.ashx?data={data.response
                  .id}"
              />
            </div>
          </div>
        </div>
        <div class="verify">
          <div
            class="justify-center mt-5 px-10 py-3 text-center items-center font-semibold text-gray-900 dark:text-white"
          >
            {#if data.response.isVisited}
              <div id="success-box">
                <div class="dot"></div>
                <div class="dot two"></div>
                <div class="face">
                  <div class="eye"></div>
                  <div class="eye right"></div>
                  <div class="mouth happy"></div>
                </div>
                <div class="shadow scale"></div>
                <div class="message">
                  <h1 class="alert">Varified!</h1>
                  <p>yay, You'r Successfully Varified.</p>
                </div>
                <button class="button-box">
                  <h1 class="green-verify">Enjoy!</h1>
                </button>
              </div>
            {:else}
              <div id="error-box">
                <div class="dot"></div>
                <div class="dot two"></div>
                <div class="face2">
                  <div class="eye"></div>
                  <div class="eye right"></div>
                  <div class="mouth sad"></div>
                </div>
                <div class="shadow move"></div>
                <div class="message">
                  <h1 class="alert">Not verified!</h1>
                  <p>oh no, You'r not verified.</p>
                </div>
                <div class="button-box">
                  <h1 class="red-verify">Verify</h1>
                </div>
              </div>
            {/if}
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
    </section>
  </main>

  <footer>
    <p>
      Made with ❤️ by <a href="https://anil.live">Anil Karaniya</a>
      using
      <a href="https://svelte.dev/">Svelte</a>
    </p>
  </footer>
</body>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lato:400,700");

  body {
    background-color: Thistle;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  .main {
    height: 100vh;
  }

  .ticket {
    width: 300px;
    height: 670px;
    background-color: white;
    margin: auto auto;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .holes-top {
    height: 50px;
    width: 50px;
    background-color: Thistle;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: -25px;
  }
  .holes-top:before,
  .holes-top:after {
    content: "";
    height: 50px;
    width: 50px;
    background-color: Thistle;
    position: absolute;
    border-radius: 50%;
  }
  .holes-top:before {
    left: -150px;
  }
  .holes-top:after {
    left: 150px;
  }

  .holes-lower {
    position: relative;
    margin: 25px;
    border: 1px dashed #aaa;
  }
  .holes-lower:before,
  .holes-lower:after {
    content: "";
    height: 50px;
    width: 50px;
    background-color: Thistle;
    position: absolute;
    border-radius: 50%;
  }
  .holes-lower:before {
    top: -25px;
    left: -50px;
  }
  .holes-lower:after {
    top: -25px;
    left: 250px;
  }

  .title {
    padding: 50px 25px 10px;
  }

  .cinema {
    color: #aaa;
    font-size: 12px;
  }

  .movie-title {
    font-size: 19px;
    margin-bottom: 10px;
  }

  .info {
    padding: 15px 25px;
  }

  table {
    width: 100%;
    font-size: 11px;
    margin-bottom: 10px;
  }
  table tr {
    margin-bottom: 0px;
  }
  table th {
    text-align: left;
  }
  table th:nth-of-type(1) {
    width: 2%;
  }
  table th:nth-of-type(2) {
    width: 30%;
  }
  table th:nth-of-type(3) {
    width: 15%;
  }
  table td {
    width: 23%;
    font-size: 15px;
  }

  .bigger {
    font-size: 20px;
  }

  .serial {
    padding: 9px 25px;
  }

  .verify h1 {
    font-size: 0.9em;
    font-weight: 100;
    letter-spacing: 3px;
    padding-top: 5px;
    color: #fcfcfc;
    padding-bottom: 5px;
    text-transform: uppercase;
  }

  .verify .green-verify {
    color: #4ec07d;
  }

  .verify .red-verify {
    color: #e96075;
  }

  .verify .alert {
    font-weight: 700;
    color: #5e5e5e;
    letter-spacing: 5px;
  }

  .verify p {
    margin-top: -5px;
    font-size: 0.5em;
    font-weight: bold;
    color: #5e5e5e;
    letter-spacing: 1px;
  }

  button,
  .dot {
    cursor: pointer;
  }

  #success-box {
    position: relative;
    width: 35%;
    height: 100%;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 250px;
    height: 250px;
    background: linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%);
    border-radius: 20px;
    box-shadow: 5px 5px 20px rgba(203, 205, 211, 0.1);
    perspective: 40px;
  }

  #error-box {
    position: relative;
    width: 35%;
    height: 100%;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 250px;
    height: 250px;
    background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
    border-radius: 20px;
    box-shadow: 5px 5px 20px rgba(203, 205, 211, 0.1);
  }

  .dot {
    width: 8px;
    height: 8px;
    background: #fcfcfc;
    border-radius: 50%;
    position: absolute;
    top: 4%;
    right: 6%;
  }
  .dot:hover {
    background: #c9c9c9;
  }

  .two {
    right: 12%;
    opacity: 0.5;
  }

  .face {
    position: absolute;
    width: 22%;
    height: 22%;
    background: #fcfcfc;
    border-radius: 50%;
    border: 1px solid #777777;
    top: 21%;
    left: 37.5%;
    z-index: 2;
    animation: bounce 1s ease-in infinite;
  }

  .face2 {
    position: absolute;
    width: 22%;
    height: 22%;
    background: #fcfcfc;
    border-radius: 50%;
    border: 1px solid #777777;
    top: 21%;
    left: 37.5%;
    z-index: 2;
    animation: roll 3s ease-in-out infinite;
  }

  .eye {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #777777;
    border-radius: 50%;
    top: 40%;
    left: 20%;
  }

  .right {
    left: 68%;
  }

  .mouth {
    position: absolute;
    top: 43%;
    left: 41%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  .happy {
    border: 2px solid;
    border-color: transparent #777777 #777777 transparent;
    transform: rotate(45deg);
  }

  .sad {
    top: 49%;
    border: 2px solid;
    border-color: #777777 transparent transparent #777777;
    transform: rotate(45deg);
  }

  .shadow {
    position: absolute;
    width: 21%;
    height: 3%;
    opacity: 0.5;
    background: #777777;
    left: 40%;
    top: 43%;
    border-radius: 50%;
    z-index: 1;
  }

  .scale {
    animation: scale 1s ease-in infinite;
  }

  .move {
    animation: move 3s ease-in-out infinite;
  }

  .message {
    position: absolute;
    width: 100%;
    text-align: center;
    height: 40%;
    top: 47%;
  }

  .button-box {
    position: absolute;
    background: #fcfcfc;
    width: 50%;
    height: 15%;
    border-radius: 20px;
    top: 73%;
    left: 25%;
    outline: 0;
    border: none;
    box-shadow: 2px 2px 10px rgba(119, 119, 119, 0.5);
    transition: all 0.5s ease-in-out;
  }
  .button-box:hover {
    background: #efefef;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }

  @keyframes bounce {
    50% {
      transform: translateY(-10px);
    }
  }
  @keyframes scale {
    50% {
      transform: scale(0.9);
    }
  }
  @keyframes roll {
    0% {
      transform: rotate(0deg);
      left: 25%;
    }
    50% {
      left: 60%;
      transform: rotate(168deg);
    }
    100% {
      transform: rotate(0deg);
      left: 25%;
    }
  }
  @keyframes move {
    0% {
      left: 25%;
    }
    50% {
      left: 60%;
    }
    100% {
      left: 25%;
    }
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
</style>
