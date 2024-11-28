(function(){"use strict";var e={5381:function(e,a,t){var s=t(5130),o=t(6768);function r(e,a,t,s,r,n){const i=(0,o.g2)("Analise");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(i)])}var n=t(4232);const i={id:"wrapper"},l=(0,o.Lk)("option",{disabled:"",value:""},"Selecione a empresa",-1),c=["value"],u={class:"navbar is-success"},d={class:"navbar-brand"},p=(0,o.Lk)("strong",null," Gestão e Consultoria",-1),m=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),h=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),b=[m,v,h],k={class:"navbar-end"},f={class:"navbar-item"},L={class:"buttons"},g={class:"section"},_=(0,o.Lk)("footer",{class:"footer"},[(0,o.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),E=(0,o.Lk)("div",null,null,-1);function y(e,a,t,r,m,v){const h=(0,o.g2)("router-link"),y=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.idEmpresa=e),onChange:a[1]||(a[1]=(...e)=>v.onSelectChange&&v.onSelectChange(...e))},[l,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(m.empresas,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,c)))),128))],544),[[s.u1,m.idEmpresa]]),(0,o.Lk)("nav",u,[(0,o.Lk)("div",d,[(0,o.bF)(h,{to:"/",class:"navbar-item"},{default:(0,o.k6)((()=>[p])),_:1}),(0,o.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:a[2]||(a[2]=a=>e.showMobileMenu=!e.showMobileMenu)},b)]),(0,o.Lk)("div",k,[(0,o.Lk)("div",{class:(0,n.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,o.Lk)("div",f,[(0,o.Lk)("div",L,[(0,o.bF)(h,{to:{name:"informacoesGerais",params:{id:this.idEmpresa}}},{default:(0,o.k6)((()=>[(0,o.eW)(" Informações ")])),_:1},8,["to"])])])],2)])]),(0,o.Lk)("section",g,[((0,o.uX)(),(0,o.Wv)(y,{key:m.idEmpresa}))]),_,E])}t(4114);var C=t(4373),q={data(){return{empresas:[]}},methods:{fetchEmpresas(e=null){const a=e?`http://localhost:8000/api/empresa/${e}/`:"http://localhost:8000/api/empresa/";C.A.get(a,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}},x={name:"AnaliseEmpresa",mixins:[q],props:{},data(){return{empresas:[],idEmpresa:Number}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{onSelectChange(){this.$router.push({name:"informacoesGerais",params:{id:this.idEmpresa}})}}},A=t(1241);const S=(0,A.A)(x,[["render",y]]);var w=S,O={name:"App",components:{Analise:w},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken"))},methods:{}};const U=(0,A.A)(O,[["render",r]]);var V=U,J=t(4570),F=t.n(J),$=t(973);const T={class:"container"},j=(0,o.Lk)("h1",{class:"title"},"Dados",-1),M={class:"field"},X=(0,o.Lk)("label",{class:"label"},"Nome",-1),G={class:"control"},P={class:"field"},D=(0,o.Lk)("label",{class:"label"},"Nome do Contato",-1),I={class:"control"},N={class:"field"},Q=(0,o.Lk)("label",{class:"label"},"Tempo de Atividade",-1),R={class:"control"},z={class:"field"},W=(0,o.Lk)("label",{class:"label"},"Quantidade de Sócios",-1),H={class:"control"},K={class:"field"},B=(0,o.Lk)("label",{class:"label"},"Quantidade de Funcionários",-1),Y={class:"control"},Z={class:"field"},ee=(0,o.Lk)("label",{class:"label"},"Ramo de Atividade",-1),ae={class:"control"},te={class:"field"},se=(0,o.Lk)("label",{class:"label"},"Principal Atividade",-1),oe={class:"control"},re={class:"field"},ne=(0,o.Lk)("label",{class:"label"},"Receita Anual",-1),ie={class:"control"},le={class:"field"},ce=(0,o.Lk)("label",{class:"label"},"Total de Investimento",-1),ue={class:"control"},de={class:"field"},pe=(0,o.Lk)("label",{class:"label"},"Histórico da Empresa",-1),me={class:"control"},ve={class:"field"},he=(0,o.Lk)("label",{class:"label"},"Pontos Críticos",-1),be={class:"control"},ke={class:"field"},fe=(0,o.Lk)("label",{class:"label"},"Enquadramento Tributário",-1),Le={class:"control"},ge={class:"field is-grouped"},_e=(0,o.Lk)("div",{class:"control"},[(0,o.Lk)("button",{class:"button is-link",type:"submit"},"Salvar")],-1),Ee={class:"control"},ye={class:"control"};function Ce(e,a,t,r,n,i){return(0,o.uX)(),(0,o.CE)("div",T,[j,n.empresa?((0,o.uX)(),(0,o.CE)("form",{key:0,onSubmit:a[14]||(a[14]=(0,s.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[(0,o.Lk)("div",M,[X,(0,o.Lk)("div",G,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>n.empresa.nome=e),required:""},null,512),[[s.Jo,n.empresa.nome]])])]),(0,o.Lk)("div",P,[D,(0,o.Lk)("div",I,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>n.empresa.nome_contato=e),required:""},null,512),[[s.Jo,n.empresa.nome_contato]])])]),(0,o.Lk)("div",N,[Q,(0,o.Lk)("div",R,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[2]||(a[2]=e=>n.empresa.tempo_atividade=e),required:""},null,512),[[s.Jo,n.empresa.tempo_atividade]])])]),(0,o.Lk)("div",z,[W,(0,o.Lk)("div",H,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[3]||(a[3]=e=>n.empresa.quant_socios=e),required:""},null,512),[[s.Jo,n.empresa.quant_socios]])])]),(0,o.Lk)("div",K,[B,(0,o.Lk)("div",Y,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>n.empresa.quant_funcionarios=e),required:""},null,512),[[s.Jo,n.empresa.quant_funcionarios]])])]),(0,o.Lk)("div",Z,[ee,(0,o.Lk)("div",ae,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[5]||(a[5]=e=>n.empresa.ramo_atividade=e),required:""},null,512),[[s.Jo,n.empresa.ramo_atividade]])])]),(0,o.Lk)("div",te,[se,(0,o.Lk)("div",oe,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>n.empresa.principal_atividade=e),required:""},null,512),[[s.Jo,n.empresa.principal_atividade]])])]),(0,o.Lk)("div",re,[ne,(0,o.Lk)("div",ie,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[7]||(a[7]=e=>n.empresa.receita_anual=e),required:""},null,512),[[s.Jo,n.empresa.receita_anual]])])]),(0,o.Lk)("div",le,[ce,(0,o.Lk)("div",ue,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[8]||(a[8]=e=>n.empresa.total_investimento=e),required:""},null,512),[[s.Jo,n.empresa.total_investimento]])])]),(0,o.Lk)("div",de,[pe,(0,o.Lk)("div",me,[(0,o.bo)((0,o.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[9]||(a[9]=e=>n.empresa.historico_empresa=e)},null,512),[[s.Jo,n.empresa.historico_empresa]])])]),(0,o.Lk)("div",ve,[he,(0,o.Lk)("div",be,[(0,o.bo)((0,o.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[10]||(a[10]=e=>n.empresa.pontos_criticos=e)},null,512),[[s.Jo,n.empresa.pontos_criticos]])])]),(0,o.Lk)("div",ke,[fe,(0,o.Lk)("div",Le,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[11]||(a[11]=e=>n.empresa.enquadramento_tributario=e),required:""},null,512),[[s.Jo,n.empresa.enquadramento_tributario]])])]),(0,o.Lk)("div",ge,[_e,(0,o.Lk)("div",Ee,[(0,o.Lk)("button",{class:"button is-link is-light",type:"button",onClick:a[12]||(a[12]=(...e)=>i.resetForm&&i.resetForm(...e))},"Cancelar")]),(0,o.Lk)("div",ye,[(0,o.Lk)("button",{class:"button is-danger is-light",type:"button",onClick:a[13]||(a[13]=(...e)=>i.handleDelete&&i.handleDelete(...e))},"Excluir")])])],32)):(0,o.Q3)("",!0)])}var qe={name:"informacoesGerais",data(){return{empresa:null}},mixins:[q],created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresa(this.$route.params.id)},methods:{fetchEmpresa(e){C.A.get(`http://localhost:8000/api/empresa/${e}/`).then((e=>{this.empresa=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},handleSubmit(){this.empresa.id?this.updateEmpresa():this.createEmpresa()},createEmpresa(){C.A.post("http://localhost:8000/api/empresa/",this.empresa).then((e=>{this.empresa=e.data,alert("Empresa criada com sucesso!")})).catch((e=>{console.error("Error creating empresa:",e)}))},updateEmpresa(){C.A.put(`http://localhost:8000/api/empresa/${this.empresa.id}/`,this.empresa).then((e=>{this.empresa=e.data,alert("Empresa atualizada com sucesso!")})).catch((e=>{console.error("Error updating empresa:",e)}))},handleDelete(){confirm("Tem certeza que deseja excluir esta empresa?")&&C.A.delete(`http://localhost:8000/api/empresa/${this.empresa.id}/`).then((()=>{this.resetForm(),alert("Empresa excluída com sucesso!")})).catch((e=>{console.error("Error deleting empresa:",e)}))},resetForm(){this.empresa={id:null,nome:"",nome_contato:"",tempo_atividade:"",quant_socios:"",quant_funcionarios:"",ramo_atividade:"",principal_atividade:"",receita_anual:"",total_investimento:"",historico_empresa:"",pontos_criticos:"",enquadramento_tributario:""}}}};const xe=(0,A.A)(qe,[["render",Ce]]);var Ae=xe;const Se=[{path:"/informacoesGerais/:id",name:"informacoesGerais",component:Ae}],we=(0,$.aE)({history:(0,$.LA)(),routes:Se});var Oe=we;const Ue=(0,s.Ef)(V);Ue.use(F()),Ue.use(Oe),Ue.mount("#app")}},a={};function t(s){var o=a[s];if(void 0!==o)return o.exports;var r=a[s]={exports:{}};return e[s].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,s,o,r){if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(i=!1,r<n&&(n=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,o,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var o,r,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var u=l(t)}for(a&&a(s);c<n.length;c++)r=n[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},s=self["webpackChunkvue"]=self["webpackChunkvue"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(5381)}));s=t.O(s)})();
//# sourceMappingURL=app.9636c277.js.map