<template>
  <div id="ds-auth-sign-in-component" class="mt-5 pt-2">
    <h2 class="fw-normal">Registro</h2>
    <h5 class="text-secondary fw-light mb-5">Criando uma conta.</h5>

    <div id="ds-login" class="col-12 p-0">
      <form @submit.prevent="submit">
        <div>
          <label for="" class="col-12 mb-2">Como devemos te chamar? *</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control rounded-pill py-2 px-3"
            v-model="firstName"
          />
        </div>

        <div class="mt-3">
          <label for="" class="col-12 mb-2">Seu Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control rounded-pill py-2 px-3"
            v-model="email"
          />
        </div>

        <div class="mt-3">
          <label for="" class="col-12 mb-2">Senha *</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control rounded-pill py-2 px-3"
            v-model="password"
          />
        </div>

        <div class="mt-3">
          <label for="" class="col-12 mb-2">Confirmar Senha *</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control rounded-pill py-2 px-3"
            v-model="passwordConfirmation"
          />
        </div>

        <div class="pt-4">
          <button type="submit" class="ds-button submit fw-bold text-white mt-4">
            Registrar-se
          </button>
        </div>

        <div class="mt-4 pt-3 text-secondary">
          Já tem um conta?
          <router-link :to="{ name: 'auth.sign-in' }" class="ms-auto">Fazer Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['$axios'],
  data() {
    return {
      firstName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  },
  methods: {
    async submit() {
      if (this.validator()) {
        await this.createUser();
      }
    },
    validator() {
      // TODO: Colocar mensagens de validação e erro da API em um componente de alerta.
      // FIXME: Criar validações de senha forte, email real e minimo de caracteres no nome.

      if (!this.firstName) return false;

      if (!this.email) return false;

      if (!this.password) return false;

      if (!this.passwordConfirmation) return false;

      if (this.passwordConfirmation !== this.password) return false;

      return true;
    },
    async createUser() {
      await this.$axios
        .post(`${this.URI.USERS}/`, {
          firstName: this.firstName,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          // TODO: Colocar mensagem que deu certo e esta sendo redicionado

          console.log(res);

          this.$router.push({ name: 'auth.sign-in' });
        })
        .catch((err) => {
          console.log(err);

          // FIXME: Tratar erro
        });
    },
  },
};
</script>
