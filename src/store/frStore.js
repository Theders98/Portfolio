import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    header: {
      "firstOption": "Indice",
      "secondOption": "Connaissances",
      "thirdOption": "Histoire",
      "fourthOption": "Contact"
    },
    footer: {
      licence: 'Ce travail est autorisé sous une licence Creative Commons Attribution-NonCommercial 4.0 International.',
      mention: 'Icônes conçues par Freepik sur www.flaticon.es'
    },
    "knowledgePage": {
        "aboutMe": "Je m'appelle David Jimenez Ribelles, j'ai étudié un diplôme supérieur en développement d'applications Web"
      },
    "knowledgePage": {
  
      "dashboards": {
        "frontDashboard": "Technologies de frontend utilisées (%)",
        "backDashboard": "Technologies de backend utilisées (%) (Préféré)",
        "styleDashboard": "Technologies de style utilisé (%)"
      },
  
      "buttons": [
        {
          "title": "Tomcat",
          "text": "Pendant le temps que j'ai travaillé avec Java Spring, j'ai utilisé tomcat et j'ai travaillé avec différentes versions.",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tomcat-logo.svg/1280px-Tomcat-logo.svg.png",
          "tags": [
            "Tomcat 9",
            "Tomcat 8.5.54"
          ]
        },
        {
          "title": "MariaDB",
          "text": "Chaque fois que j'ai travaillé avec SQL, j'ai utilisé MariaDB ou MySQL et comme SGBD HeidiSQL et MysqlWorkbench.",
          "img": "https://d1.awsstatic.com/logos/partners/MariaDB_Logo.d8a208f0a889a8f0f0551b8391a065ea79c54f3a.png",
          "tags": [
            "MariaDB",
            "MySQL"
          ]
        },
        {
          "title": "MongoDB",
          "text": "J'ai peu travaillé sans SQL mais je me débrouille bien dans MongoDB.",
          "img": "https://accentsconagua.com/img/images_9/full-text-search-in-mongodb_2.png",
          "tags": [
            "MongoDB",
            "NoSQL"
          ]
        },
        {
          "title": "Java",
          "text": "J'ai utilisé à la fois le JDK Oracle et l'OpenJDK ainsi que beaucoup de leurs versions.",
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
      "add_info": "Autres technologies utilisées"
    },
    "historyPage":[
      {
        "title":"Systèmes et réseaux de micro-informatique (SMR)",
        "text":"Dans ce cours, j'ai appris à gérer des systèmes dans un environnement serveur à la fois sous Linux et Windows et leur mise en œuvre, un serveur qui hébergeait une page qui hébergeait une boutique en ligne réalisée avec PrestaShop et un autre site Web créé à partir de zéro avec Wordpress a également été géré.",
      },
      {
        "title":"SALTO",
        "text":"Dans ce travail, j'ai fait des réparations matérielles (claviers, imprimantes, moniteurs ...), ainsi que des disques et des soudures de condensateurs sur plaques, mais le plus important est que j'ai appris à manipuler les systèmes linux (Ubuntu, Debian, Fedora ... ).",
      },
      {
        "title":"Développement d'applications Web (DAW)",
        "text":"Dans ce cours, j'ai appris à gérer des systèmes dans un environnement serveur à la fois sous Linux et Windows et à les réaliser, un serveur qui hébergeait une page qui hébergeait une boutique en ligne réalisée avec PrestaShop et un autre site Web créé à partir de zéro avec Wordpress a également été géré.",
      },
      {
        "title":"Paellasoft",
        "text":"C'est le travail dans lequel je suis actuellement, je suis en charge de la gestion d'un serveur avec tomcat implémenté, j'ai développé des microservices en Java Spring Boot et je suis actuellement FullStack avec Laravel et Angular.",
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
  },

  
})