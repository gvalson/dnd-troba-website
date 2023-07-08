<script>
 import { slide, fade } from 'svelte/transition';
 let open = false;
 $: toggle = () => { open = !open };
</script>

<button on:click={toggle}>
მენიუ
</button>

{#if open}
    <div class="carousel" transition:slide={{duration: 300, axis: 'x'}}>
	<slot/>
    </div>
    <div class="overlay" out:fade={{duration: 100}}
    on:click={toggle}></div>
{/if}

<style>
    button {
      width: 10em;
    }
    .carousel {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 65%;
    background: rgb(255,238,238);
    z-index: 3;
    }
    .overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: black;
    opacity: 0.6;
    z-index: 2;
    }
</style>
