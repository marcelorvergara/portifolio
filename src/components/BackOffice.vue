<template>
  <b-container>
    <b-row no-gutters>
      <b-card class="mb-3">
        <b-card-text>
          <b-row>
            <b-col cols="4">
              <img width="180" :src="geral" alt="uso geral da ferramenta">
            </b-col>
            <b-col>
              <b-row>
                <b-col>
                  <span>Back Office - Clínica Fisioterápica</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-link target="_blank" href="https://github.com/marcelorvergara/Fisio-Vue-BackOffice"><b-icon icon="github"></b-icon> GitHub</b-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-table :items="telas" :fields="campos" borderless>
          <template #cell(source)="row">
            <b-button variant="outline-secondary" size="sm" @click="showGif(row)">
              Demo
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-modal ref="modal-gifs"
             header-bg-variant="dark"
             header-text-variant="white"
             scrollable
        hide-footer
        id="modal-gifs" :title="titulo" size="xl">
      <template slot="modal-header-close"><b-icon icon="x-square"></b-icon></template>
      <div>
        <img width="1100" :src="source" :alt="alt">
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import Logando from "@/assets/gifs/backoffice/Logando.gif"
import Novo_Login from "@/assets/gifs/backoffice/Novo_Login.gif"
import Agendamento from "@/assets/gifs/backoffice/Agendamento.gif"
import Agend_Conflito from "@/assets/gifs/backoffice/Agend_Conflito.gif"
import Evolucao_Diaria from "@/assets/gifs/backoffice/Evolucao_Diaria.gif"
import Geral from "@/assets/gifs/backoffice/Geral.gif"

export default {
  name: "BackOffice",
  computed: {
    campos(){
      return [
        { key: 'title', label: this.$t('Telas.tabelaTit') },
        { key: 'desc', label: this.$t('Telas.tabelaDesc') },
        { key: 'source', label: this.$t('Telas.tabelaDemo')}
      ]
    },
    telas(){
      return[
        { idx: 0, title: this.$t('TelasBO.pacessoTit'), desc: this.$t('TelasBO.pacessoDesc') , source: Logando, alt: this.$t('TelasBO.pacessoAlt')},
        { idx: 1, title: this.$t('TelasBO.novoLoginTit'), desc: this.$t('TelasBO.novoLoginDesc') , source: Novo_Login, alt: this.$t('TelasBO.novoLoginAlt')},
        { idx: 2, title: this.$t('TelasBO.agendamentoTit'), desc: this.$t('TelasBO.agendamentoDesc') , source: Agendamento, alt: this.$t('TelasBO.agendamentoAlt')},
        { idx: 3, title: this.$t('TelasBO.agendaConflTit'), desc: this.$t('TelasBO.agendaConflDesc') , source: Agend_Conflito, alt: this.$t('TelasBO.agendaConflAlt')},
        { idx: 4, title: this.$t('TelasBO.evolDiariaTit'), desc: this.$t('TelasBO.evolDiariaDesc') , source: Evolucao_Diaria, alt: this.$t('TelasBO.evolDiariaAlt')},
      ]
    }
  },
  data(){
    return{
      titulo:'',
      source:'',
      alt:'',
      geral: ''
    }
  },
  methods:{
    showGif(idx){
      console.log(idx.index)
      this.titulo = this.telas[idx.index].title
      this.source = this.telas[idx.index].source
      this.alt = this.telas[idx.index].alt
      this.$refs['modal-gifs'].show()
    }
  },
  created() {
    this.geral = Geral
  }
}
</script>

<style scoped>

</style>