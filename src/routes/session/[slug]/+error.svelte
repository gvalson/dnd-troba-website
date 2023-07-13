<script>
 import { page } from '$app/stores';
</script>

<div class="preamble">
    <h1>{$page.status} შეცდომა</h1>
    {#if $page.status == 404}
	<p>მოცემული სესია ვერ მოიძებნა.</p>
    {/if}
    <button class="white-b" onClick="history.back(-1)">უკან დაბრუნება</button>
</div>

<style>
 h1 {
     color: #FE541C;
 }
</style>
