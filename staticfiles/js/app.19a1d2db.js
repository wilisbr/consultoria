(function(){"use strict";var e={7064:function(e,a,t){var o=t(5130),s=t(6768);function n(e,a,t,o,n,r){const l=(0,s.g2)("Analise");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(l)])}var r=t(4232);const l={id:"wrapper"},i=["value"],c={class:"navbar is-success"},d={class:"navbar-brand"},u={class:"navbar-end"},p={key:0,class:"navbar-item"},m={class:"buttons"},h={class:"section"};function b(e,a,t,n,b,v){const k=(0,s.g2)("router-link"),f=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>b.idEmpresa=e)},[a[2]||(a[2]=(0,s.Lk)("option",{disabled:"",value:""},"Selecione a empresa",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(b.empresas,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,r.v_)(e.nome),9,i)))),128))],512),[[o.u1,b.idEmpresa]]),(0,s.Lk)("nav",c,[(0,s.Lk)("div",d,[(0,s.bF)(k,{to:"/",class:"navbar-item"},{default:(0,s.k6)((()=>a[3]||(a[3]=[(0,s.Lk)("strong",null,"Gestão e Consultoria",-1)]))),_:1}),(0,s.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:a[1]||(a[1]=a=>e.showMobileMenu=!e.showMobileMenu)},a[4]||(a[4]=[(0,s.Lk)("span",{"aria-hidden":"true"},null,-1),(0,s.Lk)("span",{"aria-hidden":"true"},null,-1),(0,s.Lk)("span",{"aria-hidden":"true"},null,-1)]))]),(0,s.Lk)("div",u,[(0,s.Lk)("div",{class:(0,r.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[b.idEmpresa?((0,s.uX)(),(0,s.CE)("div",p,[(0,s.Lk)("div",m,[(0,s.bF)(k,{to:{name:"informacoesGerais",params:{id:this.idEmpresa}}},{default:(0,s.k6)((()=>a[5]||(a[5]=[(0,s.eW)(" Informações ")]))),_:1},8,["to"]),(0,s.bF)(k,{to:{name:"lancamentos",params:{id:this.idEmpresa}}},{default:(0,s.k6)((()=>a[6]||(a[6]=[(0,s.eW)(" Lançamentos ")]))),_:1},8,["to"])])])):(0,s.Q3)("",!0)],2)])]),(0,s.Lk)("section",h,[((0,s.uX)(),(0,s.Wv)(f,{key:b.idEmpresa,onEmpresasAlteradas:e.fetchEmpresas},null,8,["onEmpresasAlteradas"]))]),a[7]||(a[7]=(0,s.Lk)("footer",{class:"footer"},[(0,s.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1)),a[8]||(a[8]=(0,s.Lk)("div",null,null,-1))])}t(4114);var v=t(4373),k={data(){return{empresas:[],enquadramentosTributarios:[]}},methods:{async fetchEmpresas(e=null){const a=e?`http://localhost:8000/api/empresa/${e}/`:"http://localhost:8000/api/empresa/";await v.A.get(a,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data,console.log("As empresas foram lidas do banco de dados"),console.log(this.empresas)})).catch((e=>{console.error("There was an error fetching the items:",e)}))},fetchEnquadramentosTributarios(){v.A.get("http://localhost:8000/api/enquadramento_tributario/").then((e=>{this.enquadramentosTributarios=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))}}},f={name:"AnaliseEmpresa",mixins:[k],props:{},data(){return{empresas:[],idEmpresa:0}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{},watch:{idEmpresa(e,a){console.log(e),console.log(a),e!==a&&this.$router.push({name:"lancamentos",params:{id:e}})}}},L=t(1241);const E=(0,L.A)(f,[["render",b]]);var _=E,g={name:"App",components:{Analise:_},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken"))},methods:{}};const y=(0,L.A)(g,[["render",n]]);var w=y,R=t(4570),D=t.n(R),C=t(973);const A={class:"container"},q={class:"field"},$={class:"control"},x={class:"field"},U={class:"control"},V={class:"field"},P={class:"control"},F={class:"field"},S={class:"control"},T={class:"field"},M={class:"control"},X={class:"field"},J={class:"control"},O={class:"field"},N={class:"control"},j={class:"field"},I={class:"control"},G={class:"field"},Q={class:"control"},z={class:"field"},K={class:"control"},W={class:"field"},H={class:"control"},B={class:"field"},Y={class:"control"},Z=["value"],ee={class:"field is-grouped"},ae={class:"control"},te={class:"control"};function oe(e,a,t,n,l,i){return(0,s.uX)(),(0,s.CE)("div",A,[(0,s.Lk)("button",{class:"button is-primary",onClick:a[0]||(a[0]=(...e)=>i.prepareForCreate&&i.prepareForCreate(...e))},"Criar Nova Empresa"),a[29]||(a[29]=(0,s.Lk)("h1",{class:"title"},"Dados",-1)),l.empresa?((0,s.uX)(),(0,s.CE)("form",{key:0,onSubmit:a[15]||(a[15]=(0,o.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[(0,s.Lk)("div",q,[a[16]||(a[16]=(0,s.Lk)("label",{class:"label"},"Nome",-1)),(0,s.Lk)("div",$,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>l.empresa.nome=e),required:""},null,512),[[o.Jo,l.empresa.nome]])])]),(0,s.Lk)("div",x,[a[17]||(a[17]=(0,s.Lk)("label",{class:"label"},"Nome do Contato",-1)),(0,s.Lk)("div",U,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>l.empresa.nome_contato=e),required:""},null,512),[[o.Jo,l.empresa.nome_contato]])])]),(0,s.Lk)("div",V,[a[18]||(a[18]=(0,s.Lk)("label",{class:"label"},"Tempo de Atividade",-1)),(0,s.Lk)("div",P,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[3]||(a[3]=e=>l.empresa.tempo_atividade=e),required:""},null,512),[[o.Jo,l.empresa.tempo_atividade]])])]),(0,s.Lk)("div",F,[a[19]||(a[19]=(0,s.Lk)("label",{class:"label"},"Quantidade de Sócios",-1)),(0,s.Lk)("div",S,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>l.empresa.quant_socios=e),required:""},null,512),[[o.Jo,l.empresa.quant_socios]])])]),(0,s.Lk)("div",T,[a[20]||(a[20]=(0,s.Lk)("label",{class:"label"},"Quantidade de Funcionários",-1)),(0,s.Lk)("div",M,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[5]||(a[5]=e=>l.empresa.quant_funcionarios=e),required:""},null,512),[[o.Jo,l.empresa.quant_funcionarios]])])]),(0,s.Lk)("div",X,[a[21]||(a[21]=(0,s.Lk)("label",{class:"label"},"Ramo de Atividade",-1)),(0,s.Lk)("div",J,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>l.empresa.ramo_atividade=e),required:""},null,512),[[o.Jo,l.empresa.ramo_atividade]])])]),(0,s.Lk)("div",O,[a[22]||(a[22]=(0,s.Lk)("label",{class:"label"},"Principal Atividade",-1)),(0,s.Lk)("div",N,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[7]||(a[7]=e=>l.empresa.principal_atividade=e),required:""},null,512),[[o.Jo,l.empresa.principal_atividade]])])]),(0,s.Lk)("div",j,[a[23]||(a[23]=(0,s.Lk)("label",{class:"label"},"Receita Anual",-1)),(0,s.Lk)("div",I,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[8]||(a[8]=e=>l.empresa.receita_anual=e),required:""},null,512),[[o.Jo,l.empresa.receita_anual]])])]),(0,s.Lk)("div",G,[a[24]||(a[24]=(0,s.Lk)("label",{class:"label"},"Total de Investimento",-1)),(0,s.Lk)("div",Q,[(0,s.bo)((0,s.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[9]||(a[9]=e=>l.empresa.total_investimento=e),required:""},null,512),[[o.Jo,l.empresa.total_investimento]])])]),(0,s.Lk)("div",z,[a[25]||(a[25]=(0,s.Lk)("label",{class:"label"},"Histórico da Empresa",-1)),(0,s.Lk)("div",K,[(0,s.bo)((0,s.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[10]||(a[10]=e=>l.empresa.historico_empresa=e)},null,512),[[o.Jo,l.empresa.historico_empresa]])])]),(0,s.Lk)("div",W,[a[26]||(a[26]=(0,s.Lk)("label",{class:"label"},"Pontos Críticos",-1)),(0,s.Lk)("div",H,[(0,s.bo)((0,s.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[11]||(a[11]=e=>l.empresa.pontos_criticos=e)},null,512),[[o.Jo,l.empresa.pontos_criticos]])])]),(0,s.Lk)("div",B,[a[27]||(a[27]=(0,s.Lk)("label",{class:"label"},"Enquadramento Tributário",-1)),(0,s.Lk)("div",Y,[(0,s.bo)((0,s.Lk)("select",{class:"input","onUpdate:modelValue":a[12]||(a[12]=e=>l.empresa.enquadramento_tributario=e),required:""},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.enquadramentosTributarios,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,r.v_)(e.nome),9,Z)))),128))],512),[[o.u1,l.empresa.enquadramento_tributario]])])]),(0,s.Lk)("div",ee,[a[28]||(a[28]=(0,s.Lk)("div",{class:"control"},[(0,s.Lk)("button",{class:"button is-link",type:"submit"},"Salvar")],-1)),(0,s.Lk)("div",ae,[(0,s.Lk)("button",{class:"button is-link is-light",type:"button",onClick:a[13]||(a[13]=(...e)=>i.resetForm&&i.resetForm(...e))},"Cancelar")]),(0,s.Lk)("div",te,[(0,s.Lk)("button",{class:"button is-danger is-light",type:"button",onClick:a[14]||(a[14]=(...e)=>i.handleDelete&&i.handleDelete(...e))},"Excluir")])])],32)):(0,s.Q3)("",!0)])}var se={name:"informacoesGerais",data(){return{empresa:null}},computed:{textEnquadramento(){return"simples"}},mixins:[k,k],watch:{"$route.params.id"(e){console.log("Route parameter changed:",e),this.fetchEmpresa(e)}},created(){this.fetchEmpresa(this.$route.params.id),this.fetchEnquadramentosTributarios()},methods:{async fetchEmpresa(e){await v.A.get(`http://localhost:8000/api/empresa/${e}/`).then((e=>{this.empresa=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},handleSubmit(){this.empresa.id?this.updateEmpresa():this.createEmpresa()},createEmpresa(){v.A.post("http://localhost:8000/api/empresa/",this.empresa).then((e=>{this.empresa=e.data,alert("Empresa criada com sucesso!"),this.$emit("empresasAlteradas")})).catch((e=>{console.error("Error creating empresa:",e)}))},updateEmpresa(){v.A.put(`http://localhost:8000/api/empresa/${this.empresa.id}/`,this.empresa).then((e=>{this.empresa=e.data,alert("Empresa atualizada com sucesso!")})).catch((e=>{console.error("Error updating empresa:",e)}))},handleDelete(){confirm("Tem certeza que deseja excluir esta empresa?")&&v.A.delete(`http://localhost:8000/api/empresa/${this.empresa.id}/`).then((()=>{this.resetForm(),alert("Empresa excluída com sucesso!"),this.$emit("empresasAlteradas")})).catch((e=>{console.error("Error deleting empresa:",e)}))},resetForm(){this.empresa={id:null,nome:"",nome_contato:"",tempo_atividade:"",quant_socios:"",quant_funcionarios:"",ramo_atividade:"",principal_atividade:"",receita_anual:"",total_investimento:"",historico_empresa:"",pontos_criticos:"",enquadramento_tributario:""}},prepareForCreate(){this.resetForm()}}};const ne=(0,L.A)(se,[["render",oe]]);var re=ne;const le={class:"container"},ie=["value"],ce={ref:"tabulator"},de={key:0,class:"popup-overlay"},ue={class:"popup-content"},pe={ref:"tabulator"};function me(e,a,t,n,l,i){return(0,s.uX)(),(0,s.CE)("div",le,[(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>l.idDREMensal=e)},[a[8]||(a[8]=(0,s.Lk)("option",{disabled:"",value:""},"Selecione a data base",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.DREs,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,r.v_)(e.ano)+"-"+(0,r.v_)(e.mes),9,ie)))),128))],512),[[o.u1,l.idDREMensal]]),(0,s.Lk)("button",{onClick:a[1]||(a[1]=(...e)=>i.openPopup&&i.openPopup(...e))},"Criar Nova DRE"),(0,s.Lk)("div",ce,null,512),(0,s.Lk)("button",{onClick:a[2]||(a[2]=(...e)=>i.addLancamento&&i.addLancamento(...e))},"Adicionar Lançamento"),l.showPopup?((0,s.uX)(),(0,s.CE)("div",de,[(0,s.Lk)("div",ue,[a[9]||(a[9]=(0,s.Lk)("h3",null,"Criar Nova DRE",-1)),a[10]||(a[10]=(0,s.Lk)("label",{for:"ano"},"Ano:",-1)),(0,s.bo)((0,s.Lk)("input",{id:"ano",type:"number",min:"1900",max:"2099","onUpdate:modelValue":a[3]||(a[3]=e=>l.newDRE.ano=e)},null,512),[[o.Jo,l.newDRE.ano]]),a[11]||(a[11]=(0,s.Lk)("label",{for:"mes"},"Mês:",-1)),(0,s.bo)((0,s.Lk)("input",{id:"mes",type:"number",min:"1",max:"12","onUpdate:modelValue":a[4]||(a[4]=e=>l.newDRE.mes=e)},null,512),[[o.Jo,l.newDRE.mes]]),(0,s.Lk)("button",{onClick:a[5]||(a[5]=(...e)=>i.createDRE&&i.createDRE(...e))},"Salvar"),(0,s.Lk)("button",{onClick:a[6]||(a[6]=(...e)=>i.closePopup&&i.closePopup(...e))},"Cancelar")])])):(0,s.Q3)("",!0),(0,s.Lk)("div",pe,null,512),(0,s.Lk)("button",{onClick:a[7]||(a[7]=(...e)=>i.addLancamento&&i.addLancamento(...e))},"Adicionar Lançamento")])}t(5003);const he=t(6729);var be={name:"lancamentosCrud",data(){return{empresa:this.$route.params.id,DREs:[],lancamentos:null,idDREMensal:null,tipo_lancamento_dre:null,select_tipo_lancamento:null,apiUrlDRE:"http://localhost:8000/api/dre_mensal/",apiUrlLancamentos:"http://localhost:8000/api/lancamento_dre/",tabulator:null,showPopup:!1,newDRE:{ano:"",mes:"",tipo_DRE:"previsto",empresa:this.$route.params.id}}},async mounted(){await this.fetch_DREs(this.$route.params.id),await this.fetch_tipo_lancamento(),this.tipo_lancamento_dre&&0!==this.tipo_lancamento_dre.length?(this.tabulator=new he(this.$refs.tabulator,{layout:"fitColumns",placeholder:"Nenhum lançamento disponível",columns:[{title:"Tipo",field:"tipo",editor:"list",editorParams:{values:this.select_tipo_lancamento},formatter:function(e){return console.log(e.getValue()),console.log(this.tipo_lancamento_dre),console.log(this.select_tipo_lancamento),e.getValue()&&this.select_tipo_lancamento?this.select_tipo_lancamento[e.getValue()]:"Não definido"}},{title:"Valor (R$)",field:"valor",editor:"number",formatter:"money",formatterParams:{symbol:"R$",precision:2},headerSort:!1},{title:"Ações",formatter:"buttonCross",width:100,cellClick:(e,a)=>{console.log("Deletando item:",a.getRow().getData()),this.deleteLancamento(a.getRow().getData())}}]}),this.tabulator.on("cellEdited",(e=>{console.log("Evento cellEdited disparado:",e),this.updateLancamento(e)}))):console.error("Nenhum tipo de lançamento encontrado.")},watch:{"$route.params.id"(e){this.empresa=e,this.newDRE.empresa=e,this.fetch_DREs(e)},idDREMensal(e){this.fetch_lancamentos(e)}},methods:{async fetch_DREs(e){await v.A.get(`http://localhost:8000/api/dre_mensal/?empresa__id=${e}`).then((e=>{this.DREs=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},async fetch_lancamentos(e){await v.A.get(`${this.apiUrlLancamentos}?DRE_mensal=${e}`).then((e=>{this.lancamentos=e.data,this.tabulator.setData(this.lancamentos),console.log(this.lancamentos)})).catch((e=>{console.error("Error fetching empresa:",e)}))},addLancamento(){const e={tipo:1,valor:0,DRE_mensal:this.idDREMensal};v.A.post(this.apiUrlLancamentos,e).then((e=>{this.tabulator.addRow(e.data)}))},updateLancamento(e){console.log("atualizando");const a=e.getRow().getData();v.A.put(`${this.apiUrlLancamentos}${a.id}/`,a).then((()=>{console.log("Lançamento atualizado com sucesso!")}))},async deleteLancamento(e){await v.A.delete(`${this.apiUrlLancamentos}${e.id}/`).then((()=>{this.tabulator.deleteRow(e.id)}))},async fetch_tipo_lancamento(){await v.A.get("http://localhost:8000/api/tipo_lancamento_dre").then((e=>{this.tipo_lancamento_dre=e.data,this.select_tipo_lancamento=e.data.reduce(((e,a)=>(e[a.id]=a.descricao,e)),{}),console.log(e.data),console.log(this.select_tipo_lancamento)})).catch((e=>{console.error("Error fetching empresa:",e)}))},openPopup(){this.showPopup=!0},closePopup(){this.showPopup=!1,this.resetNewDRE()},resetNewDRE(){this.newDRE={ano:"",mes:"",tipo_DRE:"previsto",empresa:this.$route.params.id}},async createDRE(){try{const e=await v.A.post(this.apiUrlDRE,this.newDRE);this.DREs.push(e.data),this.closePopup()}catch(e){console.error("Erro ao criar DRE:",e),console.log(this.newDRE)}}}};const ve=(0,L.A)(be,[["render",me]]);var ke=ve;const fe=[{path:"/informacoesGerais/:id",name:"informacoesGerais",component:re},{path:"/lancamentos/:id",name:"lancamentos",component:ke}],Le=(0,C.aE)({history:(0,C.LA)(),routes:fe});var Ee=Le;const _e=(0,o.Ef)(w);_e.use(D()),_e.use(Ee),_e.mount("#app")}},a={};function t(o){var s=a[o];if(void 0!==s)return s.exports;var n=a[o]={exports:{}};return e[o].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,o,s,n){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,i=0;i<o.length;i++)(!1&n||r>=n)&&Object.keys(t.O).every((function(e){return t.O[e](o[i])}))?o.splice(i--,1):(l=!1,n<r&&(r=n));if(l){e.splice(d--,1);var c=s();void 0!==c&&(a=c)}}return a}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,s,n]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,o){var s,n,r=o[0],l=o[1],i=o[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(s in l)t.o(l,s)&&(t.m[s]=l[s]);if(i)var d=i(t)}for(a&&a(o);c<r.length;c++)n=r[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},o=self["webpackChunkvue"]=self["webpackChunkvue"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(7064)}));o=t.O(o)})();
//# sourceMappingURL=app.19a1d2db.js.map