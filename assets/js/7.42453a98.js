(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{381:function(e,t,o){e.exports=o.p+"assets/img/google-maps_customization.aa181372.png"},382:function(e,t,o){e.exports=o.p+"assets/img/csun_geo-guesser.418ff208.png"},407:function(e,t,o){"use strict";o.r(t);var s=o(51),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"geoguesser-inspired-game-using-the-google-maps-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geoguesser-inspired-game-using-the-google-maps-api"}},[e._v("#")]),e._v(" GeoGuesser Inspired Game using the Google Maps API")]),e._v(" "),s("p",[s("strong",[e._v("Published:")]),e._v(" "),s("em",[e._v("12/04/2020")])]),e._v(" "),s("p",[e._v("This week I got to work with the "),s("strong",[e._v("Google Maps API")]),e._v(" to build a "),s("em",[e._v("CSUN geo-guesser")]),e._v(" using vanilla HTML, CSS, & JS. I also learned a new CI tool called "),s("strong",[e._v("GitHub Actions")]),e._v(" which is build directly into "),s("strong",[e._v("GitHub")]),e._v(" (the repository I'm hosting from).")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"google-maps-api-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-maps-api-overview"}},[e._v("#")]),e._v(" Google Maps API Overview")]),e._v(" "),s("p",[e._v("During my inital project development for the "),s("em",[e._v("Gue-Guesser")]),e._v(" type project, I had to work with the "),s("strong",[e._v("Google Maps API")]),e._v(" to deliver a custom generated map based on the "),s("em",[e._v("CSUN")]),e._v(" location. The set-up process was a little weird where at first I had to generate a new "),s("code",[e._v("API key")]),e._v(" that you must create in your "),s("strong",[e._v("Google Cloud Service")]),e._v(" account. Each "),s("em",[e._v("key")]),e._v(" is based off the "),s("em",[e._v("Project")]),e._v(" associated. One thing to note is to "),s("strong",[e._v("lockdown any key")]),e._v(" created for security purposes so no one other than the intended purpose of the key is mis-used. In my case I had to enable the "),s("strong",[e._v("Google Maps Service")]),e._v(" through the top search bar so I was able to restrict the key to be only used in the "),s("em",[e._v("Google Maps API")]),e._v(" for my specified website.")]),e._v(" "),s("h2",{attrs:{id:"customizing-my-google-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizing-my-google-map"}},[e._v("#")]),e._v(" Customizing my Google Map")]),e._v(" "),s("p",[e._v("After "),s("em",[e._v("authorizing")]),e._v(" my account, I simply had to attach my "),s("code",[e._v("API key")]),e._v(" in the script import for google maps referenced on this page https://developers.google.com/maps/documentation/javascript/overview. Inside the link, a "),s("strong",[e._v("callback")]),e._v(" query in the url is used to call a new function called "),s("code",[e._v("initMap()")]),e._v(" which is used as the entry point for google maps to use after the script has loaded. Inside this function I used a method provided by google to generate a new map based of the parameters I passed into it called "),s("code",[e._v("new google.maps.Map")]),e._v(". I also took the time to generate a customized map and attached an "),s("code",[e._v("id")]),e._v(" so it would display a custom map with no names to buildings, since I was making a geo-guesser type game.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(381),alt:"google maps api"}})]),e._v(" "),s("h2",{attrs:{id:"creating-my-csun-geo-guesser-game"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-my-csun-geo-guesser-game"}},[e._v("#")]),e._v(" Creating my CSUN Geo-Guesser Game")]),e._v(" "),s("p",[e._v("Once I had the inital set-up for the map, I had to create the functionality to make the guessing game. I used a new method provided by google maps to generate "),s("em",[e._v("shapes")]),e._v(" to be used to give the user a place to click and check to see if their guess was correct. This method name was referenced as "),s("code",[e._v("new google.maps.Rectangle")]),e._v(" and can be found at the following link https://developers.google.com/maps/documentation/javascript/shapes. Once I had a new method to use to generate shapes, the "),s("em",[e._v("API")]),e._v(" also provides a "),s("strong",[e._v("listener")]),e._v(" function to be called when this specific shape instance is called which is "),s("code",[e._v("addListener('event', function call)")]),e._v(". These key "),s("em",[e._v("API")]),e._v(" features allowed me build out all the required features for my geo-guesser game.")]),e._v(" "),s("br"),e._v(" "),s("p",[e._v("Feel free to check out my "),s("strong",[e._v("CSUN Geo Guesser")]),e._v(" repository at: https://github.com/BrianLinggadjaja/csun_geo-guesser")]),e._v(" "),s("p",[s("img",{attrs:{src:o(382),alt:"csun geo-guesser"}})]),e._v(" "),s("h2",{attrs:{id:"using-github-actions-for-repo-automation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-github-actions-for-repo-automation"}},[e._v("#")]),e._v(" Using GitHub Actions for Repo Automation")]),e._v(" "),s("p",[e._v("My first impresions of "),s("strong",[e._v("GitHub Actions")]),e._v(" were great! It was a step in the right direction compared to "),s("strong",[e._v("Travis-CI")]),e._v(" (another well known automation tool) but in this case it was built directly into "),s("strong",[e._v("GitHub")]),e._v(" (the most popular repo hosting platform). The toolset was just as well verse if not more and the community of open source "),s("code",[e._v("Actions")]),e._v(" are abundant with most use cases solved with maybe a few changes to the action file. To initalize your actions inside a repository you have to create a folder called "),s("code",[e._v(".github")]),e._v(" in which all your actions are hosted inside via "),s("code",[e._v(".yml")]),e._v(" files. In my case I used github actions to target my "),s("code",[e._v("main")]),e._v(" branch where any pushes made will run a "),s("code",[e._v("linting/pretification")]),e._v(" job where it will automatically fix any issues if a developer forgot to do so on their end. In total, I will definetly be moving forward with more "),s("strong",[e._v("GitHub Actions")]),e._v(" instead of "),s("em",[e._v("Travis-CI")]),e._v(" since their service "),s("em",[e._v("availability")]),e._v(" has been going down recently.")]),e._v(" "),s("img",{staticStyle:{"max-width":"42rem"},attrs:{src:"/assets/2020/github-actions_action.png",alt:"github actions file"}}),e._v(" "),s("p",[e._v("All jobs that are ran have a status completion tab inside your "),s("strong",[e._v("Actions")]),e._v(" tab inside your repo where you can see what steps the action took in resolving the job.")]),e._v(" "),s("img",{staticStyle:{"max-width":"42rem"},attrs:{src:"/assets/2020/github-actions_run.png",alt:"github actions runners"}}),e._v(" "),s("p",[e._v("Check out more about GitHub Actions at the following link: https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions")])])}),[],!1,null,null,null);t.default=a.exports}}]);