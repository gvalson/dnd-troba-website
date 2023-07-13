<script>
 import { slide, fade } from 'svelte/transition';
 let open = false;
 $: toggle = () => { open = !open };
</script>

<div class="toggle" on:click={toggle}></div>

{#if open}
    <div class="carousel" transition:slide={{duration: 300, axis: 'x'}}>
	<slot/>
    </div>
    <div class="overlay" out:fade={{duration: 100}}
    on:click={toggle}></div>
{/if}

<style>
 a {
     background: black;
 }
 button {
     width: 10em;
 }
 .carousel {
     position: fixed;
     left: 0;
     top: 0;
     height: 100vh;
     width: 65%;
     background: rgb(255,238,238);
     z-index: 3;
 }
 .overlay {
     position: fixed;
     left: 0;
     top: 0;
     height: 100vh;
     width: 100vw;
     background: black;
     opacity: 0.6;
     z-index: 2;
 }
 .toggle::before {
     height: 40px;
     width: 40px;
     background-image: url('/hamburger-menu-svgrepo-com.svg');
     color: rgb(7, 2, 13);
     background-size: contain;
     content: "";
     display: inline-block;
     background-repeat: no-repeat;
     cursor: pointer;
 }
 @media screen and (min-width:900px) {
     .toggle {
	 display: none;
     }
 }
</style>
