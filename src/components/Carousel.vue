<template>
  <b-container fluid>
    <b-row>
      <b-col class="center">
        <b-carousel
            :interval="4000"
            id="carousel"
            style="text-shadow: 1px 1px 2px #000; width: 720px"
            v-model="slide"
            fade
            controls
            indicators
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
          <b-link :href="link" target="_blank">
            <b-carousel-slide v-for="(text,idx) in pages" :key="idx"
                              :caption="text.caption">
              <template #img>
                <img :src="getImg(text.value)"
                     class="d-block img-fluid w-100"
                     alt="imagens variadas">
              </template>
              <span>{{ $t(text.text) }}</span>
            </b-carousel-slide>
          </b-link>
        </b-carousel>
      </b-col>
    </b-row>
    <b-row class="mt-3 text-center">
      <b-col>
        <b-img class="p-2" alt="Vue.js" src="https://img.shields.io/badge/Vue.js-gray?style=for-the-badge&logo=vue.js&labelColor=gray"/>
        <b-img class="p-2" alt="Node.js" src="https://img.shields.io/badge/Node.js-gray?style=for-the-badge&logo=node.js&labelColor=gray"/>
        <b-img class="p-2" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-gray?style=for-the-badge&logo=javascript&labelColor=gray"/>
        <b-img class="p-2" alt="CSS" src="https://img.shields.io/badge/CSS3-gray?style=for-the-badge&logo=CSS3&labelColor=gray&logoColor=1572B6"/>
        <b-img class="p-2" alt="firebase" src="https://img.shields.io/badge/Firebase-gray?style=for-the-badge&logo=firebase&labelColor=gray"/>
        <b-img class="p-2" alt="Googlecloud" src="https://img.shields.io/badge/Googlecloud-gray?style=for-the-badge&logo=google%20cloud&labelColor=gray"/>
        <b-img class="p-2" alt="Java" src="https://img.shields.io/badge/Java-gray?style=for-the-badge&logo=java&logoColor=E96420&labelColor=gray&color=gray"/>
<!--        <b-img class="p-2" alt="hibernate" src="https://img.shields.io/badge/Hibernate-gray?style=for-the-badge&logo=hibernate&labelColor=gray&color=ffba00"/>-->
        <b-img class="p-2" alt="Kotlin" src="https://img.shields.io/badge/Kotlin-gray?style=for-the-badge&logo=kotlin&labelColor=gray&color=gray"/>
        <b-img class="p-2" alt="Android" src="https://img.shields.io/badge/Android-gray?style=for-the-badge&logo=android&labelColor=gray&color=gray"/>
<!--        <b-img class="p-2" alt="MySQL" src="https://img.shields.io/badge/MySQL-gray?style=for-the-badge&logo=mysql&logoColor=lightblue&labelColor=gray&color=dfcf57"/>-->
        <b-img class="p-2" alt="postgres" src="https://img.shields.io/badge/postgres-grey?style=for-the-badge&logo=postgresql&labelColor=gray&color=gray"/>

      </b-col>
    </b-row>
    <b-row class="mt-1 text-center">
      <b-col>
        <b-img class="p-2" alt="spring" src="https://img.shields.io/badge/spring-gray?style=for-the-badge&logo=spring&labelColor=gray"/>
        <b-img class="p-2" alt="springboot" src="https://img.shields.io/badge/springboot-gray?style=for-the-badge&logo=springboot&labelColor=gray"/>
        <b-img class="p-2" alt="salesforce" src="https://img.shields.io/badge/salesforce-gray?style=for-the-badge&logo=salesforce&labelColor=gray"/>
        <b-img class="p-2" alt="aws" src="https://img.shields.io/badge/amazonaws-gray?style=for-the-badge&logo=amazonaws&labelColor=gray"/>
        <b-img class="p-2" alt="Python" src="https://img.shields.io/badge/Python-gray?style=for-the-badge&logo=python&labelColor=gray&color=gray"/>
        <b-img class="p-2" alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-gray?style=for-the-badge&logo=bootstrap&labelColor=gray&color=gray"/>
      </b-col>
    </b-row>

    <div class="mt-2">
      <div class="footer text-center">
        <b-link class="mr-4 link" href="mailto:me@marcelo-vergara.codes"><b-icon font-scale="1.4" icon="mailbox"></b-icon> </b-link>
        <b-link class="mr-4 link" href="https://www.linkedin.com/in/mvergara/"><b-icon font-scale="1.4" icon="linkedin"></b-icon></b-link>
        <b-link class="mr-4 link" href="https://twitter.com/OFlamengoFacts"><b-icon font-scale="1.4" icon="twitter"></b-icon></b-link>
        <b-link href="https://github.com/marcelorvergara"><b-icon font-scale="1.4" icon="github"></b-icon></b-link>
        <p>Copyright &#169; 2021 , Marcelo Vergara. {{ $t('CopyRight.cr') }}</p>
      </div>
    </div>
  </b-container>
</template>

<script>

export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
      link:'https://github.com/marcelorvergara',
      pages:[
        { value: 0, text: 'Carousel.github' , caption: 'GitHub', link: 'https://github.com/marcelorvergara'},
        { value: 1, text: 'Carousel.linkedin', caption: 'Linkedin', link: 'https://www.linkedin.com/in/mvergara'},
        { value: 2, text: 'Carousel.email', caption: 'E-mail', link: 'mailto:me@marcelo-vergara.codes'}
      ],
      gmailIcon:''
    }
  },
  methods: {
    getImg(index){
      return `https://picsum.photos/1440/810?grayscale&random=${index}`
    },
    onSlideStart(slide) {
      this.link = this.pages[slide].link
      this.sliding = true
    },
    onSlideEnd(slide) {
      slide
      this.sliding = false
    }
  },

}
</script>

<style scoped>
img{
  border-radius: 6px;
}
.footer{
  color: black;
}
.link{
  text-decoration: none;
}
</style>