<template>
  <b-container>
    <b-card>
      <b-card-title> <span>{{ $t('Curr.en')}}</span></b-card-title>
      <b-link href="https://marcelo-vergara.web.app/resume.pdf"><b-img width="120px" :src="curriculoPNG" alt="mini curriculo"></b-img></b-link>
    </b-card>
    <b-card-img> </b-card-img>
  </b-container>
</template>

<script>
import curriculoEN from "@/assets/resume.png";

export default {
  name: "Resume",
  components:{

  },
  data(){
    return {
      //miniatura
      curriculoPNG: curriculoEN
    }
  }
}
</script>

<style scoped>
span{
  font-size: 22px;
}
</style>