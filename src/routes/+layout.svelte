<script>
 import Carousel from './Carousel.svelte';
</script>

<nav>
    <Carousel>
	<ul>
	    <li><a href="/">მთავარი გვერდი</a></li>
	    <li><a href="/characters">პერსონაჟები</a></li>
	    <li><a href="/sessions">სესიების ჩანაწერები</a></li>
	    <li><a href="/map">რუკა</a></li>
	    <li><a href="/enlighten">?</a></li>
	    <li><a href="/about">საიტის შესახებ</a></li>
	</ul>
    </Carousel>
    <button>
	<a href="/">მთავარი გვერდი</a>
    </button>
</nav>


<slot></slot>

<style>
 nav {
     font-size: 15px;
 }
 li {
     margin-bottom: 2em;
 }
</style>
