<script>
 let code = "";
 let secretHtml = "";
 const secrets = new Map();
 secrets.set("დასაწყისი", `გილოცავ! შენ მიაგენი საწყის საიდუმლოს! DM-ს უთხარი <b>2625</b> და მოგეცემა 5 ვერცხლი...`);
 secrets.set("მაჩვენე", `<a href="https://excalidraw.com/#room=99a0515a44aa748ed655,H9tv4yGpvWbCds3oX_TiBA">ძალითა შენითა იხილე წარსული შენი...</a>`)
 $: codeIsRight = secrets.has(code);
</script>

<div class="preamble">
    <h1>გაცისკროვნდი ✨</h1>

    <p class="poem">
	ყველასგან ნავიწყ, დაკარგულ ჟამს<br>
	უსმინე ახლოს ამ ძველთა თქმას.
    </p>

    <input type="text" placeholder="გაბედე და გადაეშვი..." bind:value={code}>

    {#if codeIsRight}
	<p>{@html secrets.get(code)}</p>
    {/if}

</div>


<style>
 input {
     width: 50%;
     height: 40px;
     margin: auto;
 }
</style>
