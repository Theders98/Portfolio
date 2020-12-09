import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      header: {
        "firstOption": "Index",
        "secondOption": "Knowledge",
        "thirdOption": "History",
        "fourthOption": "Contact"
      },
      footer: {
        licence: 'This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International license. ',
        mention: 'Icons designed by Freepik from www.flaticon.es'
      },
      "knowledgePage": {
        "dashboards": {
          "programmingDashboard": " Used programming technologies (%)",
          "styleDashboard": "Used style technologies (%)"
        },
        "buttons": [
          {
            "title": "Tomcat",
            "text": "In the time that I have been working with Java Spring I have used tomcat and have dealt with different versions. ",
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
            "text": "I have worked little with no SQL but I do manage well in MongoDB.",
            "img": "https://accentsconagua.com/img/images_9/full-text-search-in-mongodb_2.png",
            "tags": [
              "MongoDB",
              "NoSQL"
            ]
          },
          {
            "title": "Java",
            "text": "I have used both the Oracle JDK and the OpenJDK and also many of their versions.",
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
        "add_info": "Other technologies used" 
        
        },
        "historyPage":[
          {
            "title":"Microinformatics Systems and Networks (SMR)",
            "text":"In this course I learned how to manage systems in a Server environment both in Linux and Windows and their implementation, a server that hosted a page that hosted an online store made with PrestaShop and another website made from scratch with Wordpress was also managed.",
          },
          {
            "title":"SALTO",
            "text":"In this job, I did hardware repair (keyboards, printers, monitors ...), as well as discs and soldering of condensers on plates, but the most important thing is that I learned to handle linux systems (Ubuntu, Debian, Fedora ... ).",
          },
          {
            "title":"Web Application Development (DAW)",
            "text":"In this course I learned how to manage systems in a Server environment both in Linux and Windows and to carry them out. A server was also managed that hosted a page that hosted an online store made with PrestaShop and another website made from scratch with Wordpress.",
          },
          {
            "title":"Paellasoft",
            "text":"This is the job I am currently in, I am in charge of managing a server with tomcat implemented, I have developed microservices in Java Spring Boot and I am currently FullStack with Laravel and Angular.",
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