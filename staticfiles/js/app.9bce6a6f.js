(function(){"use strict";var e={7533:function(e,t,n){var o=n(5130),a=n(6768);function r(e,t,n,o,r,l){const i=(0,a.g2)("Analise"),u=(0,a.g2)("HelloWorld");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i,{ano:"2022"}),(0,a.bF)(u,{msg:"Welcome to Your Vue.js App"})],64)}var l=n(4232);const i={class:"hello"},u=(0,a.Fv)('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function s(e,t,n,o,r,s){return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("h1",null,(0,l.v_)(n.msg),1),u])}var c={name:"HelloWorld",props:{msg:String}},v=n(1241);const d=(0,v.A)(c,[["render",s],["__scopeId","data-v-b9167eee"]]);var h=d;const p=e=>((0,a.Qi)("data-v-533586a1"),e=e(),(0,a.jt)(),e),b={class:"hello"},f=p((()=>(0,a.Lk)("a",{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"},"vue-cli documentation",-1))),g=p((()=>(0,a.Lk)("h1",null,"MyModel List",-1)));function m(e,t,n,o,r,i){return(0,a.uX)(),(0,a.CE)("div",b,[(0,a.Lk)("h1",null,"Análise "+(0,l.v_)(this.ano),1),(0,a.Lk)("p",null,[(0,a.eW)(" Token: "+(0,l.v_)(this.getCookie("csrftoken"))+" ",1),f,(0,a.eW)(". ")]),(0,a.Lk)("p",null,(0,l.v_)(this.empresas),1),g,(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.empresas,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.id},(0,l.v_)(e.name)+": "+(0,l.v_)(e.receita_anual),1)))),128))])])}var k={methods:{getCookie(e){let t=null;if(document.cookie&&""!==document.cookie){const n=document.cookie.split(";");for(let o=0;o<n.length;o++){const a=n[o].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}}return t},criar_headers(){const e=this.getCookie("csrftoken");console.log(e);let t={headers:{"X-CSRFTOKEN":e,Accept:"application/json","Content-Type":"application/json",timeout:1e4,maxContentLength:9999999999998,maxBodyLength:9999999999998}};return t}}},_=n(4373),j={name:"HelloWorld",props:{ano:Number},data(){return{empresas:[]}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchItems(),console.log("fetchItems")},methods:{fetchItems(){_.A.get("http://localhost:8000/api/empresa/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}},mixins:[k]};const y=(0,v.A)(j,[["render",m],["__scopeId","data-v-533586a1"]]);var C=y,w={name:"App",components:{HelloWorld:h,Analise:C}};const O=(0,v.A)(w,[["render",r]]);var L=O,x=n(4570),A=n.n(x);const E=(0,o.Ef)(L);E.use(A()),E.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,r<l&&(l=r));if(i){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,l=o[0],i=o[1],u=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var c=u(n)}for(t&&t(o);s<l.length;s++)r=l[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkvue"]=self["webpackChunkvue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7533)}));o=n.O(o)})();
//# sourceMappingURL=app.9bce6a6f.js.map