<template>
<div class="container mx-auto">
  <h3>{{ $t('TelaMem.desc') }}</h3>
  <p>{{ $t('TelaMem.descricao') }}</p>
  <img width="1100" :src="memGif" :alt="desc">
</div>
</template>

<script>
import MemoryGif from "@/assets/gifs/game/JogoMemoria.gif"
export default {
  name: "Memoria",
  data () {
    return {
      memGif: MemoryGif,
      desc: this.$t('TelaMem.desc')
    }
  }
}
</script>

<style scoped>

</style>