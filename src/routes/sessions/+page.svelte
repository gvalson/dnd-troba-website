<script>
 let inlineHtml = "<h4>this is inline html, hello!</h4>"
</script>

<div class="preamble">
    <h1>სესიები</h1>
    <button on:click={() => alert("unfinished.")}>სესიის დამატება</button>
</div>

<div class="inline">
    {@html inlineHtml}
</div>

<style>
 button {
     padding: 15px;
     font-size: 1em;
     font-family: inherit;
     background-color: #FEF4EC;
     border: solid 2px #261302;
     cursor: pointer;
 }
 @media screen and (max-width:900px) {
     button {
	 width: 75%;
     }
 }
</style>
