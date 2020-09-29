<template>
  <div class="bg-gray-200">
    <div class="flex mt-32 justify-around " id="dashboards">
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Graph Card-->
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="font-bold uppercase text-gray-600">Used programming tecnologies (%)</h5>
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
          <div class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="font-bold uppercase text-gray-600">Used style tecnologies (%)</h5>
          </div>
          <div class="p-5 flex align-middle">
           <ChartStyle v-if="loaded" :data="StyleTechnologies" :styles="styles"/>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-32 justify-around" id="tecnologies">
      <div class="flex-col items-center justify-center">
        <div class="w-32 mx-auto cursor-pointer button text-white font-bold">
          <img
            class="w-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tomcat-logo.svg/1280px-Tomcat-logo.svg.png"
            alt
          />
        </div>
        <div class="object p-4 mt-4 shadow-xl">
          <div class="max-w-sm rounded">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Tomcat</div>
              <p
                class="text-gray-700 text-base"
              >En el tiempo que he estado trabajando con Java Spring he usado tomcat y me he manejado con diferentes versiones.</p>
            </div>
            <div class="px-6 py-4">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >Tomcat 9</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >Tomcat 8.5.54</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-col items-center justify-center">
        <div class="w-32 mx-auto cursor-pointer button text-white font-bold">
          <img
            class="w-32"
            src="https://d1.awsstatic.com/logos/partners/MariaDB_Logo.d8a208f0a889a8f0f0551b8391a065ea79c54f3a.png"
            alt
          />
        </div>
        <div class="object p-4 mt-4 shadow-xl">
          <div class="max-w-sm rounded">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">MariaDB</div>
              <p
                class="text-gray-700 text-base"
              >Siempre que he trabajado con SQL he usado MariaDB y como SGBD HeidiSQL y MysqlWorkbench.</p>
            </div>
            <div class="px-6 py-4">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >MariaDB</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >Mysql</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-col items-center justify-center">
        <div class="w-32 mx-auto cursor-pointer button text-white font-bold">
          <img
            class="w-32"
            src="https://accentsconagua.com/img/images_9/full-text-search-in-mongodb_2.png"
            alt
          />
        </div>
        <div class="object p-4 mt-4 shadow-xl">
          <div class="max-w-sm rounded">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">MongoDB</div>
              <p
                class="text-gray-700 text-base"
              >He trabajado poco con no SQL pero si que me manejo bien en MongoDB.</p>
            </div>
            <div class="px-6 py-4">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >MongoDB</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >NoSQL</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-col items-center justify-center">
        <div class="w-32 mx-auto cursor-pointer button text-white font-bold">
          <img
            class="w-32"
            src="https://benjagarrido.com/wp-content/uploads/2015/07/java_logo.png"
            alt
          />
        </div>
        <div class="object p-4 mt-4 shadow-xl">
          <div class="max-w-sm rounded">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Java</div>
              <p
                class="text-gray-700 text-base"
              >He usado tanto el Oracle JDK como el OpenJDK y tambien muchas de sus versiones.</p>
            </div>
            <div class="px-6 py-4">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >OpenJDK</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >OracleJDK</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >JDK 8</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >JDK 9</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >JDK 11</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >JDK 12</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >JDK 13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>

    
    <div class="border-b-2 border-gray-400 ml-64 mr-64 flex justify-center text-gray-800">
<p>Otras tecnologias usadas</p>
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
export default {
name: "Knowledges",
components: {
    ChartPrograming,
    ChartStyle
  },
  data() {
    return {
      loaded: false,
      ProgramingTechnologies: null,
      StyleTechnologies: null,
      styles: {
        width: "650px",
        height: "400px",
        position: "relative"
      }
    };
  },
  async created() {
    let resp = await fetch(
      "https://api.jsonbin.io/b/5e2b4f673d75894195de48ff/1"
    );
    let data =           {
  
  "ProgramingTechnologies": {
    "Vue": 20,
    "Angular": 20,
    "Jquery": 5,
    "JavaScript": 10,
    "Laravel": 15,
    "Java": 30
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
    this.loaded = true;
  }
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

  
                          