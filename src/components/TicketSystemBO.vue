<template>
  <div class="container mx-auto">
    <h3>{{ $t('TelaTS.descBo') }}</h3>
    <p>{{ $t('TelaTS.descBoSub') }}</p>
    <img width="1100" :src="boGif" :alt="desc">
  </div>
</template>

<script>
import BackOfficeTS from "@/assets/gifs/ticket/back_office.gif"
export default {
  name: "TicketSystemBO",
  data () {
    return {
      boGif: BackOfficeTS,
      desc: this.$t('TelaTS.backOfficeTS')
    }
  }
}
</script>

<style scoped>

</style>