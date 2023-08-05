<script>
 export let name = "უსახელო"
 export let class_ka;
 export let class_en;
 export let short_introduction;
 export let description;
 export let status;
</script>

<div class="char-card">
    <div class="ns">
	<span class="char-status">{status}</span>
	<div class="name">{name}</div>
    </div>
    <div class="char-class"><em>{class_ka}</em></div>
    <div class="intro">{short_introduction}</div>
</div>

<style>
 .char-card {
     background-color: #261302;
     color: #FEF4EC;
     margin: 5px;
     border: 10px double #FEF4EC;
     border-radius: 10px;
     padding: 15px;
 }
 .char-card > div {
     margin: 5px;
 }
 .ns {
     display: flex;
     flex-direction: column-reverse;
 }
 .char-status {
     position: absolute;
     text-align: center;
     height: inherit;
 }
 .name {
     text-align: center;
     font-weight: bold;
     font-size: 1.5em;
     /* display: inline-block; */
 }
 .char-class {
     text-align: center;
     font-size: 1.25em;
 }
</style>
