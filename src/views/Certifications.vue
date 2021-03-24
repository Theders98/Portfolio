<template>
  <div class="mt-16">
    <section class="mt-8 text-gray-600 body-font overflow-hidden">
      <div class="container py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <h1
            class="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900"
          >
            Certification List
          </h1>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="p-4 xl:w-1/4 md:w-1/2 w-7/12 mb-12">
            <div
              class="bg-gray-500 h-full rounded-lg mb-6 flex flex-col relative overflow-hidden shadow-xl"
            >
              <span
                class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
                >Certification</span
              >
              <div class="h-48" style="background-image: url(image.png)">
                <div class="text-4xl text-white mt-4 ml-4">
                  SCRUM DEVELOPER (CSD)
                </div>
              </div>
              <div
                contextmenu=""
                class="pt-8 pl-4 pr-4 flex rounded-lg items-center text-gray-900"
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi unde maiores nihil officiis voluptatum numquam quisquam,
                  veritatis placeat aliquid velit, saepe, quae totam cupiditate.
                  Iure quas quam dolorem magnam ut.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-7/12 mb-12">
            <div
              class="bg-gray-400 h-full rounded-lg mb-6 flex flex-col relative overflow-hidden shadow-xl"
            >
              <span
                class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
                >Certification</span
              >
              <div class="h-48" style="background-image: url(image.png)">
                <div class="text-4xl text-white mt-4 ml-4">
                  SCRUM DEVELOPER (CSD)
                </div>
              </div>
              <div
                contextmenu=""
                class="pt-8 pl-4 pr-4 flex rounded-lg items-center text-gray-900"
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi unde maiores nihil officiis voluptatum numquam quisquam,
                  veritatis placeat aliquid velit, saepe, quae totam cupiditate.
                  Iure quas quam dolorem magnam ut.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-7/12 mb-12">
            <div
              class="bg-gray-500 h-full rounded-lg mb-6 flex flex-col relative overflow-hidden shadow-xl"
            >
              <span
                class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
                >Certification</span
              >
              <div class="h-48" style="background-image: url(image.png)">
                <div class="text-4xl text-white mt-4 ml-4">
                  SCRUM DEVELOPER (CSD)
                </div>
              </div>
              <div
                contextmenu=""
                class="pt-8 pl-4 pr-4 flex rounded-lg items-center text-gray-900"
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi unde maiores nihil officiis voluptatum numquam quisquam,
                  veritatis placeat aliquid velit, saepe, quae totam cupiditate.
                  Iure quas quam dolorem magnam ut.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-7/12 mb-12">
            <div
              class="bg-gray-400 h-full rounded-lg mb-6 flex flex-col relative overflow-hidden shadow-xl"
            >
              <span
                class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
                >Certification</span
              >
              <div class="h-48" style="background-image: url(image.png)">
                <div class="text-4xl text-white mt-4 ml-4">
                  SCRUM DEVELOPER (CSD)
                </div>
              </div>
              <div
                contextmenu=""
                class="pt-8 pl-4 pr-4 flex rounded-lg items-center text-gray-900"
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi unde maiores nihil officiis voluptatum numquam quisquam,
                  veritatis placeat aliquid velit, saepe, quae totam cupiditate.
                  Iure quas quam dolorem magnam ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ChartPrograming from "@/components/Chart-Programing";
import ChartStyle from "@/components/Chart-Style";
import ChartBackend from "@/components/Chart-Backend";

import enStore from "@/store/enStore.js";
import esStore from "@/store/esStore.js";
import frStore from "@/store/frStore.js";

export default {
  name: "Knowledges",
  components: {
    ChartPrograming,
    ChartStyle,
    ChartBackend,
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
        position: "relative",
      },
      data: enStore.getters.knowledgePage,
    };
  },
  async created() {
    let resp = await fetch(
      "https://api.jsonbin.io/b/5e2b4f673d75894195de48ff/1"
    );
    let data = {
      ProgramingTechnologies: {
        Vue: 30,
        Angular: 30,
        Jquery: 10,
        JavaScript: 20,
        Java: 10,
      },
      BacknedTechnologies: {
        Java: 30,
        Laravel: 30,
        Python: 40,
      },
      StyleTechnologies: {
        Vuetify: 15,
        SCSS: 30,
        Bootstrap: 20,
        Tailwind: 35,
      },
    };
    this.ProgramingTechnologies = data.ProgramingTechnologies;
    this.StyleTechnologies = data.StyleTechnologies;
    this.BacknedTechnologies = data.BacknedTechnologies;
    this.loaded = true;
  },
  methods: {},
  mounted() {
    let lang = localStorage.getItem("lang");
    if (lang === "es") {
      this.data = esStore.getters.knowledgePage;
    } else if (lang === "fr") {
      this.data = frStore.getters.knowledgePage;
    } else if (lang === "en") {
      this.data = enStore.getters.knowledgePage;
    }
  },
};
</script>


  
                          