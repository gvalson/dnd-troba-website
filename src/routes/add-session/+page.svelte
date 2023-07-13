<script>
 import TipTapInput from './TipTapInput.svelte'
 export let data;
 export let form;
</script>

<div class="preamble">
    <a class="white-b" href="/sessions">უკან დაბრუნება</a>
</div>

<form method="POST" action="?/createPost">
    <input name="title" type="text" value=""/>
    <button type="submit">
	შენახვა
    </button>
</form>

<TipTapInput/>

<style>
 form {
     margin-top: 30px;
 }
 .preamble {
     margin-bottom: 15px;
 }
 a {
     text-decoration: none;
 }
</style>
