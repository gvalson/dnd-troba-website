<script>
 import CharacterCard from './CharacterCard.svelte';

 let chars = [
     {
	 name: "ნერმან ფონ ვულდრა",
	 class_ka: "მეიარაღე",
	 class_en: "Gunslinger",
	 short_introduction: "„მოსიარულე იარაღის არსენალად“ ცნობილი ტონეთელი ადამიანი, რომელსაც უჩვეულო საქმეები აკავშირებს ყველასთან.",
	 description: "",
	 status: "☀️"
     },
     {
	 name: "უგლუკ ზრეთნი",
	 class_ka: "გრძნეული",
	 class_en: "Sorcerer",
	 short_introduction: "ზონდთა კავშირიდან დახსნილი, იდუმალი მაგიური უნარების მქონე და სისხლის უჩვეულოდ მოყვარული ნახევარორკი.",
	 description: "",
	 status: "☀️"
     },
     {
	 name: "სალვადორ „ლამაგიუს“ დელაგარი",
	 class_ka: "ჯადოქარი",
	 class_en: "Wizard",
	 short_introduction: "მუდამ ხელმალული და მანტიაში მოსილი ადამიანი, რომელსაც ანტიკორუფციული კორპორაცია აქტიურად ეძებს.",
	 description: "",
	 status: "☀️"
     },
     {
	 name: "ადამ აურერიელი",
	 class_ka: "ბარბაროსი",
	 class_en: "Barbarian",
	 short_introduction: "იდილიის გამორჩეული ოჯახის წევრი. უჩვეულოდ განმარტოებული და მშვიდი. სალვადორი მისთვის დაკარგული ძმაა. ყოველთვის იძახის: „მე მტრები არ მყავს“.",
	 description: "",
	 status: "☀️"
     },
     {
	 name: "ბალტო ივნისი",
	 class_ka: "მოციქული",
	 class_en: "Cleric",
	 short_introduction: "სხვებისთვის უცნობი მიზნით ჩამოსული ადამიანი. დამკვირვებელის როლს თამაშობს საწყის ეტაპზე.",
	 description: "",
	 status: "☀️"
     },
 ]
</script>

<div class="preamble">
    <h1>პერსონაჟები</h1>
</div>

<div id="chars-grid">
    <CharacterCard {...chars[0]}/>
    <CharacterCard {...chars[1]}/>
    <CharacterCard {...chars[2]}/>
    <CharacterCard {...chars[3]}/>
    <CharacterCard {...chars[4]}/>
</div>

<style>
 #content {
     width: 50%;
 }
 #chars-grid {
     /* background-color: #FEF4EC;
	border: solid 2px #261302; */
     display: grid;
     grid-template-columns: 1fr 1fr;
 }
 @media screen and (max-width:900px) {
     #content {
	 width: inherit;
     }
     #chars-grid {
	 display: flex;
	 flex-direction: column;
     }
 }
</style>
