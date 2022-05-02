<template>
  <b-container>
    <b-card>
      <b-card-title> <span>{{ $t('Curr.pt')}}</span></b-card-title>
      <b-link href="https://marcelo-vergara.web.app/curriculo.pdf"><b-img width="120px" :src="curriculoPNG" alt="mini curriculo"></b-img></b-link>
    </b-card>
    <b-card-img> </b-card-img>
  </b-container>
</template>

<script>
import curriculoPT from '@/assets/curriculo.png'

export default {
  name: "Curriculo",
  components:{

  },
  data(){
    return {
      curriculoPNG: curriculoPT
    }
  }
}
</script>

<style scoped>
span{
  font-size: 22px;
}
</style>