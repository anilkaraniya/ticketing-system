<script>
  import "../app.pcss";
  import Header from "./Header.svelte";
  import "./styles.css";
</script>

<div class="app">
  <Header></Header>

  <main>
    <slot />
  </main>

  <footer>
    <p>
      Made with ❤️ by <a href="https://anil.live">Anil Karaniya</a>
      using
      <a href="https://svelte.dev/">Svelte</a>
    </p>
  </footer>
</div>

<style>
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
</style>
