<script>
 import TipTapInput from './TipTapInput.svelte'
 import { editorHtml } from './stores.js'
 export let data;
 export let form;
</script>

<div class="preamble">
    <h1>ახალი სესიის დამატება</h1>
    <a class="white-b" href="/sessions">უკან დაბრუნება</a>
</div>

<div class="form">
    <form method="POST" action="?/createPost">
	<input name="title" type="text" value="" placeholder="სათაური..." />
	<input name="htmlContent" type="text" hidden value={$editorHtml}/>
	<button class="white-b" type="submit">
	    შენახვა
	</button>
    </form>
</div>

<TipTapInput/>

<style>
 .form {
     width: 50%;
 }
 form {
     padding-left: 5px;
     padding-right: 5px;
     display: flex;
     flex-direction: row;
     justify-content: space-between; 
 }
 form input {
     width: 33%;
 }
 form button {
     width: 33%;
 }
 .preamble {
     padding-bottom: 15px;
     margin-bottom: 15px;
     border-bottom: dashed 2px #261302;
     width: 50%;
 }
 a {
     text-decoration: none;
     display: inline-block;
 }
 @media screen and (max-width:900px) {
     .form {
	 width: inherit;
     }
     .preamble {
	 width: inherit;
     }
     form {
	 justify-content: space-between;
     }
     form input {
	 width: 55%;
     }
 }
</style>
