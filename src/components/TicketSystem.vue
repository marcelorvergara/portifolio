<template>
  <b-container>
    <b-row no-gutters>
      <b-card class="mb-3">
        <b-card-text>
          <b-row>
            <b-col cols="4">
              <img width="180" :src="usoGeral" alt="uso geral da ferramenta">
            </b-col>
            <b-col>
              <b-row>
                <b-col>
                  <span>{{ $t('TelaTS.titulo') }}</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                 <b-form-text>{{ $t('TelaTS.subtitulo') }}</b-form-text>
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
             id="modal-gifs" :title="titulo" size="md">
      <template slot="modal-header-close"><b-icon icon="x-square"></b-icon></template>
      <div class="text-center">
        <img width="380px" :src="source" :alt="alt">
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import UsoGeral from "@/assets/gifs/ticket/uso_geral_android.gif"
import CriacaoSolicitacoes from "@/assets/gifs/ticket/criacao_solicitacoes.gif"
import MedicoSolicitante from "@/assets/gifs/ticket/medico_solicitante.gif"
import Modelo from "@/assets/gifs/ticket/modelo.gif"
import SalvoEEnvio from "@/assets/gifs/ticket/salvo_local_e_envio.gif"

export default {
  name: "TicketSystem",
  computed: {
    campos(){
      return [
        { key: 'title', label: this.$t('Telas.tabelaTit') },
        { key: 'desc', label: this.$t('Telas.tabelaDesc') },
        { key: 'source', label: this.$t('Telas.tabelaDemo')}
      ]
    },
    telas () {
      return [
        { idx: 0, title: this.$t('TelaTS.criaSolicitacaoTit'), desc: this.$t('TelaTS.criaSolicitacaoDesc'), source: CriacaoSolicitacoes, alt: this.$t('TelaTS.criaSolicitacaoAlt')},
        { idx: 1, title: this.$t('TelaTS.medicoSolicitanteTit'), desc: this.$t('TelaTS.medicoSolicitanteDesc'), source: MedicoSolicitante, alt: this.$t('TelaTS.medicoSolicitanteAlt')},
        { idx: 2, title: this.$t('TelaTS.utilizaModeloTit'), desc: this.$t('TelaTS.utilizaModeloDesc'), source: Modelo, alt: this.$t('TelaTS.utilizaModeloAlt')},
        { idx: 3, title: this.$t('TelaTS.salvaEnviaTit'), desc: this.$t('TelaTS.salvaEnviaDesc'), source: SalvoEEnvio, alt: this.$t('TelaTS.salvaEnviaAlt')},
      ]
    }
  },
  data () {
    return {
      usoGeral: UsoGeral,
      titulo:'',
      source:'',
      alt:''
    }
  },
  methods:{
    showGif(idx){
      this.titulo = this.telas[idx.index].title
      this.source = this.telas[idx.index].source
      this.alt = this.telas[idx.index].alt
      this.$refs['modal-gifs'].show()
    }
  }
}
</script>

<style scoped>

</style>