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
    <div class="navigation">
	<a href="/">მთავარი გვერდი</a>
	<a href="/characters">პერსონაჟები</a>
	<a href="/sessions">სესიების ჩანაწერები</a>
	<a href="/map">რუკა</a>
	<a href="/enlighten">?</a>
	<a href="/about">საიტის შესახებ</a>
    </div>
</nav>


<slot></slot>

<style>
 ul {
     list-style: none;
     padding: 0;
 }
 li {
     margin-bottom: 0;
 }
 nav li {
     text-decoration: none;
 }

 li a {
     display: block;
     padding: 15px;
 }
 nav {
     font-size: 15px;
     padding-top: 20px;
     padding-bottom: 20px;
 }
 button {
     background-color: rgb(7, 2, 13);
     color: #FEF4FC;
 }
 a {
     color: inherit;
     padding: 5px;
     border-radius: 2px;
     text-decoration: none;
 }
 a:hover {
     background-color: #2c9ddb;
     color: #FEF4FC;
     transition: 250ms;
 }

 .navigation {
     left: 0;
     width: 50%;
     display: flex;
     justify-content: space-between;
     border-bottom: solid 2px rgb(7, 2, 13);
     padding-bottom: 10px;
 }

 @media screen and (max-width:420px) {
     .navigation {
	 display: none;
     }
 }
</style>
