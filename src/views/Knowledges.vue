<template>
  <div class="bg-gray-200">

<!-- <div class="flex mt-32 justify-around">
    <div class="mt-4 max-w-screen-lg bg-gray-700 rounded-lg mx-auto text-center py-12">
        <h2 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
            Check all certifications
        </h2>
        <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md bg-gray-600 shadow">
                <a href="/certifications" class="text-white font-bold py-2 px-6">
                    Go!
                </a>
            </div>
        </div>
    </div>
</div> -->

    
    <div class="flex mt-32 justify-around flex-wrap" id="dashboards">
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Graph Card-->
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="font-bold uppercase text-gray-600">{{this.data.dashboards.frontDashboard}}</h5>
          </div>
          <div class="p-5 flex align-middle">
          <ChartPrograming v-if="loaded" :data="ProgramingTechnologies" :styles="styles"/>
          </div>
          
        </div>
        <!--/Graph Card-->
      </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Graph Card-->
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-gray-300 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="font-bold uppercase text-gray-600">{{this.data.dashboards.backDashboard}}</h5>
          </div>
          <div class="p-5 flex align-middle bg-yellow-100">
          <ChartBackend v-if="loaded" :data="BacknedTechnologies" :styles="styles"/>
          </div>
          
        </div>
        <!--/Graph Card-->
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Graph Card-->
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="font-bold uppercase text-gray-600">{{this.data.dashboards.styleDashboard}}</h5>
          </div>
          <div class="p-5 flex align-middle">
           <ChartStyle v-if="loaded" :data="StyleTechnologies" :styles="styles"/>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-32 justify-around flex-wrap" id="tecnologies">
      <div v-for="(button, index) in this.data.buttons" v-bind:key="index" class="flex-col items-center justify-center">
        <div class="w-32 mx-auto cursor-pointer button text-white font-bold">
          <img class="w-32"
            v-bind:src="button.img"
            alt
          />
        </div>
        <div class="object p-4 mt-4 shadow-xl">
          <div class="max-w-sm rounded">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{button.title}}</div>
              <p class="text-gray-700 text-base" >{{button.text}}</p>
            </div>
            <div class="px-6 py-4">

              <span v-for="(tag, index) in button.tags"
               v-bind:key="index"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{tag}}</span>
   
          </div>
        </div>
      </div>
      </div>

    </div>
    <div>

    
    <div class="border-b-2 border-gray-400 ml-64 mr-64 flex justify-center text-gray-800">
      <p>{{this.data.add_info}}</p>
    </div>


      
    </div>
    <div class="flex flex-wrap pt-20 pb-10">
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/adobe-photoshop.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/adobe-illustrator.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/amazons.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/xampp.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/babel.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/composer.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/docker.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/Jasper.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/eclipse.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/git.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/HeidiSQL.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/json.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/Jsoup.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/jwt.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/netbeans.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/newRelic.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/node.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/npm.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/php.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/phpmyadmin.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/putty.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/SonyVegas.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/ubuntu.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/xml.png" alt/>
  </div>
  <div class="w-16 mx-auto cursor-pointer button text-white font-bold transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-110">
    <img src="@/assets/TechUsed/webpack.png" alt/>
  </div>
  
  </div>
  </div>
</template>

<script>


import ChartPrograming from "@/components/Chart-Programing";
import ChartStyle from "@/components/Chart-Style";
import ChartBackend from "@/components/Chart-Backend";

	import enStore from '@/store/enStore.js'
	import esStore from '@/store/esStore.js'
  import frStore from '@/store/frStore.js'
  
export default {
name: "Knowledges",
components: {
    ChartPrograming,
    ChartStyle,
    ChartBackend
  },
  data() {
    return {
      loaded: false,
      ProgramingTechnologies: null,
      StyleTechnologies: null,
      BacknedTechnologies: null,
      styles: {
        width: "650px",
        height: "400px",
        position: "relative"
      },
      data: enStore.getters.knowledgePage
      
    };
  },
  async created() {
    let resp = await fetch(
      "https://api.jsonbin.io/b/5e2b4f673d75894195de48ff/1"
    );
    let data =           {
  
  "ProgramingTechnologies": {
    "Vue": 30,
    "Angular": 30,
    "Jquery": 10,
    "JavaScript": 20,
    "Java": 10
  },
    "BacknedTechnologies": {
    "Java": 30,
    "Laravel": 30,
    "Python": 40,
  },
  "StyleTechnologies": {
    "Vuetify": 15,
    "SCSS": 30,
    "Bootstrap": 20,
    "Tailwind": 35
  }

}   
    this.ProgramingTechnologies = data.ProgramingTechnologies;
    this.StyleTechnologies = data.StyleTechnologies;
    this.BacknedTechnologies = data.BacknedTechnologies;
    this.loaded = true;
  },methods: {

  },
  mounted() {

  let lang = localStorage.getItem('lang')	
    if (lang === 'es') {
			this.data = esStore.getters.knowledgePage;
		}else if (lang === 'fr') {
			this.data = frStore.getters.knowledgePage;
		}
		else if (lang === 'en') {
			this.data = enStore.getters.knowledgePage;
		}

  },
};
</script>
   <style scope>
.object {
  width: 300px;
  height: 300px;
  opacity: 0;
  background: white;
  border-radius: 5%;
  border-color: #d3d3d3;
  border-width: thin;
  transform: scaleY(0.8) skewX(10deg);
  transform-origin: 50% 0%;
  transition-duration: 0.25s;
}
.button:hover + .object {
  opacity: 1;
  transform: scaleY(1) skewX(0deg);
}
</style>

  
                          