import axios from 'axios';

export default {
  data() {
    return {
      empresas: [],
      enquadramentosTributarios: [],
      apiUrl: `http://${window.location.hostname}:8000/api`
    };
  },
  methods: {

    
    async fetchEmpresas(id = null) {
      const url = id ? `${this.apiUrl}/empresa/${id}/` : `${this.apiUrl}/empresa/`;
      console.log(url)
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
      axios.get(`${this.apiUrl}/enquadramento_tributario/`)
        .then(response => {
          this.enquadramentosTributarios = response.data;
        })
        .catch(error => {
          console.error('Error fetching empresa:', error);
        });
    },
  }
};