(function(){"use strict";var e={9758:function(e,a,t){var r=t(5130),s=t(6768);function o(e,a,t,r,o,n){const i=(0,s.g2)("Analise");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(i)])}var n=t(4232);const i={id:"wrapper"},l=(0,s.Lk)("option",{disabled:"",value:""},"Selecione a empresa",-1),c=["value"],u={class:"navbar is-success"},d={class:"navbar-brand"},p=(0,s.Lk)("strong",null,"Gestão e Consultoria",-1),m=(0,s.Lk)("span",{"aria-hidden":"true"},null,-1),h=(0,s.Lk)("span",{"aria-hidden":"true"},null,-1),b=(0,s.Lk)("span",{"aria-hidden":"true"},null,-1),v=[m,h,b],k={class:"navbar-end"},f={class:"navbar-item"},L={class:"buttons"},_={class:"section"},E=(0,s.Lk)("footer",{class:"footer"},[(0,s.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),g=(0,s.Lk)("div",null,null,-1);function y(e,a,t,o,m,h){const b=(0,s.g2)("router-link"),y=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.idEmpresa=e)},[l,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(m.empresas,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,c)))),128))],512),[[r.u1,m.idEmpresa]]),(0,s.Lk)("nav",u,[(0,s.Lk)("div",d,[(0,s.bF)(b,{to:"/",class:"navbar-item"},{default:(0,s.k6)((()=>[p])),_:1}),(0,s.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:a[1]||(a[1]=a=>e.showMobileMenu=!e.showMobileMenu)},v)]),(0,s.Lk)("div",k,[(0,s.Lk)("div",{class:(0,n.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,s.Lk)("div",f,[(0,s.Lk)("div",L,[(0,s.bF)(b,{to:{name:"informacoesGerais",params:{id:this.idEmpresa}}},{default:(0,s.k6)((()=>[(0,s.eW)(" Informações ")])),_:1},8,["to"])])])],2)])]),(0,s.Lk)("section",_,[((0,s.uX)(),(0,s.Wv)(y,{key:m.idEmpresa}))]),E,g])}t(4114);var q=t(4373),C={data(){return{empresas:[],enquadramentosTributarios:[]}},methods:{fetchEmpresas(e=null){const a=e?`http://localhost:8000/api/empresa/${e}/`:"http://localhost:8000/api/empresa/";q.A.get(a,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))},fetchEnquadramentosTributarios(){q.A.get("http://localhost:8000/api/enquadramento_tributario/").then((e=>{this.enquadramentosTributarios=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))}}},x={name:"AnaliseEmpresa",mixins:[C],props:{},data(){return{empresas:[],idEmpresa:Number}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{onSelectChange(){this.$router.push({name:"informacoesGerais",params:{id:this.idEmpresa}})}},watch:{idEmpresa(e,a){e!==a&&this.$router.push({name:"informacoesGerais",params:{id:e}})}}},A=t(1241);const w=(0,A.A)(x,[["render",y]]);var S=w,F={name:"App",components:{Analise:S},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken"))},methods:{}};const T=(0,A.A)(F,[["render",o]]);var O=T,U=t(4570),V=t.n(U),J=t(973);const $={class:"container"},X=(0,s.Lk)("h1",{class:"title"},"Dados",-1),j={class:"field"},M=(0,s.Lk)("label",{class:"label"},"Nome",-1),G={class:"control"},P={class:"field"},D=(0,s.Lk)("label",{class:"label"},"Nome do Contato",-1),I={class:"control"},N={class:"field"},Q=(0,s.Lk)("label",{class:"label"},"Tempo de Atividade",-1),R={class:"control"},W={class:"field"},z=(0,s.Lk)("label",{class:"label"},"Quantidade de Sócios",-1),H={class:"control"},K={class:"field"},B=(0,s.Lk)("label",{class:"label"},"Quantidade de Funcionários",-1),Y={class:"control"},Z={class:"field"},ee=(0,s.Lk)("label",{class:"label"},"Ramo de Atividade",-1),ae={class:"control"},te={class:"field"},re=(0,s.Lk)("label",{class:"label"},"Principal Atividade",-1),se={class:"control"},oe={class:"field"},ne=(0,s.Lk)("label",{class:"label"},"Receita Anual",-1),ie={class:"control"},le={class:"field"},ce=(0,s.Lk)("label",{class:"label"},"Total de Investimento",-1),ue={class:"control"},de={class:"field"},pe=(0,s.Lk)("label",{class:"label"},"Histórico da Empresa",-1),me={class:"control"},he={class:"field"},be=(0,s.Lk)("label",{class:"label"},"Pontos Críticos",-1),ve={class:"control"},ke={class:"field"},fe=(0,s.Lk)("label",{class:"label"},"Enquadramento Tributário",-1),Le={class:"control"},_e={class:"translated"},Ee={key:0},ge={key:1},ye={class:"field is-grouped"},qe=(0,s.Lk)("div",{class:"control"},[(0,s.Lk)("button",{class:"button is-link",type:"submit"},"Salvar")],-1),Ce={class:"control"},xe={class:"control"};function Ae(e,a,t,o,i,l){return(0,s.uX)(),(0,s.CE)("div",$,[(0,s.Lk)("button",{class:"button is-primary",onClick:a[0]||(a[0]=(...e)=>l.prepareForCreate&&l.prepareForCreate(...e))},"Criar Nova Empresa"),X,i.empresa?((0,s.uX)(),(0,s.CE)("form",{key:0,onSubmit:a[15]||(a[15]=(0,r.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[(0,s.Lk)("div",j,[M,(0,s.Lk)("div",G,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>i.empresa.nome=e),required:""},null,512),[[r.Jo,i.empresa.nome]])])]),(0,s.Lk)("div",P,[D,(0,s.Lk)("div",I,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>i.empresa.nome_contato=e),required:""},null,512),[[r.Jo,i.empresa.nome_contato]])])]),(0,s.Lk)("div",N,[Q,(0,s.Lk)("div",R,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[3]||(a[3]=e=>i.empresa.tempo_atividade=e),required:""},null,512),[[r.Jo,i.empresa.tempo_atividade]])])]),(0,s.Lk)("div",W,[z,(0,s.Lk)("div",H,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>i.empresa.quant_socios=e),required:""},null,512),[[r.Jo,i.empresa.quant_socios]])])]),(0,s.Lk)("div",K,[B,(0,s.Lk)("div",Y,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[5]||(a[5]=e=>i.empresa.quant_funcionarios=e),required:""},null,512),[[r.Jo,i.empresa.quant_funcionarios]])])]),(0,s.Lk)("div",Z,[ee,(0,s.Lk)("div",ae,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>i.empresa.ramo_atividade=e),required:""},null,512),[[r.Jo,i.empresa.ramo_atividade]])])]),(0,s.Lk)("div",te,[re,(0,s.Lk)("div",se,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[7]||(a[7]=e=>i.empresa.principal_atividade=e),required:""},null,512),[[r.Jo,i.empresa.principal_atividade]])])]),(0,s.Lk)("div",oe,[ne,(0,s.Lk)("div",ie,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[8]||(a[8]=e=>i.empresa.receita_anual=e),required:""},null,512),[[r.Jo,i.empresa.receita_anual]])])]),(0,s.Lk)("div",le,[ce,(0,s.Lk)("div",ue,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[9]||(a[9]=e=>i.empresa.total_investimento=e),required:""},null,512),[[r.Jo,i.empresa.total_investimento]])])]),(0,s.Lk)("div",de,[pe,(0,s.Lk)("div",me,[(0,s.bo)((0,s.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[10]||(a[10]=e=>i.empresa.historico_empresa=e)},null,512),[[r.Jo,i.empresa.historico_empresa]])])]),(0,s.Lk)("div",he,[be,(0,s.Lk)("div",ve,[(0,s.bo)((0,s.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[11]||(a[11]=e=>i.empresa.pontos_criticos=e)},null,512),[[r.Jo,i.empresa.pontos_criticos]])])]),(0,s.Lk)("div",ke,[fe,(0,s.Lk)("div",Le,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[12]||(a[12]=e=>i.empresa.enquadramento_tributario=e),required:""},null,512),[[r.Jo,i.empresa.enquadramento_tributario]])]),(0,s.Lk)("div",_e,[1==i.empresa.enquadramento_tributario?((0,s.uX)(),(0,s.CE)("span",Ee,"Simples")):2==i.empresa.enquadramento_tributario?((0,s.uX)(),(0,s.CE)("span",ge,"Other")):(0,s.Q3)("",!0)])]),(0,s.Lk)("div",ye,[qe,(0,s.Lk)("div",Ce,[(0,s.Lk)("button",{class:"button is-link is-light",type:"button",onClick:a[13]||(a[13]=(...e)=>l.resetForm&&l.resetForm(...e))},"Cancelar")]),(0,s.Lk)("div",xe,[(0,s.Lk)("button",{class:"button is-danger is-light",type:"button",onClick:a[14]||(a[14]=(...e)=>l.handleDelete&&l.handleDelete(...e))},"Excluir")])])],32)):(0,s.Q3)("",!0),(0,s.eW)(" "+(0,n.v_)(e.enquadramentosTributarios),1)])}var we={name:"informacoesGerais",data(){return{empresa:null}},computed:{textEnquadramento(){return"simples"}},mixins:[C,C],watch:{"$route.params.id"(e){console.log("Route parameter changed:",e),this.fetchEmpresa(e)}},created(){this.fetchEmpresa(this.$route.params.id),this.fetchEnquadramentosTributarios()},methods:{fetchEmpresa(e){q.A.get(`http://localhost:8000/api/empresa/${e}/`).then((e=>{this.empresa=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},handleSubmit(){this.empresa.id?this.updateEmpresa():this.createEmpresa()},createEmpresa(){q.A.post("http://localhost:8000/api/empresa/",this.empresa).then((e=>{this.empresa=e.data,alert("Empresa criada com sucesso!")})).catch((e=>{console.error("Error creating empresa:",e)}))},updateEmpresa(){q.A.put(`http://localhost:8000/api/empresa/${this.empresa.id}/`,this.empresa).then((e=>{this.empresa=e.data,alert("Empresa atualizada com sucesso!")})).catch((e=>{console.error("Error updating empresa:",e)}))},handleDelete(){confirm("Tem certeza que deseja excluir esta empresa?")&&q.A.delete(`http://localhost:8000/api/empresa/${this.empresa.id}/`).then((()=>{this.resetForm(),alert("Empresa excluída com sucesso!")})).catch((e=>{console.error("Error deleting empresa:",e)}))},resetForm(){this.empresa={id:null,nome:"",nome_contato:"",tempo_atividade:"",quant_socios:"",quant_funcionarios:"",ramo_atividade:"",principal_atividade:"",receita_anual:"",total_investimento:"",historico_empresa:"",pontos_criticos:"",enquadramento_tributario:""}},prepareForCreate(){this.resetForm()}}};const Se=(0,A.A)(we,[["render",Ae]]);var Fe=Se;const Te=[{path:"/informacoesGerais/:id",name:"informacoesGerais",component:Fe}],Oe=(0,J.aE)({history:(0,J.LA)(),routes:Te});var Ue=Oe;const Ve=(0,r.Ef)(O);Ve.use(V()),Ve.use(Ue),Ve.mount("#app")}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var o=a[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,r,s,o){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,s,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,r){var s,o,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(l)var u=l(t)}for(a&&a(r);c<n.length;c++)o=n[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},r=self["webpackChunkvue"]=self["webpackChunkvue"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(9758)}));r=t.O(r)})();
//# sourceMappingURL=app.66967fc9.js.map