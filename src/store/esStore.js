import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      header: [{
        "firstOption": "Indice",
        "secondOption": "Conocimientos",
        "thirdOption": "Historia",
        "fourthOption": "Contacto"
      }],
      footer: [{
        licence: 'Esta obra está autorizada bajo una licencia internacional Creative Commons Reconocimiento-No comercial 4.0.',
        mention: 'Iconos diseñados por Freepik de www.flaticon.es'
      }],
      "knowledgePage": [{
          "aboutMe": " Mi nombre es david jimenez ribelles, he cursado un Grado Superior en Desarrollo de Aplicaciones Web"
        }],
      "knowledgePage": [{

        "dashboards": [{
          "firstDashboard": "Tecnologias de programacion usadas (%)",
          "secondDashboard": "Tecnologias de estilos usadas (%)"
        }],

        "buttons": [{

          "buttonTomcat": [{
            "title": "Tomcat",
            "text": "En el tiempo que he estado trabajando con Java Spring, he usado tomcat y me he ocupado de diferentes versiones.",
            "tags": [
              "Tomcat 9",
              "Tomcat 8.5.54"
            ]
          }],

          "buttonMariaDB": [{
            "title": "MariaDB",
            "text": "Whenever I have worked with SQL I have used MariaDB or MySQL and as DBMS HeidiSQL and MysqlWorkbench.",
            "tags": [
              "MariaDB",
              "MySQL"
            ]
          }],

          "buttonMongoDB": [{
            "title": "MongoDB",
            "text": "Siempre que he trabajado con SQL he usado MariaDB o MySQL y como DBMS HeidiSQL y MysqlWorkbench.",
            "tags": [
              "MongoDB",
              "NoSQL"
            ]
          }],
          "buttonJava": [{
            "title": "Java",
            "text": "He usado tanto Oracle JDK como OpenJDK y también muchas de sus versiones.",
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
  },
  mutations: {},
  actions: {}
})