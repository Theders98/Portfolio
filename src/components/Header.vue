<template>
        <div class="bg-gray-400 font-sans leading-normal tracking-normal relative z-10">

	<nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">

                    
		<div class="flex items-center flex-shrink-0 text-white mr-6">

			<router-link to="/">
			<a class="text-white no-underline hover:text-white hover:no-underline flex" href="#">
				<img class="w-16" src="@/assets/logo.png" alt=""><span class="text-2xl pl-2 mt-2"> David Portafolio</span>
			</a>
			</router-link>
		</div>

		<div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
                    <router-link to="/" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
					Inicio
                    </router-link>
				</li>
				<li class="mr-3">
                    <router-link to="/knowledges" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Conocimientos
                    </router-link>
				</li>
				<li class="mr-3">
					<router-link to="/history" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
					History
					</router-link>
				</li>
				<li class="mr-3">
					<router-link to="/history" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
						Contacto
					</router-link>
					
				</li>
				<div class="dropdown inline-block relative ">
					<button class="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center border-solid border-2">
					  <span class="mr-1">Language</span>
					  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
					</button>
					<ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ">
					  <li class="">
						  <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap flex justify-between" href="#">
							  <p class="mt-2">English</p>
							  <img class="w-8 m-1" src="@/assets/bandera.svg" alt=""></a></li>
					  <li class="">
						  <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap flex justify-between" href="#">
							<p class="mt-2">French</p> 
							  <img class="w-8 m-1" src="@/assets/francia.svg" alt=""></a></li>
					  <li class="">
						  <a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap flex justify-between" href="#">
							<p class="mt-2">Spanish</p> 
							  <img class="w-8 m-1 " src="@/assets/espana.svg" alt=""></a></li>
					</ul>
				  </div>
			</ul>
		</div>
	</nav>
    </div>
</template>

    <style scope>
        .dropdown:hover .dropdown-menu {
  display: block;
}

	</style>
	<script>
	export default {
		methods:{
			changeHighlightedLink(){
				console.log();

			}
		}
	}
	</script>