<script>
 let code = "";
 let secretHtml = "";

 let dasawyisiText = `გილოცავ! შენ მიაგენი საწყის საიდუმლოს!
    DM-ს უთხარი <b>2625</b> და მოგეცემა 5 ვერცხლი...`;

 let machveneText = `<a
    href="https://excalidraw.com/#room=99a0515a44aa748ed655,H9tv4yGpvWbCds3oX_TiBA">
    ძალითა შენითა იხილე წარსული შენი...
 </a>`;

 let atasiIanaliText = `<p>გამოსახულება ირეკლება გონების თვალში:</p>
<p>წვეროსანი და თეთრთმიანი კაცი დგას, ამაყად უყურებს ფართოდ გადაჭიმულ კოშკურებსა და ციხეებს.</p>
<p>წელზე ვერცხლისფრად მოლივლივე იარაღი აქვს მომაგრებული. ნაწერი კარგად არ ჩანს. "V...UM D...".</p>`;

 let nmMystery1Text = `<p>მრავალი უცნაური რამ ჩადენილა სახელით ნათელისა და მის მხილავთა.
    ერთია, რომ გადააწვდინო შენი სიგიჟე მთელ ზურმუხტს, ხოლო მეორე —
    დაიყოლიო დიადი დინასტიები, რომ შენ მსახურება გაგიწიონ.
    კაცი იქნება ეს თუ ჯუჯა,
    სიხარბე და ღვთაებობანას თამაში მაინც ერთი და იგივე აქვთ.</p>`;

 const secrets = new Map();
 secrets.set("დასაწყისი", dasawyisiText);
 secrets.set("მაჩვენე", machveneText);
secrets.set("ათასი იანალი", atasiIanaliText);
secrets.set("შიდა ბაასი", nmMystery1Text);

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
