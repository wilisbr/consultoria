import axios from 'axios';

export default {
  data() {
    return {
      empresas: [],
      enquadramentosTributarios: []
    };
  },
  methods: {

    
    async fetchEmpresas(id = null) {
      const url = id ? `http://localhost:8000/api/empresa/${id}/` : 'http://localhost:8000/api/empresa/';

      await axios.get(url, {
        headers: {
          'X-CSRFToken': this.$cookies.get('csrftoken')
        }
      })
      .then(response => {
        this.empresas = response.data;
        console.log('As empresas foram lidas do banco de dados')
        console.log(this.empresas);
      })
      .catch(error => {
        console.error("There was an error fetching the items:", error);
      });
    },

    fetchEnquadramentosTributarios() {
      axios.get(`http://localhost:8000/api/enquadramento_tributario/`)
        .then(response => {
          this.enquadramentosTributarios = response.data;
        })
        .catch(error => {
          console.error('Error fetching empresa:', error);
        });
    },
  }
};