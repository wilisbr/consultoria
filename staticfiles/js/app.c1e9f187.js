(function(){"use strict";var e={1009:function(e,n,t){var r=t(5130),a=t(6768),o=t(4232);const s=(0,a.Lk)("option",{disabled:"",value:""},"Please select one",-1),i=["value"];function l(e,n,t,l,u,c){const f=(0,a.g2)("Analise");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":n[0]||(n[0]=n=>e.selectedOption=n)},[s,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.empresas,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.nome},(0,o.v_)(e.nome),9,i)))),128))],512),[[r.u1,e.selectedOption]]),(0,a.bF)(f,{ano:"2022"})])}const u={id:"wrapper"},c={class:"navbar is-success"},f={class:"navbar-brand"},d=(0,a.Lk)("strong",null," C.W. Gestão de Energia Fotovoltaica",-1),h=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),p=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),m=[h,p,v],b={class:"navbar-end"},k={class:"navbar-item"},g={class:"buttons"},L={class:"section"},y=(0,a.Lk)("footer",{class:"footer"},[(0,a.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),w=(0,a.Lk)("h1",null,"Empresas",-1);function O(e,n,t,r,s,i){const l=(0,a.g2)("router-link"),h=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",u,[(0,a.Lk)("nav",c,[(0,a.Lk)("div",f,[(0,a.bF)(l,{to:"/",class:"navbar-item"},{default:(0,a.k6)((()=>[d])),_:1}),(0,a.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:n[0]||(n[0]=n=>e.showMobileMenu=!e.showMobileMenu)},m)]),(0,a.Lk)("div",b,[(0,a.Lk)("div",{class:(0,o.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,a.Lk)("div",k,[(0,a.Lk)("div",g,[(0,a.Lk)("template",null,[(0,a.bF)(l,{to:"/clientes",class:"navbar-item"},{default:(0,a.k6)((()=>[(0,a.eW)("Instalações")])),_:1}),(0,a.bF)(l,{to:"/faturas",class:"navbar-item"},{default:(0,a.k6)((()=>[(0,a.eW)("Faturas")])),_:1}),(0,a.bF)(l,{to:"/my-account",class:"navbar-item"},{default:(0,a.k6)((()=>[(0,a.eW)("Meu Perfil")])),_:1})])])])],2)])]),(0,a.Lk)("section",L,[(0,a.bF)(h)]),y,(0,a.Lk)("div",null,[w,(0,a.Lk)("h1",null,"Análise "+(0,o.v_)(this.ano),1),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.empresas,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.id},(0,o.v_)(e.nome)+": "+(0,o.v_)(e.receita_anual),1)))),128))])])])}var C=t(4373),F={name:"HelloWorld",props:{ano:Number},data(){return{empresas:[]}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchItems(),console.log("fetchItems")},methods:{fetchItems(){C.A.get("http://localhost:8000/api/empresa/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}},_=t(1241);const E=(0,_.A)(F,[["render",O]]);var M=E,j={data(){return{empresas:[]}},methods:{fetchEmpresas(){C.A.get("http://localhost:8000/api/empresa/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}},x={name:"App",mixins:[j],components:{Analise:M},data(){return{}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log(this.empresas)},methods:{}};const A=(0,_.A)(x,[["render",l]]);var T=A,X=t(4570),S=t.n(X);const I=(0,r.Ef)(T);I.use(S()),I.mount("#app")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,o){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],o=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,o,s=r[0],i=r[1],l=r[2],u=0;if(s.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(l)var c=l(t)}for(n&&n(r);u<s.length;u++)o=s[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},r=self["webpackChunkvue"]=self["webpackChunkvue"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(1009)}));r=t.O(r)})();
//# sourceMappingURL=app.c1e9f187.js.map