<template>
  <main>
    <no-ssr>
    <notifications group="alerts"
                   position="bottom right">
      <template slot="body" slot-scope="props">
        <b-alert :show="props.item.duration || 3000"
                 dismissible
                 :variant="props.item.type || 'info'"
                 @dismissed="props.item.timer=0">
          <p>{{props.item.text}}</p>
          <b-progress :variant="props.item.type"
                      striped
                      :animated="true"
                      :max="props.item.duration"
                      :value="props.item.timer"
                      height="4px">
          </b-progress>
        </b-alert>
      </template>
    </notifications>
    </no-ssr>
    <b-row no-gutters class="mb-3">
      <b-col class="bg-dark">
        <b-navbar toggleable="md" type="dark" variant="dark">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand href="/">My App</b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item class="text-white" :to="'/cars'">{{$t('cars.plural')}}</b-nav-item>
              <b-nav-item class="text-white" :to="'/admin'" v-if="admin">{{$t('admin')}}</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="text-white" :to="'login'" v-if="!$auth.loggedIn">{{$t('login')}}</b-nav-item>
              <b-nav-item class="text-white" @click="logout" v-if="$auth.loggedIn">{{$t('logout')}}</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
    <b-container fluid>
      <nuxt/>
    </b-container>
  </main>
</template>
<script>
  export default {
    methods: {
      logout() {
        this.$auth.logout()
      },
      admin() {
        return this.$auth.loggedIn && this.$auth.user.admin
      }
    }
  }
</script>