<template>
  <div>
    <b-navbar toggleable="lg" class="mb-4" type="dark" variant="dark">
      <router-link :style="{ cursor: 'pointer'}" :to="{ name: 'Carousel'}" custom v-slot="{ navigate }">
        <b-navbar-brand @click="navigate" role="link" class="m-1 ml-5">
          <b-icon icon="house" font-scale="1.4"></b-icon>
        </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse" class="mr-auto">
        <template #default="{ expanded }">
          <b-icon variant="white" v-if="expanded" icon="box-arrow-in-up"></b-icon>
          <b-icon variant="white" v-else icon="box-arrow-in-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="mr-auto ml-5">
          <b-nav-item-dropdown :text="$t('Navbar.prj')">
            <router-link :to="{name: 'BackOffice'}" custom v-slot="{ navigate }">
              <b-dropdown-item @click="navigate" role="link">Back-Office</b-dropdown-item>
            </router-link>
            <b-dropdown-divider></b-dropdown-divider>
            <router-link :to="{name: 'Clipping'}" custom v-slot="{ navigate }">
              <b-dropdown-item @click="navigate" role="link">Clippingz</b-dropdown-item>
            </router-link>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown :text="$t('Navbar.curriculo')">
            <router-link :to="{name: 'Curriculo'}" custom v-slot="{ navigate }">
              <b-dropdown-item @click="navigate" role="link">Português</b-dropdown-item>
            </router-link>
            <b-dropdown-divider></b-dropdown-divider>
            <router-link :to="{name: 'Resume'}" custom v-slot="{ navigate }">
              <b-dropdown-item @click="navigate" role="link">Inglês</b-dropdown-item>
            </router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <div>
          <b-button-group size="sm">
            <b-button variant="outline-dark" @click="changeLocale(languages[0].language)"><flag :iso="languages[0].flag"/> <br>{{ languages[0].title }} </b-button>
            <b-button variant="outline-dark" @click="changeLocale(languages[1].language)"><flag :iso="languages[1].flag"/> <br> {{ languages[1].title }} </b-button>
            <b-button variant="outline-dark" @click="changeLocale(languages[2].language)"><flag :iso="languages[2].flag"/> <br>{{ languages[2].title }} </b-button>
          </b-button-group>
        </div>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: "Home",

  data(){
    return{
      languages: [
        { flag: 'br', language: 'pt_BR', title: 'Português' },
        { flag: 'es', language: 'es', title: 'Español' },
        { flag: 'us', language: 'en', title: 'English' }
      ]
    }
  },
  methods:{
    changeLocale(locale){
      i18n.locale = locale
    }
  }
}
</script>

<style scoped>

/deep/ .nav-item.nav-item.nav-item{
  font-size: 1.05em;
  width: 130px;
  padding: 4px;
}

/deep/ .nav-item.nav-item.nav-item li a {
  color: white;
  background-color: #343A40;
  margin: -10px -9px -9px 0;
  padding: 6px;
}
</style>