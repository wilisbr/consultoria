(function(){"use strict";var e={4928:function(e,a,t){var s=t(5130),o=t(6768);function r(e,a,t,s,r,n){const i=(0,o.g2)("Analise");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(i)])}var n=t(4232);const i={id:"wrapper"},l=(0,o.Lk)("option",{disabled:"",value:""},"Selecione a empresa",-1),c=["value"],u={class:"navbar is-success"},d={class:"navbar-brand"},p=(0,o.Lk)("strong",null,"Gestão e Consultoria",-1),m=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),h=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),b=[m,h,v],k={class:"navbar-end"},f={key:0,class:"navbar-item"},L={class:"buttons"},E={class:"section"},_=(0,o.Lk)("footer",{class:"footer"},[(0,o.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),g=(0,o.Lk)("div",null,null,-1);function y(e,a,t,r,m,h){const v=(0,o.g2)("router-link"),y=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.idEmpresa=e)},[l,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(m.empresas,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,c)))),128))],512),[[s.u1,m.idEmpresa]]),(0,o.Lk)("nav",u,[(0,o.Lk)("div",d,[(0,o.bF)(v,{to:"/",class:"navbar-item"},{default:(0,o.k6)((()=>[p])),_:1}),(0,o.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:a[1]||(a[1]=a=>e.showMobileMenu=!e.showMobileMenu)},b)]),(0,o.Lk)("div",k,[(0,o.Lk)("div",{class:(0,n.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[m.idEmpresa?((0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",L,[(0,o.bF)(v,{to:{name:"informacoesGerais",params:{id:this.idEmpresa}}},{default:(0,o.k6)((()=>[(0,o.eW)(" Informações ")])),_:1},8,["to"]),(0,o.bF)(v,{to:{name:"lancamentos",params:{id:this.idEmpresa}}},{default:(0,o.k6)((()=>[(0,o.eW)(" Lançamentos ")])),_:1},8,["to"])])])):(0,o.Q3)("",!0)],2)])]),(0,o.Lk)("section",E,[((0,o.uX)(),(0,o.Wv)(y,{key:m.idEmpresa,onEmpresasAlteradas:e.fetchEmpresas},null,8,["onEmpresasAlteradas"]))]),_,g])}t(4114);var C=t(4373),q={data(){return{empresas:[],enquadramentosTributarios:[]}},methods:{async fetchEmpresas(e=null){const a=e?`http://localhost:8000/api/empresa/${e}/`:"http://localhost:8000/api/empresa/";await C.A.get(a,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data,console.log("As empresas foram lidas do banco de dados"),console.log(this.empresas)})).catch((e=>{console.error("There was an error fetching the items:",e)}))},fetchEnquadramentosTributarios(){C.A.get("http://localhost:8000/api/enquadramento_tributario/").then((e=>{this.enquadramentosTributarios=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))}}},A={name:"AnaliseEmpresa",mixins:[q],props:{},data(){return{empresas:[],idEmpresa:0}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{},watch:{idEmpresa(e,a){console.log(e),console.log(a),e!==a&&this.$router.push({name:"lancamentos",params:{id:e}})}}},w=t(1241);const x=(0,w.A)(A,[["render",y]]);var D=x,R={name:"App",components:{Analise:D},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken"))},methods:{}};const F=(0,w.A)(R,[["render",r]]);var $=F,S=t(4570),T=t.n(S),U=t(973);const V={class:"container"},X=(0,o.Lk)("h1",{class:"title"},"Dados",-1),M={class:"field"},O=(0,o.Lk)("label",{class:"label"},"Nome",-1),J={class:"control"},j={class:"field"},I=(0,o.Lk)("label",{class:"label"},"Nome do Contato",-1),P={class:"control"},G={class:"field"},W=(0,o.Lk)("label",{class:"label"},"Tempo de Atividade",-1),Q={class:"control"},K={class:"field"},N=(0,o.Lk)("label",{class:"label"},"Quantidade de Sócios",-1),z={class:"control"},H={class:"field"},B=(0,o.Lk)("label",{class:"label"},"Quantidade de Funcionários",-1),Y={class:"control"},Z={class:"field"},ee=(0,o.Lk)("label",{class:"label"},"Ramo de Atividade",-1),ae={class:"control"},te={class:"field"},se=(0,o.Lk)("label",{class:"label"},"Principal Atividade",-1),oe={class:"control"},re={class:"field"},ne=(0,o.Lk)("label",{class:"label"},"Receita Anual",-1),ie={class:"control"},le={class:"field"},ce=(0,o.Lk)("label",{class:"label"},"Total de Investimento",-1),ue={class:"control"},de={class:"field"},pe=(0,o.Lk)("label",{class:"label"},"Histórico da Empresa",-1),me={class:"control"},he={class:"field"},ve=(0,o.Lk)("label",{class:"label"},"Pontos Críticos",-1),be={class:"control"},ke={class:"field"},fe=(0,o.Lk)("label",{class:"label"},"Enquadramento Tributário",-1),Le={class:"control"},Ee=["value"],_e={class:"field is-grouped"},ge=(0,o.Lk)("div",{class:"control"},[(0,o.Lk)("button",{class:"button is-link",type:"submit"},"Salvar")],-1),ye={class:"control"},Ce={class:"control"};function qe(e,a,t,r,i,l){return(0,o.uX)(),(0,o.CE)("div",V,[(0,o.Lk)("button",{class:"button is-primary",onClick:a[0]||(a[0]=(...e)=>l.prepareForCreate&&l.prepareForCreate(...e))},"Criar Nova Empresa"),X,i.empresa?((0,o.uX)(),(0,o.CE)("form",{key:0,onSubmit:a[15]||(a[15]=(0,s.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[(0,o.Lk)("div",M,[O,(0,o.Lk)("div",J,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>i.empresa.nome=e),required:""},null,512),[[s.Jo,i.empresa.nome]])])]),(0,o.Lk)("div",j,[I,(0,o.Lk)("div",P,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>i.empresa.nome_contato=e),required:""},null,512),[[s.Jo,i.empresa.nome_contato]])])]),(0,o.Lk)("div",G,[W,(0,o.Lk)("div",Q,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[3]||(a[3]=e=>i.empresa.tempo_atividade=e),required:""},null,512),[[s.Jo,i.empresa.tempo_atividade]])])]),(0,o.Lk)("div",K,[N,(0,o.Lk)("div",z,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>i.empresa.quant_socios=e),required:""},null,512),[[s.Jo,i.empresa.quant_socios]])])]),(0,o.Lk)("div",H,[B,(0,o.Lk)("div",Y,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[5]||(a[5]=e=>i.empresa.quant_funcionarios=e),required:""},null,512),[[s.Jo,i.empresa.quant_funcionarios]])])]),(0,o.Lk)("div",Z,[ee,(0,o.Lk)("div",ae,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>i.empresa.ramo_atividade=e),required:""},null,512),[[s.Jo,i.empresa.ramo_atividade]])])]),(0,o.Lk)("div",te,[se,(0,o.Lk)("div",oe,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[7]||(a[7]=e=>i.empresa.principal_atividade=e),required:""},null,512),[[s.Jo,i.empresa.principal_atividade]])])]),(0,o.Lk)("div",re,[ne,(0,o.Lk)("div",ie,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[8]||(a[8]=e=>i.empresa.receita_anual=e),required:""},null,512),[[s.Jo,i.empresa.receita_anual]])])]),(0,o.Lk)("div",le,[ce,(0,o.Lk)("div",ue,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[9]||(a[9]=e=>i.empresa.total_investimento=e),required:""},null,512),[[s.Jo,i.empresa.total_investimento]])])]),(0,o.Lk)("div",de,[pe,(0,o.Lk)("div",me,[(0,o.bo)((0,o.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[10]||(a[10]=e=>i.empresa.historico_empresa=e)},null,512),[[s.Jo,i.empresa.historico_empresa]])])]),(0,o.Lk)("div",he,[ve,(0,o.Lk)("div",be,[(0,o.bo)((0,o.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[11]||(a[11]=e=>i.empresa.pontos_criticos=e)},null,512),[[s.Jo,i.empresa.pontos_criticos]])])]),(0,o.Lk)("div",ke,[fe,(0,o.Lk)("div",Le,[(0,o.bo)((0,o.Lk)("select",{class:"input","onUpdate:modelValue":a[12]||(a[12]=e=>i.empresa.enquadramento_tributario=e),required:""},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.enquadramentosTributarios,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,Ee)))),128))],512),[[s.u1,i.empresa.enquadramento_tributario]])])]),(0,o.Lk)("div",_e,[ge,(0,o.Lk)("div",ye,[(0,o.Lk)("button",{class:"button is-link is-light",type:"button",onClick:a[13]||(a[13]=(...e)=>l.resetForm&&l.resetForm(...e))},"Cancelar")]),(0,o.Lk)("div",Ce,[(0,o.Lk)("button",{class:"button is-danger is-light",type:"button",onClick:a[14]||(a[14]=(...e)=>l.handleDelete&&l.handleDelete(...e))},"Excluir")])])],32)):(0,o.Q3)("",!0)])}var Ae={name:"informacoesGerais",data(){return{empresa:null}},computed:{textEnquadramento(){return"simples"}},mixins:[q,q],watch:{"$route.params.id"(e){console.log("Route parameter changed:",e),this.fetchEmpresa(e)}},created(){this.fetchEmpresa(this.$route.params.id),this.fetchEnquadramentosTributarios()},methods:{async fetchEmpresa(e){await C.A.get(`http://localhost:8000/api/empresa/${e}/`).then((e=>{this.empresa=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},handleSubmit(){this.empresa.id?this.updateEmpresa():this.createEmpresa()},createEmpresa(){C.A.post("http://localhost:8000/api/empresa/",this.empresa).then((e=>{this.empresa=e.data,alert("Empresa criada com sucesso!"),this.$emit("empresasAlteradas")})).catch((e=>{console.error("Error creating empresa:",e)}))},updateEmpresa(){C.A.put(`http://localhost:8000/api/empresa/${this.empresa.id}/`,this.empresa).then((e=>{this.empresa=e.data,alert("Empresa atualizada com sucesso!")})).catch((e=>{console.error("Error updating empresa:",e)}))},handleDelete(){confirm("Tem certeza que deseja excluir esta empresa?")&&C.A.delete(`http://localhost:8000/api/empresa/${this.empresa.id}/`).then((()=>{this.resetForm(),alert("Empresa excluída com sucesso!"),this.$emit("empresasAlteradas")})).catch((e=>{console.error("Error deleting empresa:",e)}))},resetForm(){this.empresa={id:null,nome:"",nome_contato:"",tempo_atividade:"",quant_socios:"",quant_funcionarios:"",ramo_atividade:"",principal_atividade:"",receita_anual:"",total_investimento:"",historico_empresa:"",pontos_criticos:"",enquadramento_tributario:""}},prepareForCreate(){this.resetForm()}}};const we=(0,w.A)(Ae,[["render",qe]]);var xe=we;const De={class:"container"},Re=(0,o.Lk)("option",{disabled:"",value:""},"Selecione a data base",-1),Fe=["value"],$e=(0,o.Lk)("p",null,"DREs",-1),Se=(0,o.Lk)("br",null,null,-1);function Te(e,a,t,r,i,l){return(0,o.uX)(),(0,o.CE)("div",De,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.idDREMensal=e)},[Re,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.DREs,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.ano)+"-"+(0,n.v_)(e.mes),9,Fe)))),128))],512),[[s.u1,i.idDREMensal]]),$e,(0,o.eW)(" "+(0,n.v_)(i.DREs)+" ",1),Se,(0,o.eW)(" "+(0,n.v_)(i.lancamentos),1)])}var Ue={name:"lancamentosCrud",data(){return{DREs:null,lancamentos:null,idDREMensal:null}},created(){this.fetch_DREs(this.$route.params.id)},watch:{"$route.params.id"(e){this.fetch_DREs(e)},idDREMensal(e){this.fetch_lancamentos(e)}},methods:{async fetch_DREs(e){await C.A.get(`http://localhost:8000/api/dre_mensal/?empresa__id=${e}`).then((e=>{this.DREs=e.data,console.log(this.DREs)})).catch((e=>{console.error("Error fetching empresa:",e)}))},async fetch_lancamentos(e){await C.A.get(`http://localhost:8000/api/lancamento_dre/?DRE_mensal=${e}`).then((e=>{this.lancamentos=e.data,console.log(this.DREs)})).catch((e=>{console.error("Error fetching empresa:",e)}))}}};const Ve=(0,w.A)(Ue,[["render",Te]]);var Xe=Ve;const Me=[{path:"/informacoesGerais/:id",name:"informacoesGerais",component:xe},{path:"/lancamentos/:id",name:"lancamentos",component:Xe}],Oe=(0,U.aE)({history:(0,U.LA)(),routes:Me});var Je=Oe;const je=(0,s.Ef)($);je.use(T()),je.use(Je),je.mount("#app")}},a={};function t(s){var o=a[s];if(void 0!==o)return o.exports;var r=a[s]={exports:{}};return e[s].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,s,o,r){if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(i=!1,r<n&&(n=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,o,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var o,r,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var u=l(t)}for(a&&a(s);c<n.length;c++)r=n[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},s=self["webpackChunkvue"]=self["webpackChunkvue"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(4928)}));s=t.O(s)})();
//# sourceMappingURL=app.adf35d25.js.map