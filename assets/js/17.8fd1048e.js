(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{402:function(e,t,a){"use strict";a.r(t);var o=a(51),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-tamagotchi-pet-using-the-pokemon-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-tamagotchi-pet-using-the-pokemon-api"}},[e._v("#")]),e._v(" Creating a Tamagotchi Pet using the Pokemon API")]),e._v(" "),a("p",[a("strong",[e._v("Published:")]),e._v(" "),a("em",[e._v("11/06/2020")])]),e._v(" "),a("p",[e._v("This week I messed around with the "),a("strong",[e._v("Pokemon API")]),e._v(' to create a small project that resembles a "'),a("em",[e._v("Tamagotchi")]),e._v('" kids toy.')]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"project-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-overview"}},[e._v("#")]),e._v(" Project Overview")]),e._v(" "),a("p",[e._v("For this mini-project, I built a web-based "),a("strong",[e._v("Pokemon")]),e._v(' "'),a("em",[e._v("Tamagotchi")]),e._v('" like client using JQuery. One of the requirements I wanted to fulfill was "'),a("em",[e._v("stats")]),e._v('" and "'),a("em",[e._v("status")]),e._v('" effect indicators which interact with each other to display to the viewer. Another requirement I wanted to give is the ability to have a randomly generated pokemon each time a new '),a("em",[e._v("Pokemon")]),e._v(" is recruited.")]),e._v(" "),a("h2",{attrs:{id:"designing-an-interactive-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#designing-an-interactive-system"}},[e._v("#")]),e._v(" Designing an Interactive System")]),e._v(" "),a("p",[e._v('Every recruited "'),a("em",[e._v("Tamagotchi")]),e._v('" '),a("strong",[e._v("Pokemon")]),e._v(" pet will take on a random set of values that will be rendered to the viewer. I followed a "),a("code",[e._v("one-way data-binded")]),e._v(" type architecture in this case where from the "),a("em",[e._v("action")]),e._v(" that is clicked within the system it first goes through the inital "),a("code",[e._v("check")]),e._v(" sub-routine, then it grabs the appointed "),a("code",[e._v("data")]),e._v(" processes, and finally is being rendered into the "),a("code",[e._v("view")]),e._v(" of the client browser. During the "),a("em",[e._v("data")]),e._v(" process aspect of the system, I mutated the "),a("code",[e._v("state")]),e._v(" & "),a("code",[e._v("status")]),e._v(" values that are dependent on the "),a("code",[e._v("stats")]),e._v(" of the pet.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/2020/pokemon_tamagotchi_graphic.png",alt:"project diagram"}})]),e._v(" "),a("h2",{attrs:{id:"using-the-pokemon-api-to-build-a-tamagotchi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-pokemon-api-to-build-a-tamagotchi"}},[e._v("#")]),e._v(" Using the Pokemon API to build a Tamagotchi")]),e._v(" "),a("p",[e._v("Using the "),a("em",[e._v("Interactive System")]),e._v(" I built, I was able to process my data using the "),a("strong",[e._v("Pokemon API")]),e._v(" to generate a pet "),a("em",[e._v("pokemon")]),e._v(" and "),a("strong",[e._v("random")]),e._v(" "),a("em",[e._v("stats")]),e._v(".")]),e._v(" "),a("p",[e._v("Find the Pokemon API at: "),a("a",{attrs:{href:"https://pokeapi.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pokemon API"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Pokemon API")]),e._v(" provides a specified "),a("code",[e._v("GET")]),e._v(" request "),a("code",[e._v("http")]),e._v(" route that can be used to interface in gathering "),a("em",[e._v("pokemon information")]),e._v(". The route I wanted to request was referenced as "),a("code",[e._v("https://pokeapi.co/api/v2/ability/{id or name}/")]),e._v(". Since the request can be sent as a "),a("strong",[e._v("unique id")]),e._v(" of the "),a("em",[e._v("Pokemon")]),e._v(", I was able to use all "),a("strong",[e._v("Generation 1")]),e._v(" pokemon with a number limiter of "),a("em",[e._v("150")]),e._v(" ("),a("em",[e._v("All 150 Gen 1 Pokemon")]),e._v("). This pokemon request returned back to me "),a("em",[e._v("2 key")]),e._v(" pieces of data I needed, the Pokemon "),a("code",[e._v("name")]),e._v(" & "),a("code",[e._v("img src")]),e._v(". From there on I used this data during the "),a("strong",[e._v("processing")]),e._v(" portion of my "),a("em",[e._v("Interaction System")]),e._v(" to generate a "),a("em",[e._v("unique")]),e._v(" pet.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/2020/pokemon_tamagotchi.png",alt:"tamagotchi pokemon"}})]),e._v(" "),a("p",[e._v("Try it yourself at  my GitHub Repository at: "),a("a",{attrs:{href:"https://github.com/BrianLinggadjaja/tamagotchi_pokemon_pet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pokemon Tamagotchi Repo"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);