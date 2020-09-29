<template>
  <div class="home">
    	<!--Container-->
	<div class="container shadow-lg mx-auto bg-white mt-56 md:mt-18">

	<div class="bg-white font-sans leading-normal tracking-normal ">

	<div class="carousel-inner relative overflow-hidden w-full mt-16">
	  <!--Slide 1-->
		<input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
		<div class="carousel-item absolute opacity-0" style="height:50vh;">

			<div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
		</div>
		<label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-5 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-5 inset-y-0 right-0 my-auto">›</label>
		
		<!--Slide 2-->
		<input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
		<div class="carousel-item absolute opacity-0" style="height:50vh;">
			<div class="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
		</div>
		<label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-5 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-5 inset-y-0 right-0 my-auto">›</label> 
		
		<!--Slide 3-->
		<input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
		<div class="carousel-item absolute opacity-0" style="height:50vh;">
			<div class="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
		</div>
		<label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-5 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-5 inset-y-0 right-0 my-auto">›</label>

		<!-- Add additional indicators for each slide-->
		<ol class="carousel-indicators">
			<li class="inline-block mr-3">
				<label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
			<li class="inline-block mr-3">
				<label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
			<li class="inline-block mr-3">
				<label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
		</ol>
		
	</div>
</div>

</div>

<div class="flex justify-center" v-on:click="scrollToTop()"><img class="w-16 mt-32 opacity-25 transition duration-200 ease-in transform hover:opacity-100 hover:-translate-y-1 hover:scale-110 cursor-pointer" src="@/assets/flecha.svg" alt=""></div>

<div id="aboutMe" class="mt-32 mb-64">
<p class="text-5xl text-center mb-8 font-semibold" id="aboutMeTitle">Sobre Mí</p> 

<div class="ml-64 mr-64 flex " id="aboutMeText"><div class=" mr-32"><img class="mt-6" src="assets/logo.png" alt=""></div>

<div class="text-xl">	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor odio ac augue fermentum malesuada. Suspendisse velit elit, blandit fringilla felis quis, aliquam egestas odio. Proin magna urna, tincidunt id orci a, gravida efficitur diam. Proin orci diam, pulvinar et dapibus eu, tempus vel lacus. Donec malesuada dictum lectus nec consequat. In egestas, nisi sed sagittis fermentum, augue urna ultricies magna, sit amet maximus augue mi rutrum elit. Maecenas scelerisque, nibh et suscipit cursus, mi lectus porttitor massa, ut consectetur leo velit a lorem. Vivamus vitae diam tristique, scelerisque libero quis, tempus mi. In nec mi ac purus cursus ultricies non ac eros. Nulla scelerisque, urna sit amet fringilla scelerisque, elit est aliquam tellus, nec condimentum tortor arcu vel eros. Donec porttitor risus eget tellus sagittis varius.
</div>
</div>



</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }, methods: { 
           scrollToTop() {
                window.scrollBy({
    			top: window.innerHeight,
    			left: 0,
   				behavior: 'smooth'
});
           }
        }
}
</script>
<style> 
	.carousel-open:checked + .carousel-item {
				position: static;
				opacity: 100;
			}
			.carousel-item {
				-webkit-transition: opacity 0.6s ease-out;
				transition: opacity 0.6s ease-out;
			}
			#carousel-1:checked ~ .control-1,
			#carousel-2:checked ~ .control-2,
			#carousel-3:checked ~ .control-3 {
				display: block;
			}
			.carousel-indicators {
				list-style: none;
				margin: 0;
				padding: 0;
				position: absolute;
				bottom: 2%;
				left: 0;
				right: 0;
				text-align: center;
				z-index: 10;
			}
			#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
			#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
			#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
				color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
			}
</style>
