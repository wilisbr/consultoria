(function(){"use strict";var e={9108:function(e,t,n){var r=n(5130),o=n(6768),a=n(4232);const s=(0,o.Lk)("option",{disabled:"",value:""},"Please select one",-1),i=["value"];function l(e,t,n,l,u,c){const f=(0,o.g2)("Analise");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedOption=t)},[s,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.empresas,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.nome},(0,a.v_)(e),9,i)))),128))],512),[[r.u1,e.selectedOption]]),(0,o.bF)(f,{ano:"2022"})])}const u={id:"wrapper"},c={class:"navbar is-success"},f={class:"navbar-brand"},d=(0,o.Lk)("strong",null," C.W. Gestão de Energia Fotovoltaica",-1),h=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),p=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),b=[h,v,p],m={class:"navbar-end"},k={class:"navbar-item"},g={class:"buttons"},L={class:"section"},y=(0,o.Lk)("footer",{class:"footer"},[(0,o.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),w=(0,o.Lk)("h1",null,"Empresas",-1);function O(e,t,n,r,s,i){const l=(0,o.g2)("router-link"),h=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.Lk)("nav",c,[(0,o.Lk)("div",f,[(0,o.bF)(l,{to:"/",class:"navbar-item"},{default:(0,o.k6)((()=>[d])),_:1}),(0,o.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:t[0]||(t[0]=t=>e.showMobileMenu=!e.showMobileMenu)},b)]),(0,o.Lk)("div",m,[(0,o.Lk)("div",{class:(0,a.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,o.Lk)("div",k,[(0,o.Lk)("div",g,[(0,o.Lk)("template",null,[(0,o.bF)(l,{to:"/clientes",class:"navbar-item"},{default:(0,o.k6)((()=>[(0,o.eW)("Instalações")])),_:1}),(0,o.bF)(l,{to:"/faturas",class:"navbar-item"},{default:(0,o.k6)((()=>[(0,o.eW)("Faturas")])),_:1}),(0,o.bF)(l,{to:"/my-account",class:"navbar-item"},{default:(0,o.k6)((()=>[(0,o.eW)("Meu Perfil")])),_:1})])])])],2)])]),(0,o.Lk)("section",L,[(0,o.bF)(h)]),y,(0,o.Lk)("div",null,[w,(0,o.Lk)("h1",null,"Análise "+(0,a.v_)(this.ano),1),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.empresas,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id},(0,a.v_)(e.nome)+": "+(0,a.v_)(e.receita_anual),1)))),128))])])])}var C=n(4373),F={name:"HelloWorld",props:{ano:Number},data(){return{empresas:[]}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchItems(),console.log("fetchItems")},methods:{fetchItems(){C.A.get("http://localhost:8000/api/empresa/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}},_=n(1241);const E=(0,_.A)(F,[["render",O]]);var M=E,j={name:"App",components:{Analise:M},data(){return{empresas:[]}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchItems(),console.log(this.empresas)},methods:{fetchItems(){C.A.get("http://localhost:8000/api/empresa/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}};const A=(0,_.A)(j,[["render",l]]);var I=A,T=n(4570),X=n.n(T);const x=(0,r.Ef)(I);x.use(X()),x.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],i=r[1],l=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(t&&t(r);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkvue"]=self["webpackChunkvue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9108)}));r=n.O(r)})();
//# sourceMappingURL=app.c1da43fd.js.map