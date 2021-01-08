(this["webpackJsonpbeginner-portfolio"]=this["webpackJsonpbeginner-portfolio"]||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(6),l=a.n(o),c=(a(31),a(3)),i=(a(5),a(32),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-start"},r.a.createElement("div",{className:"text-white "},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlInput1"},"Your Name:"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"First Last"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlInput1"},"Email Address:"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlTextarea1"},"Message:"),r.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})),r.a.createElement("a",{className:"submit-button nav-link d-flex justify-content-center cursor-pointer hover:bg-indigo-300",href:"mailto:alexemrob@gmail.com",role:"button"},"SEND")))))}),s={nav:{logo:"Ali Robertson",links:[{text:"Projects",to:"mywork"},{text:"Contact",to:"mycontact"}]},header:{img:"/OfficialPortfolio/assets/edit2.png",text:["Hello!","My name is Ali.","I am a "],typical:["full stack web developer. \ud83d\udcbb",2e3,"UI/UX enthusiast. \ud83c\udfa8",2e3,"mobile designer. \ud83d\udcf2",2e3],btnText:"View My work"},work:{title:"Projects",img:"/OfficialPortfolio/assets/CCimage.jpg",projectName:"Client-Catalogue",desc:"Client-Catalogue provides a virtual organization for your business. You may add, update and charge fees to your clientelle. Update the TODAY page to provide each days scheduled clients. This page also provides a to-do list to add and delete tasks to complete. Use the MESSAGE page tocommunicate with everyone saved in your catalogue."},work2:{title:"Projects",img:"/OfficialPortfolio/assets/Aimage.jpg",projectName:"Aesthetica",desc:"Aesthetica is a user friendly and interactive app that provides a virtual window shopping experience. Users can build a unique profile secured with a username and password. We tackle the hassle of filtering products based on user\u2019s shopping preferences which can then be pinned to their unique page and commented on."},stack:{title:"Stack",tech:[{img:"/OfficialPortfolio/assets/mongo.png",alt:"mongodb"},{img:"/OfficialPortfolio/logo512.png",alt:"react"},{img:"/OfficialPortfolio/assets/express.png",alt:"express"},{img:"/OfficialPortfolio/assets/node.png",alt:"node"}],desc:"MERN is currently my preference. I am a quick learner and excited to learn more in the future"},contact:{title:"Contact Me!",desc:"Resume provided upon request.",img:"/OfficialPortfolio/assets/edit2.png"}},m=a(16);function d(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=Object(n.useState)(!1),o=Object(m.a)(r,2),l=o[0],c=o[1];return Object(n.useLayoutEffect)((function(){function n(){try{var n=window.document.getElementById(e).offsetHeight;window.pageYOffset>n*a*t&&c(!0)}catch(r){c(!1)}}return window.addEventListener("scroll",n),n(),function(){return window.removeEventListener("scroll",n)}}),[e,t,a]),l}function u(){var e=d("header",.6,4);return r.a.createElement("div",{className:" min-h-screen  flex justify-center items-center  ",id:"mycontact"},r.a.createElement("div",{style:{minHeight:"50vh",background:"black"},className:"w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"},r.a.createElement(c.LazyLoadImage,{effect:"blur",src:s.contact.img,placeholderSrc:s.contact.imgPlaceholder,alt:"profile",width:"300px",className:"mt-10 transtion duration-2000 ease-in-out mx-auto"}),r.a.createElement("div",{className:"font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000"},r.a.createElement("h1",{className:"".concat(e?"":"translate-y-10 opacity-0"," transform transition duration-3000 text-white text-5xl font-bold")},s.contact.title),r.a.createElement("div",null,r.a.createElement(i,null)),r.a.createElement("p",{className:"".concat(e?"":"translate-y-10 opacity-0"," transform transition duration-3000 text-white text-2xl")},s.contact.desc),r.a.createElement("div",{className:"flex ".concat(e?"":"translate-y-10 opacity-0"," transform transition duration-3000 ")}))))}var f=a(25);var p=a(8);function x(){var e=function(e){return"transition duration-".concat(e," ease-in-out")},t=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(!0)}),[]),a}();return r.a.createElement("div",{style:{background:"black"},className:"min-h-screen flex items-center justify-center",id:"header"},r.a.createElement("div",{className:"flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between"},r.a.createElement("div",{className:"w-full md:w-2/5 "},r.a.createElement(c.LazyLoadImage,{src:s.header.img,alt:"profile",className:"w-full mx-auto",effect:"blur"})),r.a.createElement("div",{className:"font-dosis w-full md:w-3/5 text-center "},r.a.createElement("h2",{className:"text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ".concat(t?"translate-y-0":"translate-y-10 opacity-0","  ").concat(e(2e3)," ")},s.header.text[0],r.a.createElement("br",null),s.header.text[1]),r.a.createElement("h1",{className:"text-2xl md:text-4xl text-gray-400 transform ".concat(t?"translate-y-0":"translate-y-10 opacity-0"," ").concat(e(3e3)," ")},s.header.text[2],r.a.createElement(f.a,{steps:s.header.typical,loop:1/0,className:"inline-block",wrapper:"p"})),r.a.createElement(p.Link,{to:"mywork",smooth:!0},r.a.createElement("button",{className:" animate-bounce bg-blue-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-red-300 transform  ".concat(t?"translate-y-0":"translate-y-10 opacity-0"," ").concat(e(3500))},s.header.btnText)))))}var h=a(14);function g(){return r.a.createElement("div",{style:{background:"black"},className:"font-dosis fixed top-0 w-screen z-40"},r.a.createElement("div",{className:"flex items-center w-10/12  mx-auto py-3"},r.a.createElement(p.Link,{to:"header",smooth:!0,className:"text-3xl  font-bold text-white flex-1 cursor-pointer"},r.a.createElement("h1",null,s.nav.logo)),r.a.createElement("div",{className:"mr-4 text-3xl"},r.a.createElement("a",{target:"_blank",href:"https://github.com/alexemrob"},r.a.createElement(h.a,null))),r.a.createElement("div",{className:"mr-4 text-3xl"},r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/alexemrob/"},r.a.createElement(h.b,null))),r.a.createElement("div",{className:"text-white text-xl"},s.nav.links.map((function(e,t){return r.a.createElement(p.Link,{to:e.to,smooth:!0},r.a.createElement("span",{className:"mr-4 cursor-pointer",key:t},e.text))})))))}function w(){return r.a.createElement("div",{className:"min-h-screen flex items-center justify-center flex-col",style:{background:"#eee"}},r.a.createElement("h1",{className:"text-5xl font-dosis font-bold mb-10"},"Stack I work with"),r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-wrap justify-center"},s.stack.tech.map((function(e,t){return r.a.createElement("span",{key:t,className:" h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ".concat(t%2!==0?"animate-bounce":"animate-bounceFirst")},r.a.createElement(c.LazyLoadImage,{effect:"blur",src:e.img,alt:e.alt}))})))),r.a.createElement("p",{className:"mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis "},s.stack.desc,"."))}var E=a(15);function b(){var e=d("header",.6);return r.a.createElement("div",{className:"min-h-screen flex justify-center items-center flex-col",style:{background:"#FEFEFE"},id:"mywork"},r.a.createElement("h1",{className:"text-5xl font-dosis font-bold"},s.work.title),r.a.createElement("p",{className:"text-gray-600 text-2xl font-dosis mb-10"},"I have done"),r.a.createElement("div",{className:"flex flex-col md:flex-row justify-between items-center w-11/12 "},r.a.createElement(c.LazyLoadImage,{effect:"blur",placeholderSrc:s.work.imgPlaceholder,src:s.work.img,alt:"phone prototype",className:"m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"}),r.a.createElement("div",{className:"transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block",style:{border:"1px solid #e5ecf9",transform:e?"translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)":"",boxShadow:"35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)"}},r.a.createElement(y,null)),r.a.createElement("div",{className:"flex justify-center items-center md:hidden"},r.a.createElement(y,null))))}var y=function(){var e=d("header",.6);return r.a.createElement("div",null,r.a.createElement("h1",{className:" ".concat(e?"":"translate-y-10 opacity-0","   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold")},s.work.projectName),r.a.createElement("p",{className:"".concat(e?"":"translate-y-10 opacity-0","  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis")},s.work.desc),r.a.createElement("button",{className:"".concat(e?"":"translate-y-10 opacity-0"," transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl")},r.a.createElement("a",{className:"text-lg d-flex",href:"https://fierce-forest-24607.herokuapp.com/"},"WEBSITE ",r.a.createElement(E.a,null))))};function v(){var e=d("header",.6);return r.a.createElement("div",{className:"min-h-screen flex justify-center items-center flex-col",style:{background:"#FEFEFE"},id:"mywork"},r.a.createElement("div",{className:"flex flex-col md:flex-row justify-between items-center w-11/12 "},r.a.createElement(c.LazyLoadImage,{effect:"blur",placeholderSrc:s.work2.imgPlaceholder,src:s.work2.img,alt:"phone prototype",className:"m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"}),r.a.createElement("div",{className:"transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block",style:{border:"1px solid #e5ecf9",transform:e?"translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)":"",boxShadow:"35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)"}},r.a.createElement(k,null)),r.a.createElement("div",{className:"flex justify-center items-center md:hidden"},r.a.createElement(k,null))))}var k=function(){var e=d("header",.6);return r.a.createElement("div",null,r.a.createElement("h1",{className:" ".concat(e?"":"translate-y-10 opacity-0","   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold")},s.work2.projectName),r.a.createElement("p",{className:"".concat(e?"":"translate-y-10 opacity-0","  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis")},s.work2.desc),r.a.createElement("button",{className:"".concat(e?"":"translate-y-10 opacity-0"," transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl")},r.a.createElement("a",{className:"text-lg d-flex",href:"https://secure-ocean-28347.herokuapp.com/"},"WEBSITE ",r.a.createElement(E.a,null))))};var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement(u,null))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/OfficialPortfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/OfficialPortfolio","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.9290767e.chunk.js.map