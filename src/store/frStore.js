import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const data = {
  state: {

      header: [{
        "firstOption": "Indice",
        "secondOption": "Connaissances",
        "thirdOption": "Histoire",
        "fourthOption": "Contact"
      }],
      footer: [{
        licence: 'Ce travail est autorisé sous une licence Creative Commons Attribution-NonCommercial 4.0 International.',
        mention: 'Icônes conçues par Freepik sur www.flaticon.es'
      }],
      "knowledgePage": [{
          "aboutMe": "Je m'appelle David Jimenez Ribelles, j'ai étudié un diplôme supérieur en développement d'applications Web"
        }],
      "knowledgePage": [{

        "dashboards": [{
          "firstDashboard": "Technologies de programmation utilisées (%)",
          "secondDashboard": "Technologies de style utilisé (%)"
        }],

        "buttons": [{

          "buttonTomcat": [{
            "title": "Tomcat",
            "text": "Pendant le temps que j'ai travaillé avec Java Spring, j'ai utilisé tomcat et j'ai travaillé avec différentes versions.",
            "tags": [
              "Tomcat 9",
              "Tomcat 8.5.54"
            ]
          }],

          "buttonMariaDB": [{
            "title": "MariaDB",
            "text": "Chaque fois que j'ai travaillé avec SQL, j'ai utilisé MariaDB ou MySQL et comme SGBD HeidiSQL et MysqlWorkbench.",
            "tags": [
              "MariaDB",
              "MySQL"
            ]
          }],

          "buttonMongoDB": [{
            "title": "MongoDB",
            "text": "J'ai peu travaillé sans SQL mais je me débrouille bien dans MongoDB.",
            "tags": [
              "MongoDB",
              "NoSQL"
            ]
          }],
          "buttonJava": [{
            "title": "Java",
            "text": "J'ai utilisé à la fois le JDK Oracle et l'OpenJDK ainsi que beaucoup de leurs versions.",
            "tags": [
              "OracleJDK",
              "OpenJDK",
              "JDK 8",
              "JDK 9",
              "JDK 11",
              "JDK 12",
              "JDK 13"
            ]
          }]
        }]

      }]
  }

}

const getters = {

}