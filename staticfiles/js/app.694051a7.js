(function(){"use strict";var e={8918:function(e,a,t){var s=t(5130),r=t(6768);function o(e,a,t,s,o,n){const i=(0,r.g2)("Analise");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(i)])}var n=t(4232);const i={id:"wrapper"},l=(0,r.Lk)("option",{disabled:"",value:""},"Selecione a empresa",-1),c=["value"],u={class:"navbar is-success"},d={class:"navbar-brand"},p=(0,r.Lk)("strong",null," Gestão e Consultoria",-1),m=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),v=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),h=(0,r.Lk)("span",{"aria-hidden":"true"},null,-1),k=[m,v,h],b={class:"navbar-end"},f={class:"navbar-item"},L={class:"buttons"},g={class:"section"},_=(0,r.Lk)("footer",{class:"footer"},[(0,r.Lk)("p",{class:"has-text-centered"},"Copyright (c) 2021")],-1),E=(0,r.Lk)("div",null,null,-1);function y(e,a,t,o,m,v){const h=(0,r.g2)("router-link"),y=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.idEmpresa=e),onChange:a[1]||(a[1]=(...e)=>v.onSelectChange&&v.onSelectChange(...e))},[l,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(m.empresas,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.id},(0,n.v_)(e.nome),9,c)))),128))],544),[[s.u1,m.idEmpresa]]),(0,r.Lk)("nav",u,[(0,r.Lk)("div",d,[(0,r.bF)(h,{to:"/",class:"navbar-item"},{default:(0,r.k6)((()=>[p])),_:1}),(0,r.Lk)("a",{class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu",onClick:a[2]||(a[2]=a=>e.showMobileMenu=!e.showMobileMenu)},k)]),(0,r.Lk)("div",b,[(0,r.Lk)("div",{class:(0,n.C4)(["navbar-menu",{"is-active":e.showMobileMenu}]),id:"navbar-menu"},[(0,r.Lk)("div",f,[(0,r.Lk)("div",L,[(0,r.bF)(h,{to:{name:"informacoesGerais",params:{id:this.idEmpresa}}},{default:(0,r.k6)((()=>[(0,r.eW)(" Informações ")])),_:1},8,["to"])])])],2)])]),(0,r.Lk)("section",g,[((0,r.uX)(),(0,r.Wv)(y,{key:m.idEmpresa}))]),_,E])}t(4114);var C=t(4373),q={data(){return{empresas:[]}},methods:{fetchEmpresas(e=null){const a=e?`http://localhost:8000/api/empresa/${e}/`:"http://localhost:8000/api/empresa/";C.A.get(a,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresas=e.data})).catch((e=>{console.error("There was an error fetching the items:",e)}))}}},x={name:"AnaliseEmpresa",mixins:[q],props:{},data(){return{empresas:[],idEmpresa:Number}},created(){console.log(this.$cookies.get("csrftoken")),this.fetchEmpresas(),console.log("fetchItems")},methods:{onSelectChange(){this.$router.push({name:"informacoesGerais",params:{id:this.idEmpresa}})}}},S=t(1241);const A=(0,S.A)(x,[["render",y]]);var F=A,w={name:"App",components:{Analise:F},data(){return{empresaSelecionada:""}},created(){console.log(this.$cookies.get("csrftoken"))},methods:{}};const O=(0,S.A)(w,[["render",o]]);var U=O,V=t(4570),J=t.n(V),$=t(973);const T={class:"container"},X=(0,r.Lk)("h1",{class:"title"},"Dados cadastrais",-1),j={key:0},M={class:"field"},G=(0,r.Lk)("label",{class:"label"},"Nome",-1),P={class:"control"},D={class:"field"},I=(0,r.Lk)("label",{class:"label"},"Nome do Contato",-1),N={class:"control"},Q={class:"field"},R=(0,r.Lk)("label",{class:"label"},"Tempo de Atividade",-1),z={class:"control"},W={class:"field"},H=(0,r.Lk)("label",{class:"label"},"Quantidade de Sócios",-1),K={class:"control"},B={class:"field"},Y=(0,r.Lk)("label",{class:"label"},"Quantidade de Funcionários",-1),Z={class:"control"},ee={class:"field"},ae=(0,r.Lk)("label",{class:"label"},"Ramo de Atividade",-1),te={class:"control"},se={class:"field"},re=(0,r.Lk)("label",{class:"label"},"Principal Atividade",-1),oe={class:"control"},ne={class:"field"},ie=(0,r.Lk)("label",{class:"label"},"Receita Anual",-1),le={class:"control"},ce={class:"field"},ue=(0,r.Lk)("label",{class:"label"},"Total de Investimento",-1),de={class:"control"},pe={class:"field"},me=(0,r.Lk)("label",{class:"label"},"Histórico da Empresa",-1),ve={class:"control"},he={class:"field"},ke=(0,r.Lk)("label",{class:"label"},"Pontos Críticos",-1),be={class:"control"},fe={class:"field"},Le=(0,r.Lk)("label",{class:"label"},"Enquadramento Tributário",-1),ge={class:"control"},_e={class:"field is-grouped"},Ee=(0,r.Lk)("div",{class:"control"},[(0,r.Lk)("button",{class:"button is-link",type:"submit"},"Salvar")],-1),ye={class:"control"},Ce={key:0,class:"control"};function qe(e,a,t,o,n,i){return(0,r.uX)(),(0,r.CE)("div",T,[X,(0,r.Lk)("button",{class:"button is-primary",onClick:a[0]||(a[0]=(...e)=>i.prepareForCreate&&i.prepareForCreate(...e))},"Criar Nova Empresa"),n.empresa?((0,r.uX)(),(0,r.CE)("div",j,[(0,r.Lk)("form",{onSubmit:a[15]||(a[15]=(0,s.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[(0,r.Lk)("div",M,[G,(0,r.Lk)("div",P,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>n.empresa.nome=e),required:""},null,512),[[s.Jo,n.empresa.nome]])])]),(0,r.Lk)("div",D,[I,(0,r.Lk)("div",N,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>n.empresa.nome_contato=e),required:""},null,512),[[s.Jo,n.empresa.nome_contato]])])]),(0,r.Lk)("div",Q,[R,(0,r.Lk)("div",z,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[3]||(a[3]=e=>n.empresa.tempo_atividade=e),required:""},null,512),[[s.Jo,n.empresa.tempo_atividade]])])]),(0,r.Lk)("div",W,[H,(0,r.Lk)("div",K,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>n.empresa.quant_socios=e),required:""},null,512),[[s.Jo,n.empresa.quant_socios]])])]),(0,r.Lk)("div",B,[Y,(0,r.Lk)("div",Z,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[5]||(a[5]=e=>n.empresa.quant_funcionarios=e),required:""},null,512),[[s.Jo,n.empresa.quant_funcionarios]])])]),(0,r.Lk)("div",ee,[ae,(0,r.Lk)("div",te,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>n.empresa.ramo_atividade=e),required:""},null,512),[[s.Jo,n.empresa.ramo_atividade]])])]),(0,r.Lk)("div",se,[re,(0,r.Lk)("div",oe,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":a[7]||(a[7]=e=>n.empresa.principal_atividade=e),required:""},null,512),[[s.Jo,n.empresa.principal_atividade]])])]),(0,r.Lk)("div",ne,[ie,(0,r.Lk)("div",le,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[8]||(a[8]=e=>n.empresa.receita_anual=e),required:""},null,512),[[s.Jo,n.empresa.receita_anual]])])]),(0,r.Lk)("div",ce,[ue,(0,r.Lk)("div",de,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number",step:"0.01","onUpdate:modelValue":a[9]||(a[9]=e=>n.empresa.total_investimento=e),required:""},null,512),[[s.Jo,n.empresa.total_investimento]])])]),(0,r.Lk)("div",pe,[me,(0,r.Lk)("div",ve,[(0,r.bo)((0,r.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[10]||(a[10]=e=>n.empresa.historico_empresa=e)},null,512),[[s.Jo,n.empresa.historico_empresa]])])]),(0,r.Lk)("div",he,[ke,(0,r.Lk)("div",be,[(0,r.bo)((0,r.Lk)("textarea",{class:"textarea","onUpdate:modelValue":a[11]||(a[11]=e=>n.empresa.pontos_criticos=e)},null,512),[[s.Jo,n.empresa.pontos_criticos]])])]),(0,r.Lk)("div",fe,[Le,(0,r.Lk)("div",ge,[(0,r.bo)((0,r.Lk)("input",{class:"input",type:"number","onUpdate:modelValue":a[12]||(a[12]=e=>n.empresa.enquadramento_tributario=e),required:""},null,512),[[s.Jo,n.empresa.enquadramento_tributario]])])]),(0,r.Lk)("div",_e,[Ee,(0,r.Lk)("div",ye,[(0,r.Lk)("button",{class:"button is-link is-light",type:"button",onClick:a[13]||(a[13]=(...e)=>i.resetForm&&i.resetForm(...e))},"Cancelar")]),n.empresa.id?((0,r.uX)(),(0,r.CE)("div",Ce,[(0,r.Lk)("button",{class:"button is-danger is-light",type:"button",onClick:a[14]||(a[14]=(...e)=>i.handleDelete&&i.handleDelete(...e))},"Excluir")])):(0,r.Q3)("",!0)])],32)])):(0,r.Q3)("",!0)])}var xe={name:"informacoesGerais",data(){return{empresa:null}},created(){this.$route.params.id&&this.fetchEmpresa(this.$route.params.id)},methods:{fetchEmpresa(e){C.A.get(`http://localhost:8000/api/empresa/${e}/`).then((e=>{this.empresa=e.data})).catch((e=>{console.error("Error fetching empresa:",e)}))},handleSubmit(){this.empresa.id?this.updateEmpresa():this.createEmpresa()},createEmpresa(){C.A.post("http://localhost:8000/api/empresa/",this.empresa,{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then((e=>{this.empresa=e.data,alert("Empresa criada com sucesso!")})).catch((e=>{console.error("Error creating empresa:",e)}))},updateEmpresa(){C.A.put(`http://localhost:8000/api/empresa/${this.empresa.id}/`,this.empresa).then((e=>{this.empresa=e.data,alert("Empresa atualizada com sucesso!")})).catch((e=>{console.error("Error updating empresa:",e)}))},handleDelete(){confirm("Tem certeza que deseja excluir esta empresa?")&&C.A.delete(`http://localhost:8000/api/empresa/${this.empresa.id}/`).then((()=>{this.resetForm(),alert("Empresa excluída com sucesso!")})).catch((e=>{console.error("Error deleting empresa:",e)}))},resetForm(){this.empresa={id:null,nome:"",nome_contato:"",tempo_atividade:"",quant_socios:"",quant_funcionarios:"",ramo_atividade:"",principal_atividade:"",receita_anual:"",total_investimento:"",historico_empresa:"",pontos_criticos:"",enquadramento_tributario:""}},prepareForCreate(){this.resetForm()}}};const Se=(0,S.A)(xe,[["render",qe]]);var Ae=Se;const Fe=[{path:"/informacoesGerais/:id",name:"informacoesGerais",component:Ae}],we=(0,$.aE)({history:(0,$.LA)(),routes:Fe});var Oe=we;const Ue=(0,s.Ef)(U);Ue.use(J()),Ue.use(Oe),Ue.mount("#app")}},a={};function t(s){var r=a[s];if(void 0!==r)return r.exports;var o=a[s]={exports:{}};return e[s].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,s,r,o){if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(a=c)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,r,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var r,o,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var u=l(t)}for(a&&a(s);c<n.length;c++)o=n[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},s=self["webpackChunkvue"]=self["webpackChunkvue"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(8918)}));s=t.O(s)})();
//# sourceMappingURL=app.694051a7.js.map