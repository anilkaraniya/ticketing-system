<script>
  import { page } from "$app/stores";
  const id = $page.url.searchParams.has("id");
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
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
            2k23
          </p>
        </div>
      </div>
      <div class="bottom">
        <div class="column">
          <div class="row row-1">
            <p>
              <span>Flight</span>
              AA2005
            </p>
            <p class="row--right">
              <span>Gate</span>
              B3
            </p>
          </div>
          <div class="row row-2">
            <p>
              <span>Boards</span>
              10:25 AM
            </p>
            <p class="row--center">
              <span>Departs</span>
              11:00 AM
            </p>
            <p class="row--right">
              <span>Arrives</span>
              1:05 PM
            </p>
          </div>
          <div class="row row-3">
            <p>
              <span>Passenger</span>
              Jesus Ramirez
            </p>
            <p class="row--center">
              <span>Seat</span>
              11E
            </p>
            <p class="row--right">
              <span>Group</span>
              3
            </p>
          </div>
        </div>
        <div>
          <img
            class="barcode"
            alt="Barcode"
            src="https://barcode.tec-it.com/barcode.ashx?data=1627283767828282"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

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
    top: 55%;
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
    left: 10%;
  }
</style>
