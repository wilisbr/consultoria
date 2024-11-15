(function(){"use strict";var e={5383:function(e,a,t){var s=t(5130),o=t(6768);function r(e,a,t,s,r,n){const l=(0,o.g2)("Analise");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(l)])}var n=t(4232);const l={id:"wrapper"},i=["value"],c={class:"navbar is-success"},d={class:"navbar-brand"},u={class:"navbar-end"},p={key:0,class:"navbar-item"},m={class:"buttons"},h={class:"section"};function b(e,a,t,r,b,v){const f=(0,o.g2)("router-link"),k=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",l,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>b.idEmpresa=e)},[a[2]||(a[2]=(0,o.Lk)("option",{disabled:"",value:""},"Selecione a empresa",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(b.empresas,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,i)))),128))],512),[[s.u1,b.idEmpresa]]),(0,o.Lk)("nav",c,[(0,o.Lk)("div",d,[(0,o.bF)(f,{to:"/",class:"navbar-item"},{default:(0,o.k6)((()=>a[3]||(a[3]=[(0,o.Lk)("strong",null,"Gestão e Consultoria",-1)]))),_:1}),(0,o.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:a[1]||(a[1]=a=>e.showMobileMenu=!e.showMobileMenu)},a[4]||(a[4]=[(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),(0,o.Lk)("span",{"aria-hidden":"true"},null,-1),(0,o.Lk)("span",{"aria-hidden":"true"},null,-1)]))]),(0,o.Lk)("div",u,[(0,o.Lk)("div",{class:(0,n.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[b.idEmpresa?((0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("div",m,[(0,o.bF)(f,{to:{name:"informacoesGerais",params:{id:this.idEmpresa}}},{default:(0,o.k6)((()=>a[5]||(a[5]=[(0,o.eW)(" Informações ")]))),_:1},8,["to"]),(0,o.bF)(f,{to:{name:"lancamentos",params:{id:this.idEmpresa}}},{default:(0,o.k6)((()=>a[6]||(a[6]=[(0,o.eW)(" Lançamentos ")]))),_:1},8,["to"])])])):(0,o.Q3)("",!0)],2)])]),(0,o.Lk)("section",h,[((0,o.uX)(),(0,o.Wv)(k,{key:b.idEmpresa,onEmpresasAlteradas:e.fetchEmpresas},null,8,["onEmpresasAlteradas"]))]),a[7]||(a[7]=(0,o.Lk)("footer",{class:"footer"},[(0,o.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1)),a[8]||(a[8]=(0,o.Lk)("div",null,null,-1))])}t(4114);var v=t(4373),f={data(){return{empresas:[],enquadramentosTributarios:[]}},methods:{async fetchEmpresas(e=null){const a=e?`http://localhost:8000/api/empresa/${e}/`:"http://localhost:8000/api/empresa/";await v.A.get(a,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data,console.log("As empresas foram lidas do banco de dados"),console.log(this.empresas)})).catch((e=>{console.error("There was an error fetching the items:",e)}))},fetchEnquadramentosTributarios(){v.A.get("http://localhost:8000/api/enquadramento_tributario/").then((e=>{this.enquadramentosTributarios=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))}}},k={name:"AnaliseEmpresa",mixins:[f],props:{},data(){return{empresas:[],idEmpresa:0}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{},watch:{idEmpresa(e,a){console.log(e),console.log(a),e!==a&&this.$router.push({name:"lancamentos",params:{id:e}})}}},L=t(1241);const _=(0,L.A)(k,[["render",b]]);var E=_,g={name:"App",components:{Analise:E},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken"))},methods:{}};const y=(0,L.A)(g,[["render",r]]);var C=y,A=t(4570),q=t.n(A),w=t(973);const D={class:"container"},R={class:"field"},x={class:"control"},$={class:"field"},S={class:"control"},F={class:"field"},T={class:"control"},U={class:"field"},V={class:"control"},M={class:"field"},X={class:"control"},O={class:"field"},I={class:"control"},J={class:"field"},j={class:"control"},P={class:"field"},W={class:"control"},G={class:"field"},N={class:"control"},Q={class:"field"},K={class:"control"},z={class:"field"},H={class:"control"},B={class:"field"},Y={class:"control"},Z=["value"],ee={class:"field is-grouped"},ae={class:"control"},te={class:"control"};function se(e,a,t,r,l,i){return(0,o.uX)(),(0,o.CE)("div",D,[(0,o.Lk)("button",{class:"button is-primary",onClick:a[0]||(a[0]=(...e)=>i.prepareForCreate&&i.prepareForCreate(...e))},"Criar Nova Empresa"),a[29]||(a[29]=(0,o.Lk)("h1",{class:"title"},"Dados",-1)),l.empresa?((0,o.uX)(),(0,o.CE)("form",{key:0,onSubmit:a[15]||(a[15]=(0,s.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[(0,o.Lk)("div",R,[a[16]||(a[16]=(0,o.Lk)("label",{class:"label"},"Nome",-1)),(0,o.Lk)("div",x,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>l.empresa.nome=e),required:""},null,512),[[s.Jo,l.empresa.nome]])])]),(0,o.Lk)("div",$,[a[17]||(a[17]=(0,o.Lk)("label",{class:"label"},"Nome do Contato",-1)),(0,o.Lk)("div",S,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>l.empresa.nome_contato=e),required:""},null,512),[[s.Jo,l.empresa.nome_contato]])])]),(0,o.Lk)("div",F,[a[18]||(a[18]=(0,o.Lk)("label",{class:"label"},"Tempo de Atividade",-1)),(0,o.Lk)("div",T,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[3]||(a[3]=e=>l.empresa.tempo_atividade=e),required:""},null,512),[[s.Jo,l.empresa.tempo_atividade]])])]),(0,o.Lk)("div",U,[a[19]||(a[19]=(0,o.Lk)("label",{class:"label"},"Quantidade de Sócios",-1)),(0,o.Lk)("div",V,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>l.empresa.quant_socios=e),required:""},null,512),[[s.Jo,l.empresa.quant_socios]])])]),(0,o.Lk)("div",M,[a[20]||(a[20]=(0,o.Lk)("label",{class:"label"},"Quantidade de Funcionários",-1)),(0,o.Lk)("div",X,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[5]||(a[5]=e=>l.empresa.quant_funcionarios=e),required:""},null,512),[[s.Jo,l.empresa.quant_funcionarios]])])]),(0,o.Lk)("div",O,[a[21]||(a[21]=(0,o.Lk)("label",{class:"label"},"Ramo de Atividade",-1)),(0,o.Lk)("div",I,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>l.empresa.ramo_atividade=e),required:""},null,512),[[s.Jo,l.empresa.ramo_atividade]])])]),(0,o.Lk)("div",J,[a[22]||(a[22]=(0,o.Lk)("label",{class:"label"},"Principal Atividade",-1)),(0,o.Lk)("div",j,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[7]||(a[7]=e=>l.empresa.principal_atividade=e),required:""},null,512),[[s.Jo,l.empresa.principal_atividade]])])]),(0,o.Lk)("div",P,[a[23]||(a[23]=(0,o.Lk)("label",{class:"label"},"Receita Anual",-1)),(0,o.Lk)("div",W,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[8]||(a[8]=e=>l.empresa.receita_anual=e),required:""},null,512),[[s.Jo,l.empresa.receita_anual]])])]),(0,o.Lk)("div",G,[a[24]||(a[24]=(0,o.Lk)("label",{class:"label"},"Total de Investimento",-1)),(0,o.Lk)("div",N,[(0,o.bo)((0,o.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[9]||(a[9]=e=>l.empresa.total_investimento=e),required:""},null,512),[[s.Jo,l.empresa.total_investimento]])])]),(0,o.Lk)("div",Q,[a[25]||(a[25]=(0,o.Lk)("label",{class:"label"},"Histórico da Empresa",-1)),(0,o.Lk)("div",K,[(0,o.bo)((0,o.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[10]||(a[10]=e=>l.empresa.historico_empresa=e)},null,512),[[s.Jo,l.empresa.historico_empresa]])])]),(0,o.Lk)("div",z,[a[26]||(a[26]=(0,o.Lk)("label",{class:"label"},"Pontos Críticos",-1)),(0,o.Lk)("div",H,[(0,o.bo)((0,o.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[11]||(a[11]=e=>l.empresa.pontos_criticos=e)},null,512),[[s.Jo,l.empresa.pontos_criticos]])])]),(0,o.Lk)("div",B,[a[27]||(a[27]=(0,o.Lk)("label",{class:"label"},"Enquadramento Tributário",-1)),(0,o.Lk)("div",Y,[(0,o.bo)((0,o.Lk)("select",{class:"input","onUpdate:modelValue":a[12]||(a[12]=e=>l.empresa.enquadramento_tributario=e),required:""},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.enquadramentosTributarios,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,Z)))),128))],512),[[s.u1,l.empresa.enquadramento_tributario]])])]),(0,o.Lk)("div",ee,[a[28]||(a[28]=(0,o.Lk)("div",{class:"control"},[(0,o.Lk)("button",{class:"button is-link",type:"submit"},"Salvar")],-1)),(0,o.Lk)("div",ae,[(0,o.Lk)("button",{class:"button is-link is-light",type:"button",onClick:a[13]||(a[13]=(...e)=>i.resetForm&&i.resetForm(...e))},"Cancelar")]),(0,o.Lk)("div",te,[(0,o.Lk)("button",{class:"button is-danger is-light",type:"button",onClick:a[14]||(a[14]=(...e)=>i.handleDelete&&i.handleDelete(...e))},"Excluir")])])],32)):(0,o.Q3)("",!0)])}var oe={name:"informacoesGerais",data(){return{empresa:null}},computed:{textEnquadramento(){return"simples"}},mixins:[f,f],watch:{"$route.params.id"(e){console.log("Route parameter changed:",e),this.fetchEmpresa(e)}},created(){this.fetchEmpresa(this.$route.params.id),this.fetchEnquadramentosTributarios()},methods:{async fetchEmpresa(e){await v.A.get(`http://localhost:8000/api/empresa/${e}/`).then((e=>{this.empresa=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},handleSubmit(){this.empresa.id?this.updateEmpresa():this.createEmpresa()},createEmpresa(){v.A.post("http://localhost:8000/api/empresa/",this.empresa).then((e=>{this.empresa=e.data,alert("Empresa criada com sucesso!"),this.$emit("empresasAlteradas")})).catch((e=>{console.error("Error creating empresa:",e)}))},updateEmpresa(){v.A.put(`http://localhost:8000/api/empresa/${this.empresa.id}/`,this.empresa).then((e=>{this.empresa=e.data,alert("Empresa atualizada com sucesso!")})).catch((e=>{console.error("Error updating empresa:",e)}))},handleDelete(){confirm("Tem certeza que deseja excluir esta empresa?")&&v.A.delete(`http://localhost:8000/api/empresa/${this.empresa.id}/`).then((()=>{this.resetForm(),alert("Empresa excluída com sucesso!"),this.$emit("empresasAlteradas")})).catch((e=>{console.error("Error deleting empresa:",e)}))},resetForm(){this.empresa={id:null,nome:"",nome_contato:"",tempo_atividade:"",quant_socios:"",quant_funcionarios:"",ramo_atividade:"",principal_atividade:"",receita_anual:"",total_investimento:"",historico_empresa:"",pontos_criticos:"",enquadramento_tributario:""}},prepareForCreate(){this.resetForm()}}};const re=(0,L.A)(oe,[["render",se]]);var ne=re;const le={class:"container"},ie=["value"],ce={ref:"tabulator"};function de(e,a,t,r,l,i){return(0,o.uX)(),(0,o.CE)("div",le,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>l.idDREMensal=e)},[a[2]||(a[2]=(0,o.Lk)("option",{disabled:"",value:""},"Selecione a data base",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.DREs,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.ano)+"-"+(0,n.v_)(e.mes),9,ie)))),128))],512),[[s.u1,l.idDREMensal]]),a[3]||(a[3]=(0,o.Lk)("p",null,"DREs",-1)),(0,o.eW)(" "+(0,n.v_)(l.DREs)+" ",1),a[4]||(a[4]=(0,o.Lk)("br",null,null,-1)),a[5]||(a[5]=(0,o.Lk)("p",null," Lancamentos: ",-1)),(0,o.eW)(" "+(0,n.v_)(l.lancamentos)+" ",1),a[6]||(a[6]=(0,o.Lk)("br",null,null,-1)),a[7]||(a[7]=(0,o.eW)()),a[8]||(a[8]=(0,o.Lk)("p",null,"Tipo Lancamentos:",-1)),(0,o.eW)(" "+(0,n.v_)(l.tipo_lancamento_dre)+" ",1),a[9]||(a[9]=(0,o.Lk)("hr",null,null,-1)),(0,o.Lk)("div",ce,null,512),(0,o.Lk)("button",{onClick:a[1]||(a[1]=(...a)=>e.addItem&&e.addItem(...a))},"Adicionar Lançamento")])}t(5003);const ue=t(6729);var pe={name:"lancamentosCrud",data(){return{DREs:null,lancamentos:null,idDREMensal:null,tipo_lancamento_dre:null,apiUrlLancamentos:"http://localhost:8000/api/lancamento_dre/",tabulator:null}},mounted(){this.fetch_DREs(this.$route.params.id),this.fetch_tipo_lancamento(),this.tabulator=new ue(this.$refs.tabulator,{layout:"fitColumns",placeholder:"Nenhum lançamento disponível",columns:[{title:"ID",field:"id",width:50,headerSort:!1},{title:"Tipo",field:"tipo",editor:"input",headerSort:!1},{title:"Valor (R$)",field:"valor",editor:"number",formatter:"money",formatterParams:{symbol:"R$",precision:2},headerSort:!1},{title:"DRE Mensal",field:"DRE_mensal",editor:"input",headerSort:!1},{title:"Ações",formatter:"buttonCross",width:100,cellClick:(e,a)=>this.deleteItem(a.getRow().getData())}],cellEdited:e=>this.updateItem(e)})},watch:{"$route.params.id"(e){this.fetch_DREs(e)},idDREMensal(e){this.fetch_lancamentos(e)}},methods:{async fetch_DREs(e){await v.A.get(`http://localhost:8000/api/dre_mensal/?empresa__id=${e}`).then((e=>{this.DREs=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},async fetch_lancamentos(e){await v.A.get(`http://localhost:8000/api/lancamento_dre/?DRE_mensal=${e}`).then((e=>{this.lancamentos=e.data,this.tabulator.setData(this.lancamentos),console.log(this.lancamentos)})).catch((e=>{console.error("Error fetching empresa:",e)}))},async fetch_tipo_lancamento(){await v.A.get("http://localhost:8000/api/tipo_lancamento_dre").then((e=>{this.tipo_lancamento_dre=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))}}};const me=(0,L.A)(pe,[["render",de]]);var he=me;const be=[{path:"/informacoesGerais/:id",name:"informacoesGerais",component:ne},{path:"/lancamentos/:id",name:"lancamentos",component:he}],ve=(0,w.aE)({history:(0,w.LA)(),routes:be});var fe=ve;const ke=(0,s.Ef)(C);ke.use(q()),ke.use(fe),ke.mount("#app")}},a={};function t(s){var o=a[s];if(void 0!==o)return o.exports;var r=a[s]={exports:{}};return e[s].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,s,o,r){if(!s){var n=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],r=e[d][2];for(var l=!0,i=0;i<s.length;i++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[i])}))?s.splice(i--,1):(l=!1,r<n&&(n=r));if(l){e.splice(d--,1);var c=o();void 0!==c&&(a=c)}}return a}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,o,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var o,r,n=s[0],l=s[1],i=s[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(i)var d=i(t)}for(a&&a(s);c<n.length;c++)r=n[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},s=self["webpackChunkvue"]=self["webpackChunkvue"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(5383)}));s=t.O(s)})();
//# sourceMappingURL=app.6a62ce8d.js.map