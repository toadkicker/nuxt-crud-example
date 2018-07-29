<template>
  <b-card v-if="!$auth.loggedIn" :title="$t('users.sessions.new.title')">
    <b-form @submit.prevent="loginSubmit" method="post">
      <b-form-group id="emailGroup"
                    :label="$t('email')" label-for="emailInput">
        <b-form-input id="emailInput" name="user[email]"
                      type="email" v-model="form.email" required autofocus
                      :placeholder="$t('email')"></b-form-input>
      </b-form-group>

      <b-form-group id="passwordGroup"
                    :label="$t('password')" label-for="passwordInput">
        <b-form-input id="passwordInput" name="user[password]"
                      type="password" v-model="form.password" required
                      :placeholder="$t('password')"></b-form-input>
      </b-form-group>

      <b-form-group id="rememberMeCheckbox">
        <b-form-checkbox v-model="form.rememberme" id="rememberMe">
          {{$t('remember_me')}}
        </b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">{{$t('login')}}</b-button>
    </b-form>
    <hr>
    <b-row>
      <b-col>
        <b-link :to="{path: 'register'}">{{$t('users.registrations.new.title')}}</b-link>
      </b-col>
      <b-col class="text-right">
        <b-link :to="{path: 'reset-password'}">{{$t('forgot_password')}}</b-link>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
  export default {
    data: () => {
      return {
        form: {
          email: '',
          password: '',
          rememberme: false
        }
      }
    },
    mounted() {
      if (this.$auth.loggedIn) {
        this.$router.go('/')
      }
    },
    methods: {
      async loginSubmit() {
        await this.$store.dispatch('user/login', this.form)
        .then(this.success)
        .catch(this.unauthorized)
      },
      success() {
        this.$notify({group: 'alerts', text: this.$t('users.sessions.valid')})
        this.$router.push('/');
      },
      unauthorized() {
        this.$notify({group: 'alerts', text: this.$t('users.sessions.invalid')})
      }
    }
  }
</script>
