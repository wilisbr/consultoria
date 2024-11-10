<template>
  
  <div class="container" >
    
    <p>DREs</p>
    {{DREs}}
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'lancamentosCrud',
        data() {
            return {
            DREs: null
            }
        },
        created() {
            this.fetch_DREs(this.$route.params.id);
        },
        watch: {
            '$route.params.id'(newId) {
            this.fetch_DREs(newId);
        }
  },
        methods: {
            async fetch_DREs(id) {
            await axios.get(`http://localhost:8000/api/dre_mensal/?empresa__id=${id}`)
                .then(response => {
                this.DREs = response.data;
                console.log (this.DREs)
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
        }
    }
</script>