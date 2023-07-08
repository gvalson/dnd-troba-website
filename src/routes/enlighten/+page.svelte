<script lang="ts">
 let code: string = "";
 let codeIsRight: boolean = false;

 let check = () => {
     console.log("checking...");
     codeIsRight = code === "SECRET";
 }
</script>

<h1>Get enlightened ✨</h1>

<p>In the land of old, who knows what knowledge might lie untold.</p>

<form>
    <input type="text" bind:value={code}>
    <input type="submit" on:click={check()}>
    Dare to take a leap...
</form>

<p>
    codeisRight: {codeisRight}
</p>

{#if codeIsRight}
    <p>You have found the LIGHT!</p>
    <!-- <Light {code}> -->
{/if}
