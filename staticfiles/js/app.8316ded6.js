(function(){"use strict";var e={9722:function(e,n,r){var t=r(5130),a=r(6768),o=r(4232);const s=(0,a.Lk)("option",{disabled:"",value:""},"Please select one",-1),i=["value"];function u(e,n,r,u,l,c){const f=(0,a.g2)("Analise");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>l.empresaSelecionada=e)},[s,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.empresas,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.id},(0,o.v_)(e.nome),9,i)))),128))],512),[[t.u1,l.empresaSelecionada]]),(0,a.bF)(f,{ano:2022,empresa:l.empresaSelecionada},null,8,["empresa"])])}const l={id:"wrapper"},c={class:"navbar is-success"},f={class:"navbar-brand"},d=(0,a.Lk)("strong",null," C.W. Gestão de Energia Fotovoltaica",-1),p=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),m=(0,a.Lk)("span",{"aria-hidden":"true"},null,-1),h=[p,v,m],b={class:"navbar-end"},k={class:"navbar-item"},g={class:"buttons"},L={class:"section"},y=(0,a.Lk)("footer",{class:"footer"},[(0,a.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),w=(0,a.Lk)("h1",null,"Empresas",-1),C=(0,a.Lk)("h1",null,"Análise ",-1),E=(0,a.Lk)("br",null,null,-1);function O(e,n,r,t,s,i){const u=(0,a.g2)("router-link"),p=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("nav",c,[(0,a.Lk)("div",f,[(0,a.bF)(u,{to:"/",class:"navbar-item"},{default:(0,a.k6)((()=>[d])),_:1}),(0,a.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:n[0]||(n[0]=n=>e.showMobileMenu=!e.showMobileMenu)},h)]),(0,a.Lk)("div",b,[(0,a.Lk)("div",{class:(0,o.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,a.Lk)("div",k,[(0,a.Lk)("div",g,[(0,a.bF)(u,{to:"/informacoesGerais",class:"navbar-item"},{default:(0,a.k6)((()=>[(0,a.eW)("Geral")])),_:1}),(0,a.bF)(u,{to:"/informacoesGerais"},{default:(0,a.k6)((()=>[(0,a.eW)("Go to Target Component")])),_:1})])])],2)])]),(0,a.Lk)("section",L,[(0,a.bF)(p)]),y,(0,a.Lk)("div",null,[w,C,(0,a.Lk)("ul",null,[(0,a.eW)((0,o.v_)(r.empresa)+" ",1),E,(0,a.eW)(" "+(0,o.v_)(r.ano),1)])])])}var S=r(4373),_={data(){return{empresas:[]}},methods:{fetchEmpresas(){S.A.get("http://localhost:8000/api/empresa/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}},x={name:"HelloWorld",mixins:[_],props:{ano:Number,empresa:Number},data(){return{empresas:[]}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{}},A=r(1241);const F=(0,A.A)(x,[["render",O]]);var G=F,M={name:"App",mixins:[_],components:{Analise:G},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas()},methods:{}};const j=(0,A.A)(M,[["render",u]]);var T=j,W=r(4570),X=r.n(W),P=r(1387);function $(e,n,r,t,o,s){return(0,a.uX)(),(0,a.CE)("p",null," Teste Geral ")}var I={name:"informacoesGerais"};const N=(0,A.A)(I,[["render",$]]);var H=N;const K=[{path:"/informacoesGerais",name:"informacoesGerais",component:H}],R=(0,P.aE)({history:(0,P.LA)("/"),routes:K});var U=R;const V=(0,t.Ef)(T);V.use(X(),U),V.mount("#app")}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(n,t,a,o){if(!t){var s=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],o=e[c][2];for(var i=!0,u=0;u<t.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](t[u])}))?t.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var l=a();void 0!==l&&(n=l)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,a,o]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,o,s=t[0],i=t[1],u=t[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var c=u(r)}for(n&&n(t);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},t=self["webpackChunkvue"]=self["webpackChunkvue"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[504],(function(){return r(9722)}));t=r.O(t)})();
//# sourceMappingURL=app.8316ded6.js.map