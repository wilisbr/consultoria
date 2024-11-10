(function(){"use strict";var e={6556:function(e,a,t){var s=t(5130),r=t(6768);function o(e,a,t,s,o,n){const i=(0,r.g2)("Analise");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(i)])}var n=t(4232);const i={id:"wrapper"},l=(0,r.Lk)("option",{disabled:"",value:""},"Selecione a empresa",-1),c=["value"],u={class:"navbar is-success"},d={class:"navbar-brand"},p=(0,r.Lk)("strong",null,"Gestão e Consultoria",-1),m=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),h=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),b=[m,h,v],f={class:"navbar-end"},k={class:"navbar-item"},L={class:"buttons"},E={class:"section"},_=(0,r.Lk)("footer",{class:"footer"},[(0,r.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),g=(0,r.Lk)("div",null,null,-1);function y(e,a,t,o,m,h){const v=(0,r.g2)("router-link"),y=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.idEmpresa=e)},[l,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(m.empresas,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,c)))),128))],512),[[s.u1,m.idEmpresa]]),(0,r.Lk)("nav",u,[(0,r.Lk)("div",d,[(0,r.bF)(v,{to:"/",class:"navbar-item"},{default:(0,r.k6)((()=>[p])),_:1}),(0,r.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:a[1]||(a[1]=a=>e.showMobileMenu=!e.showMobileMenu)},b)]),(0,r.Lk)("div",f,[(0,r.Lk)("div",{class:(0,n.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,r.Lk)("div",k,[(0,r.Lk)("div",L,[(0,r.bF)(v,{to:{name:"informacoesGerais",params:{id:this.idEmpresa}}},{default:(0,r.k6)((()=>[(0,r.eW)(" Informações ")])),_:1},8,["to"]),(0,r.bF)(v,{to:{name:"lancamentos",params:{id:this.idEmpresa}}},{default:(0,r.k6)((()=>[(0,r.eW)(" Lançamentos ")])),_:1},8,["to"])])])],2)])]),(0,r.Lk)("section",E,[((0,r.uX)(),(0,r.Wv)(y,{key:m.idEmpresa,onEmpresasAlteradas:e.fetchEmpresas},null,8,["onEmpresasAlteradas"]))]),_,g])}t(4114);var q=t(4373),C={data(){return{empresas:[],enquadramentosTributarios:[]}},methods:{async fetchEmpresas(e=null){const a=e?`http://localhost:8000/api/empresa/${e}/`:"http://localhost:8000/api/empresa/";await q.A.get(a,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data,console.log("As empresas foram lidas do banco de dados"),console.log(this.empresas)})).catch((e=>{console.error("There was an error fetching the items:",e)}))},fetchEnquadramentosTributarios(){q.A.get("http://localhost:8000/api/enquadramento_tributario/").then((e=>{this.enquadramentosTributarios=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))}}},A={name:"AnaliseEmpresa",mixins:[C],props:{},data(){return{empresas:[],idEmpresa:Number}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{},watch:{idEmpresa(e,a){console.log(e),console.log(a),e!==a&&this.$router.push({name:"lancamentos",params:{id:e}})}}},x=t(1241);const w=(0,x.A)(A,[["render",y]]);var F=w,$={name:"App",components:{Analise:F},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken"))},methods:{}};const T=(0,x.A)($,[["render",o]]);var S=T,D=t(4570),O=t.n(D),U=t(973);const V={class:"container"},R=(0,r.Lk)("h1",{class:"title"},"Dados",-1),J={class:"field"},X=(0,r.Lk)("label",{class:"label"},"Nome",-1),j={class:"control"},M={class:"field"},P=(0,r.Lk)("label",{class:"label"},"Nome do Contato",-1),G={class:"control"},I={class:"field"},N=(0,r.Lk)("label",{class:"label"},"Tempo de Atividade",-1),W={class:"control"},Q={class:"field"},z=(0,r.Lk)("label",{class:"label"},"Quantidade de Sócios",-1),K={class:"control"},H={class:"field"},B=(0,r.Lk)("label",{class:"label"},"Quantidade de Funcionários",-1),Y={class:"control"},Z={class:"field"},ee=(0,r.Lk)("label",{class:"label"},"Ramo de Atividade",-1),ae={class:"control"},te={class:"field"},se=(0,r.Lk)("label",{class:"label"},"Principal Atividade",-1),re={class:"control"},oe={class:"field"},ne=(0,r.Lk)("label",{class:"label"},"Receita Anual",-1),ie={class:"control"},le={class:"field"},ce=(0,r.Lk)("label",{class:"label"},"Total de Investimento",-1),ue={class:"control"},de={class:"field"},pe=(0,r.Lk)("label",{class:"label"},"Histórico da Empresa",-1),me={class:"control"},he={class:"field"},ve=(0,r.Lk)("label",{class:"label"},"Pontos Críticos",-1),be={class:"control"},fe={class:"field"},ke=(0,r.Lk)("label",{class:"label"},"Enquadramento Tributário",-1),Le={class:"control"},Ee=["value"],_e={class:"field is-grouped"},ge=(0,r.Lk)("div",{class:"control"},[(0,r.Lk)("button",{class:"button is-link",type:"submit"},"Salvar")],-1),ye={class:"control"},qe={class:"control"};function Ce(e,a,t,o,i,l){return(0,r.uX)(),(0,r.CE)("div",V,[(0,r.Lk)("button",{class:"button is-primary",onClick:a[0]||(a[0]=(...e)=>l.prepareForCreate&&l.prepareForCreate(...e))},"Criar Nova Empresa"),R,i.empresa?((0,r.uX)(),(0,r.CE)("form",{key:0,onSubmit:a[15]||(a[15]=(0,s.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[(0,r.Lk)("div",J,[X,(0,r.Lk)("div",j,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>i.empresa.nome=e),required:""},null,512),[[s.Jo,i.empresa.nome]])])]),(0,r.Lk)("div",M,[P,(0,r.Lk)("div",G,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>i.empresa.nome_contato=e),required:""},null,512),[[s.Jo,i.empresa.nome_contato]])])]),(0,r.Lk)("div",I,[N,(0,r.Lk)("div",W,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[3]||(a[3]=e=>i.empresa.tempo_atividade=e),required:""},null,512),[[s.Jo,i.empresa.tempo_atividade]])])]),(0,r.Lk)("div",Q,[z,(0,r.Lk)("div",K,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>i.empresa.quant_socios=e),required:""},null,512),[[s.Jo,i.empresa.quant_socios]])])]),(0,r.Lk)("div",H,[B,(0,r.Lk)("div",Y,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[5]||(a[5]=e=>i.empresa.quant_funcionarios=e),required:""},null,512),[[s.Jo,i.empresa.quant_funcionarios]])])]),(0,r.Lk)("div",Z,[ee,(0,r.Lk)("div",ae,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>i.empresa.ramo_atividade=e),required:""},null,512),[[s.Jo,i.empresa.ramo_atividade]])])]),(0,r.Lk)("div",te,[se,(0,r.Lk)("div",re,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[7]||(a[7]=e=>i.empresa.principal_atividade=e),required:""},null,512),[[s.Jo,i.empresa.principal_atividade]])])]),(0,r.Lk)("div",oe,[ne,(0,r.Lk)("div",ie,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[8]||(a[8]=e=>i.empresa.receita_anual=e),required:""},null,512),[[s.Jo,i.empresa.receita_anual]])])]),(0,r.Lk)("div",le,[ce,(0,r.Lk)("div",ue,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[9]||(a[9]=e=>i.empresa.total_investimento=e),required:""},null,512),[[s.Jo,i.empresa.total_investimento]])])]),(0,r.Lk)("div",de,[pe,(0,r.Lk)("div",me,[(0,r.bo)((0,r.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[10]||(a[10]=e=>i.empresa.historico_empresa=e)},null,512),[[s.Jo,i.empresa.historico_empresa]])])]),(0,r.Lk)("div",he,[ve,(0,r.Lk)("div",be,[(0,r.bo)((0,r.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[11]||(a[11]=e=>i.empresa.pontos_criticos=e)},null,512),[[s.Jo,i.empresa.pontos_criticos]])])]),(0,r.Lk)("div",fe,[ke,(0,r.Lk)("div",Le,[(0,r.bo)((0,r.Lk)("select",{class:"input","onUpdate:modelValue":a[12]||(a[12]=e=>i.empresa.enquadramento_tributario=e),required:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.enquadramentosTributarios,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,Ee)))),128))],512),[[s.u1,i.empresa.enquadramento_tributario]])])]),(0,r.Lk)("div",_e,[ge,(0,r.Lk)("div",ye,[(0,r.Lk)("button",{class:"button is-link is-light",type:"button",onClick:a[13]||(a[13]=(...e)=>l.resetForm&&l.resetForm(...e))},"Cancelar")]),(0,r.Lk)("div",qe,[(0,r.Lk)("button",{class:"button is-danger is-light",type:"button",onClick:a[14]||(a[14]=(...e)=>l.handleDelete&&l.handleDelete(...e))},"Excluir")])])],32)):(0,r.Q3)("",!0)])}var Ae={name:"informacoesGerais",data(){return{empresa:null}},computed:{textEnquadramento(){return"simples"}},mixins:[C,C],watch:{"$route.params.id"(e){console.log("Route parameter changed:",e),this.fetchEmpresa(e)}},created(){this.fetchEmpresa(this.$route.params.id),this.fetchEnquadramentosTributarios()},methods:{async fetchEmpresa(e){await q.A.get(`http://localhost:8000/api/empresa/${e}/`).then((e=>{this.empresa=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},handleSubmit(){this.empresa.id?this.updateEmpresa():this.createEmpresa()},createEmpresa(){q.A.post("http://localhost:8000/api/empresa/",this.empresa).then((e=>{this.empresa=e.data,alert("Empresa criada com sucesso!"),this.$emit("empresasAlteradas")})).catch((e=>{console.error("Error creating empresa:",e)}))},updateEmpresa(){q.A.put(`http://localhost:8000/api/empresa/${this.empresa.id}/`,this.empresa).then((e=>{this.empresa=e.data,alert("Empresa atualizada com sucesso!")})).catch((e=>{console.error("Error updating empresa:",e)}))},handleDelete(){confirm("Tem certeza que deseja excluir esta empresa?")&&q.A.delete(`http://localhost:8000/api/empresa/${this.empresa.id}/`).then((()=>{this.resetForm(),alert("Empresa excluída com sucesso!"),this.$emit("empresasAlteradas")})).catch((e=>{console.error("Error deleting empresa:",e)}))},resetForm(){this.empresa={id:null,nome:"",nome_contato:"",tempo_atividade:"",quant_socios:"",quant_funcionarios:"",ramo_atividade:"",principal_atividade:"",receita_anual:"",total_investimento:"",historico_empresa:"",pontos_criticos:"",enquadramento_tributario:""}},prepareForCreate(){this.resetForm()}}};const xe=(0,x.A)(Ae,[["render",Ce]]);var we=xe;const Fe={class:"container"},$e=(0,r.Lk)("p",null,"DREs",-1);function Te(e,a,t,s,o,i){return(0,r.uX)(),(0,r.CE)("div",Fe,[$e,(0,r.eW)(" "+(0,n.v_)(o.DREs),1)])}var Se={name:"lancamentosCrud",data(){return{DREs:null}},created(){this.fetch_DREs(this.$route.params.id)},watch:{"$route.params.id"(e){this.fetch_DREs(e)}},methods:{async fetch_DREs(e){await q.A.get(`http://localhost:8000/api/dre_mensal/?empresa__id=${e}`).then((e=>{this.DREs=e.data,console.log(this.DREs)})).catch((e=>{console.error("Error fetching empresa:",e)}))}}};const De=(0,x.A)(Se,[["render",Te]]);var Oe=De;const Ue=[{path:"/informacoesGerais/:id",name:"informacoesGerais",component:we},{path:"/lancamentos/:id",name:"lancamentos",component:Oe}],Ve=(0,U.aE)({history:(0,U.LA)(),routes:Ue});var Re=Ve;const Je=(0,s.Ef)(S);Je.use(O()),Je.use(Re),Je.mount("#app")}},a={};function t(s){var r=a[s];if(void 0!==r)return r.exports;var o=a[s]={exports:{}};return e[s].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,s,r,o){if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(a=c)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,r,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var r,o,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var u=l(t)}for(a&&a(s);c<n.length;c++)o=n[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},s=self["webpackChunkvue"]=self["webpackChunkvue"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(6556)}));s=t.O(s)})();
//# sourceMappingURL=app.8d103276.js.map