<script>
 export let data;
</script>

<div class="preamble">
    <h1>სესიები</h1>
    <a class="white-b" href="/add-session">სესიის დამატება</a>
</div>

<ol>
    {#each data.posts as post}
	<li><a href="/session/{post.rowid}">{post.title}</a></li>
    {/each}
</ol>

<style>
 .preamble a {
     display: inline-block;
     text-decoration: none;
 }
 ol {
     line-height: 3em;
 }
 @media screen and (max-width:900px) {
     .preamble a {
	 width: 50%;
	 margin: auto;
     }
 }
</style>
