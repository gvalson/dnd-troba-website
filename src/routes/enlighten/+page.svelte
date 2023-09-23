<script>
 let code = "";
 let secretHtml = "";

 let dasawyisiText = `გილოცავ! შენ მიაგენი საწყის საიდუმლოს!
    DM-ს უთხარი <b>2625</b> და მოგეცემა 5 ვერცხლი...`;

 let machveneText = `<a
    href="https://excalidraw.com/#room=99a0515a44aa748ed655,H9tv4yGpvWbCds3oX_TiBA">
    ძალითა შენითა იხილე წარსული შენი...
 </a>`;

 let atasiIanaliText = `<p><em>გამოსახულება ირეკლება გონების თვალში:</em></p>
<p>წვეროსანი და თეთრთმიანი კაცი დგას, ამაყად უყურებს ფართოდ გადაჭიმულ კოშკურებსა და ციხეებს.</p>
<p>წელზე ვერცხლისფრად მოლივლივე იარაღი აქვს მომაგრებული. ნაწერი კარგად არ ჩანს. "V...UM D...".</p>
<p>„ამდენი უშრომიათ წინაპართა, ჯერ რომ ამ გადაკარგულში მოსულიყვნენ,
შემდეგ კი დასახლებულიყვნენ, ჭაპანი ეწიათ, გამრავლებულიყვნენ...
ნუთუ ჩემ წინ გადაშლილი საოცრება ასე ეგზომ გულისწამღებლად მშვენიერი რატომ არის ახლა,
როცა ვიცი, რომ ყველაფერი ჩემივე ხელით უნდა დავანგრიო...“</p>`;

 let nmMystery1Text = `<p>„მრავალი უცნაური რამ ჩადენილა სახელით ნათელისა და მის მხილავთა.
    ერთია, რომ გადააწვდინო შენი სიგიჟე მთელ ზურმუხტს, ხოლო მეორე —
    დაიყოლიო დიადი დინასტიები, რომ შენ მსახურება გაგიწიონ.
    კაცი იქნება ეს თუ ჯუჯა,
    სიხარბე და ღვთაებობანას თამაში მაინც ერთი და იგივე აქვთ.“</p>`;

 let linuaChurchText = `<p><em>მიწისქვეშეთის სურათი ცოცხლდება თვალწინ.
მყრალი სუნი ავსებს პატარა სივრცეს, გალიაში მჯდომარე ადამიანს თავი ჩაქინდრული აქვს.</em></p>

<p><em>ხრინწიანი ხმით, მაგრამ რბილი ინტონაციით, გალიასთან მდგომი ლაპარაკს იწყებს:</em></p>

<p>
„ახლა კი, როცა შენ ჩემ ხელში ხარ, ვერავინ შემაჩერებს იქ. როდის დადგება ნეტავი ის დრო,
რომ ამდენი ძებნა და თხრა მორჩეს... და წესრიგი ამქვეყნის გავრცელდეს ისე, როგორც
განგებამ განაგა?..“
</p>`;

 const secrets = new Map();
 secrets.set("დასაწყისი", dasawyisiText);
 secrets.set("მაჩვენე", machveneText);
 secrets.set("ათასი იანალი", atasiIanaliText);
 secrets.set("შიდა ბაასი", nmMystery1Text);
 secrets.set("ძოწის ძეწკვი", linuaChurchText);

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
	<div class="content">{@html secrets.get(code)}</div>
    {/if}

</div>


<style>
 input {
     width: 50%;
     height: 40px;
     margin-bottom: 15px;
 }
 .content {
     display: flex;
     flex-direction: column;
     min-height: 75%;
     margin-bottom: 15px;
     padding-top: 15px;
     padding-bottom: 15px;
     padding-left: 15px;
     padding-right: 15px;
     background: rgba(186,214,219,0.3);
     background: linear-gradient(180deg, rgba(186,214,219,0.3) 0%, rgba(252,209,209,0.3) 100%);
     border: double 5px #261302;
     border-radius: 8px;
 }
 .content div {
     width: 50%;
 }
 .preamble {
     background: none;
 }
 .htmlContent {
     background: none;
 }
 @media screen and (max-width:900px) {
     .content div {
	 width: inherit;
     }
 }
</style>
