export const actions = {
  async me() {
    await this.$auth.fetchUser()
  },
  login({commit, dispatch}, {email, password, rememberme}) {
    return this.$auth.loginWith('local', {data: {email, password, rememberme}})
  },
  async logout() {
    await this.$auth.logout()
  },
  register({dispatch, commit}, form) {
    this.$axios.post('/users', form)
  },
  update({commit, state}, {first_name, last_name, nickname, password, password_confirmation, avatar, dining_preferences, allergies, addresses, telephones, locale}) {
    return this.$axios.put(`/users/${this.$auth.user.id}`, {
      user: {
        first_name,
        last_name,
        nickname,
        password,
        password_confirmation,
        avatar,
        dining_preferences,
        allergies,
        addresses,
        telephones,
        locale
      }
    })
  },
  delete() {
    return this.$axios.delete(`/users/${this.$auth.user.id}`)
  }
};
