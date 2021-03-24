import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      header: {
        "firstOption": "Inicio",
        "secondOption": "Conocimientos",
        "thirdOption": "Historia",
        "fourthOption": "Contacto"
      },
      footer: {
        licence: 'Esta obra está autorizada bajo una licencia internacional Creative Commons Reconocimiento-No comercial 4.0.',
        mention: 'Iconos diseñados por Freepik de www.flaticon.es'
      },
      "knowledgePage": {

        "dashboards": {
          "frontDashboard": "Tecnologias de frontend usadas (%)",
          "backDashboard": "Tecnologias backend usadas (%) (Favorito)",
          "styleDashboard": "Tecnologias de estilos usadas (%)"
        },

        "buttons": [

          {
            "title": "Tomcat",
            "text": "En el tiempo que he estado trabajando con Java Spring, he usado tomcat y me he ocupado de diferentes versiones.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tomcat-logo.svg/1280px-Tomcat-logo.svg.png",
            "tags": [
              "Tomcat 9",
              "Tomcat 8.5.54"
            ]
          },

          {
            "title": "MariaDB",
            "text": "Whenever I have worked with SQL I have used MariaDB or MySQL and as DBMS HeidiSQL and MysqlWorkbench.",
            "img": "https://d1.awsstatic.com/logos/partners/MariaDB_Logo.d8a208f0a889a8f0f0551b8391a065ea79c54f3a.png",
            "tags": [
              "MariaDB",
              "MySQL"
            ]
          },

          {
            "title": "MongoDB",
            "text": "Siempre que he trabajado con SQL he usado MariaDB o MySQL y como DBMS HeidiSQL y MysqlWorkbench.",
            "img": "https://accentsconagua.com/img/images_9/full-text-search-in-mongodb_2.png",
            "tags": [
              "MongoDB",
              "NoSQL"
            ]
          },
          {
            "title": "Java",
            "text": "He usado tanto Oracle JDK como OpenJDK y también muchas de sus versiones.",
            "img": "https://benjagarrido.com/wp-content/uploads/2015/07/java_logo.png",
            "tags": [
              "OracleJDK",
              "OpenJDK",
              "JDK 8",
              "JDK 9",
              "JDK 11",
              "JDK 12",
              "JDK 13"
            ]
          }
        ],
        "add_info": "Otras tecnologias usadas"

      },
      "historyPage":[
        {
          "title":"Sistemas Microinformaticos y Redes (SMR)",
          "text":"En este curso aprendí a gestionar sistemas en entorno de Servidor tanto en Linux como en Windows y realización de los mismos, también se gestionó un servidor que hosteaba una pagina que alojaba una tienda online realizada con PrestaShop y otra web realizada desde cero con Wordpress.",
        },
        {
          "title":"SALTO",
          "text":" En este puesto de trabajo realice reparación de hardware(teclados, impresoras, monitores...), además de discos y soldaduras de condesnadores en placas, pero lo mas importante es que aprendi a manejar sistemas linux(Ubuntu, Debian, Fedora...).",
        },
        {
          "title":"Desarrollo de Aplicaciones Web (DAW)",
          "text":"En este curso aprendí a gestionar sistemas en entorno de Servidor tanto en Linux como en Windows yrealización de los mismos, también se gestionó un servidor que hosteaba una pagina que alojaba una tienda online realizada con PrestaShop y otra web realizada desde cero con Wordpress.",
        },
        {
          "title":"Paellasoft",
          "text":"Este es en el trabajo en el que estoy actualmente, me encargo de la gestión de un servidor con tomcat implementado,he desarrollado microservicios en Java Spring Boot y actualmente estoy FullStack con Laravel y Angular.",
        },
      ]
  },
  mutations: {},
  actions: {},
  getters:{
    footer: state => {
      return state.footer
    },
    header: state => {
      return state.header
    },
    knowledgePage: state => {
      return state.knowledgePage
    },
    historyPage: state => {
      return state.historyPage
    }
  }
})