<template>
  <b-container>
    <b-row no-gutters>
      <b-card class="mb-3">
        <b-card-text>
          <b-row>
            <b-col cols="4">
              <img width="180" :src="geral" alt="uso geral da ferramenta" class="p-1">
            </b-col>
            <b-col>
              <b-row>
                <b-col>
                  <span>Clippinz - Notícias Selecionadas</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-link target="_blank" href="https://github.com/marcelorvergara/Clippingz"><b-icon icon="github"></b-icon> GitHub</b-link>
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
import Geral from "@/assets/gifs/clippingz/Geral.gif"
import Pesquisa from "@/assets/gifs/clippingz/Pesquisa.gif"
import Inserir from "@/assets/gifs/clippingz/Inserir.gif"
import Excluir from "@/assets/gifs/clippingz/Excluir.gif"

export default {
  name: "Clipping",
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
        { idx: 0, title: this.$t('TelasCl.pesquisaTit'), desc: this.$t('TelasCl.pesquisaDesc') , source: Pesquisa, alt: this.$t('TelasCl.pesquisaAlt')},
        { idx: 1, title: this.$t('TelasCl.inserirTit'), desc: this.$t('TelasCl.inserirDesc') , source: Inserir, alt: this.$t('TelasCl.inserirAlt')},
        { idx: 2, title: this.$t('TelasCl.exluirTit'), desc: this.$t('TelasCl.exluirDesc') , source: Excluir, alt: this.$t('TelasCl.exluirAlt')},
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