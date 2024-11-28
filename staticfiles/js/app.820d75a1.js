(function(){"use strict";var e={9223:function(e,n,t){var a=t(5130),r=t(6768),o=t(4232);const s=(0,r.Lk)("option",{disabled:"",value:""},"Please select one",-1),i=["value"];function l(e,n,t,l,u,c){const d=(0,r.g2)("Analise");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>u.empresaSelecionada=e)},[s,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.empresas,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.nome},(0,o.v_)(e.nome),9,i)))),128))],512),[[a.u1,u.empresaSelecionada]]),(0,r.bF)(d,{ano:2022,empresa:u.empresaSelecionada},null,8,["empresa"])])}const u={id:"wrapper"},c={class:"navbar is-success"},d={class:"navbar-brand"},f=(0,r.Lk)("strong",null," C.W. Gestão de Energia Fotovoltaica",-1),p=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),m=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),h=[p,v,m],b={class:"navbar-end"},k={class:"navbar-item"},g={class:"buttons"},L={class:"section"},y=(0,r.Lk)("footer",{class:"footer"},[(0,r.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),w=(0,r.Lk)("h1",null,"Empresas",-1);function C(e,n,t,a,s,i){const l=(0,r.g2)("router-link"),p=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.Lk)("nav",c,[(0,r.Lk)("div",d,[(0,r.bF)(l,{to:"/",class:"navbar-item"},{default:(0,r.k6)((()=>[f])),_:1}),(0,r.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:n[0]||(n[0]=n=>e.showMobileMenu=!e.showMobileMenu)},h)]),(0,r.Lk)("div",b,[(0,r.Lk)("div",{class:(0,o.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,r.Lk)("div",k,[(0,r.Lk)("div",g,[(0,r.Lk)("template",null,[(0,r.bF)(l,{to:"/clientes",class:"navbar-item"},{default:(0,r.k6)((()=>[(0,r.eW)("Instalações")])),_:1}),(0,r.bF)(l,{to:"/faturas",class:"navbar-item"},{default:(0,r.k6)((()=>[(0,r.eW)("Faturas")])),_:1}),(0,r.bF)(l,{to:"/my-account",class:"navbar-item"},{default:(0,r.k6)((()=>[(0,r.eW)("Meu Perfil")])),_:1})])])])],2)])]),(0,r.Lk)("section",L,[(0,r.bF)(p)]),y,(0,r.Lk)("div",null,[w,(0,r.Lk)("h1",null,"Análise "+(0,o.v_)(this.ano),1),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.empresas,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},(0,o.v_)(e.nome)+": "+(0,o.v_)(e.receita_anual),1)))),128))])])])}var E=t(4373),O={data(){return{empresas:[]}},methods:{fetchEmpresas(){E.A.get("http://localhost:8000/api/empresa/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}},_={name:"HelloWorld",mixins:[O],props:{ano:Number,empresa:String},data(){return{empresas:[]}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{}},F=t(1241);const S=(0,F.A)(_,[["render",C]]);var M=S,x={name:"App",mixins:[O],components:{Analise:M},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log(this.empresas)},methods:{}};const j=(0,F.A)(x,[["render",l]]);var A=j,X=t(4570),P=t.n(X);const T=(0,a.Ef)(A);T.use(P()),T.mount("#app")}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,a,r,o){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var r,o,s=a[0],i=a[1],l=a[2],u=0;if(s.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var c=l(t)}for(n&&n(a);u<s.length;u++)o=s[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},a=self["webpackChunkvue"]=self["webpackChunkvue"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(9223)}));a=t.O(a)})();
//# sourceMappingURL=app.820d75a1.js.map