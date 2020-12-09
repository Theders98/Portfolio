<template>
    <div>
        
<div class="bg-gray-200 min-h-screen pt-40 pb-40">
            
    <div class="min-h-screen flex justify-center">
        <div class="w-2/3 mx-auto">
            <div class="flex flex-row w-full">
    <!-- left col -->

    <div class="w-2/5 px-2 py-10">
        <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
            <div class="text-gray-600 mb-2 flex justify-between">
                <div class="font-bold">
                    {{this.data[0].title}}
                </div>
                <div class="flex flex-row">
                    <button class="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i class="far fa-edit"></i></button>
                    <button class="text-red-500 hover:text-red-300 transition duration-200"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>
            <div class="text-gray-600">
                {{this.data[0].text}}
                </div>
        </div>
    </div>
    
    <!--line column-->
    <div class="w-1/5  flex justify-center">
        <div class="relative flex h-full w-1 bg-green-300 items-center justify-center">
            <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-5 bg-white font-thin">
                 <div>09/2015</div>
                 <div>03/2017</div>
            </div>
        </div>
    </div>

    <!--right column-->
    <div class="w-2/5 px-2 py-10 "></div></div>
    <div class="flex flex-row w-full">

    <!-- left col -->
    <div class="w-2/5 px-2 py-10"></div>

    <!--line column-->
    <div class="w-1/5  flex justify-center">
        <div class="relative flex h-full w-1 bg-green-300 items-center justify-center">
            <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-5 bg-white font-thin">
                <div>10/2017</div>
                <div>03/2018</div>
            </div>
        </div>
    </div>

    <!--right column-->
    <div class="w-2/5 px-2 py-10 ">
        <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
            <div class="text-gray-600 mb-2 flex justify-between">
                <div class="font-bold">
                     {{this.data[1].title}}
                </div>
            </div>
            <div class="text-gray-600">
               {{this.data[1].text}}
               </div>
        </div>
    </div>
</div>
            <div class="flex flex-row w-full">
    <!-- left col -->

    <div class="w-2/5 px-2 py-10">
        <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
            <div class="text-gray-600 mb-2 flex justify-between">
                <div class="font-bold">
                     {{this.data[2].title}}
                </div>
                <div class="flex flex-row">
                    <button class="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i class="far fa-edit"></i></button>
                    <button class="text-red-500 hover:text-red-300 transition duration-200"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>
            <div class="text-gray-600">
            {{this.data[2].text}}    
                    </div>
        </div>

    </div>
    <!--line column-->
    <div class="w-1/5  flex justify-center">
        <div class="relative flex h-full w-1 bg-green-300 items-center justify-center">
            <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                 <div>09/2018</div>
                 <div>03/2020</div>
            </div>
        </div>
    </div>
    <!--right column-->
    <div class="w-2/5 px-2 py-10 "></div></div>
    <div class="flex flex-row w-full">

    <!-- left col -->
    <div class="w-2/5 px-2 py-10"></div>
     <!--line column-->
    <div class="w-1/5  flex justify-center">
        <div class="relative flex h-full w-1 bg-green-300 items-center justify-center">
            <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-5 bg-white font-thin">
                <div>03/2020</div>
                <div>Actually</div>
            </div>
        </div>
    </div>

    <!--right column-->
    <div class="w-2/5 px-2 py-10 ">
        <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
            <div class="text-gray-600 mb-2 flex justify-between">
                <div class="font-bold">
                     {{this.data[3].title}}
                </div>
            </div>
            <div class="text-gray-600">
                    {{this.data[3].text}}
               </div>
        </div>
    </div>
</div>  
</div>
 </div>


    </div>

        </div>
    </div>
</template>
<script>
import enStore from "@/store/enStore.js";
import esStore from "@/store/esStore.js";
import frStore from "@/store/frStore.js";
export default {
  name: "History",
  data() {
    return {
      data: enStore.getters.historyPage,
    };
  },
  mounted() {
    let lang = localStorage.getItem("lang");
    if (lang === "es") {
      this.data = esStore.getters.historyPage;
    } else if (lang === "fr") {
      this.data = frStore.getters.historyPage;
    } else if (lang === "en") {
      this.data = enStore.getters.historyPage;
    }
  },
};
</script>