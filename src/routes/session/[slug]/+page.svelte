<script>
 export let data;
</script>

<div class="content">
    <div class="preamble">
	<h1>{data.post.title}</h1>
	<a class="white-b" href="/sessions">უკან დაბრუნება</a>
    </div>
    <div class="htmlContent">{@html data.post.htmlContent}</div>
</div>

<style>
 a {
     display: inline-block;
     text-decoration: none;
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
 .preamble {
     background: none;
 }
 .htmlContent {
     background: none;
 }
</style>
