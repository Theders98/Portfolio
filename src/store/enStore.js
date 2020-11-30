import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      header: [{
        "firstOption": "Index",
        "secondOption": "Knowledge",
        "thirdOption": "History",
        "fourthOption": "Contact"
      }],
      footer: [{
        licence: 'This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International license. ',
        mention: 'Icons designed by Freepik from www.flaticon.es'
      }],
      "knowledgePage": [{
          "aboutMe": "My name is david jimenez ribelles, I have studied a Higher Degree in Web Application Development"
        }],
      "knowledgePage": [{

        "dashboards": [{
          "firstDashboard": " Used programming technologies (%)",
          "secondDashboard": "Used style technologies (%)"
        }],

        "buttons": [{

          "buttonTomcat": [{
            "title": "Tomcat",
            "text": "In the time that I have been working with Java Spring I have used tomcat and have dealt with different versions. ",
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
            "text": "I have worked little with no SQL but I do manage well in MongoDB.",
            "tags": [
              "MongoDB",
              "NoSQL"
            ]
          }],
          "buttonJava": [{
            "title": "Java",
            "text": "I have used both the Oracle JDK and the OpenJDK and also many of their versions.",
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