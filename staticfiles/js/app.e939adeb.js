(function(){"use strict";var e={5235:function(e,n,r){var t=r(5130),a=r(6768);function o(e,n,r,t,o,s){const i=(0,a.g2)("Analise");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(i)])}var s=r(4232);const i={id:"wrapper"},u=(0,a.Lk)("option",{disabled:"",value:""},"Please select one",-1),c=["value"],l={class:"navbar is-success"},d={class:"navbar-brand"},f=(0,a.Lk)("strong",null," C.W. Gestão de Energia Fotovoltaica",-1),p=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),m=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),h=[p,m,v],b={class:"navbar-end"},k={class:"navbar-item"},g={class:"buttons"},L={class:"section"},E=(0,a.Lk)("footer",{class:"footer"},[(0,a.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),y=(0,a.Lk)("div",null,null,-1);function C(e,n,r,o,p,m){const v=(0,a.g2)("router-link"),C=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>p.idEmpresa=e),onChange:n[1]||(n[1]=(...e)=>m.onSelectChange&&m.onSelectChange(...e))},[u,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(p.empresas,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.id},(0,s.v_)(e.nome),9,c)))),128))],544),[[t.u1,p.idEmpresa]]),(0,a.Lk)("nav",l,[(0,a.Lk)("div",d,[(0,a.bF)(v,{to:"/",class:"navbar-item"},{default:(0,a.k6)((()=>[f])),_:1}),(0,a.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:n[2]||(n[2]=n=>e.showMobileMenu=!e.showMobileMenu)},h)]),(0,a.Lk)("div",b,[(0,a.Lk)("div",{class:(0,s.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,a.Lk)("div",k,[(0,a.Lk)("div",g,[(0,a.bF)(v,{to:{name:"informacoesGerais",params:{id:this.idEmpresa}}},{default:(0,a.k6)((()=>[(0,a.eW)(" Informações ")])),_:1},8,["to"])])])],2)])]),(0,a.Lk)("section",L,[((0,a.uX)(),(0,a.Wv)(C,{key:p.idEmpresa}))]),E,y])}r(4114);var w=r(4373),O={data(){return{empresas:[]}},methods:{fetchEmpresas(e=null){const n=e?`http://localhost:8000/api/empresa/${e}/`:"http://localhost:8000/api/empresa/";w.A.get(n,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}},S={name:"AnaliseEmpresa",mixins:[O],props:{},data(){return{empresas:[],idEmpresa:Number}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{onSelectChange(){this.$router.push({name:"informacoesGerais",params:{id:this.idEmpresa}})}}},x=r(1241);const A=(0,x.A)(S,[["render",C]]);var M=A,_={name:"App",components:{Analise:M},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken"))},methods:{}};const j=(0,x.A)(_,[["render",o]]);var $=j,F=r(4570),G=r.n(F),T=r(973);const X=(0,a.Lk)("p",null," Teste Geral ",-1);function P(e,n,r,t,o,i){return(0,a.uX)(),(0,a.CE)("div",null,[X,(0,a.Lk)("p",null,"User ID: "+(0,s.v_)(e.$route.params.id),1),(0,a.Lk)("p",null,(0,s.v_)(this.empresas),1)])}var I={name:"informacoesGerais",mixins:[O],created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(this.$route.params.id)}};const W=(0,x.A)(I,[["render",P]]);var U=W;const D=[{path:"/informacoesGerais/:id",name:"informacoesGerais",component:U}],K=(0,T.aE)({history:(0,T.LA)(),routes:D});var N=K;const R=(0,t.Ef)($);R.use(G()),R.use(N),R.mount("#app")}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(n,t,a,o){if(!t){var s=1/0;for(l=0;l<e.length;l++){t=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,u=0;u<t.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](t[u])}))?t.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,a,o]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,o,s=t[0],i=t[1],u=t[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var l=u(r)}for(n&&n(t);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},t=self["webpackChunkvue"]=self["webpackChunkvue"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[504],(function(){return r(5235)}));t=r.O(t)})();
//# sourceMappingURL=app.e939adeb.js.map