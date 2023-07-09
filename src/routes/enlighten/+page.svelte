<script>
 let code = "";
 $: codeIsRight = code === "დასაწყისი";
</script>

<div class="preamble">
    <h1>გაცისკროვნდი ✨</h1>

    <p class="poem">
	ყველასგან ნავიწყ, დაკარგულ ჟამს<br>
	უსმინე ახლოს ამ ძველთა თქმას.
    </p>

    <input type="text" placeholder="გაბედე და გადაეშვი..." bind:value={code}>

    {#if codeIsRight}
	<p>
	    გილოცავ! შენ მიაგენი საწყის საიდუმლოს! DM-ს უთხარი <b>2625</b> და მოგეცემა 5 ვერცხლი...
	</p>
	<!-- <Light {code}> -->
    {/if}

</div>


<style>
 input {
     width: 50%;
     height: 40px;
     margin: auto;
 }
</style>
