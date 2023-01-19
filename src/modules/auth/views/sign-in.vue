<template>
  <div id="ds-auth-sign-in-component" class="mt-5 pt-2">
    <h2 class="fw-normal">Login</h2>
    <h5 class="text-secondary fw-light">Bem vindo ao DashSprint.</h5>

    <div id="ds-sso-login" class="col-12 p-2 mt-5">
      <button class="ds-button border bg-white">
        <img src="@/core/assets/images/icons/google.png" alt="" class="icon me-3" />

        Logar com o Google
      </button>
    </div>

    <h5 id="ds-login-divider" class="fw-light my-4 py-2">Ou faça login com email</h5>

    <div id="ds-login" class="col-12 p-0">
      <form @submit.prevent="submit">
        <div>
          <label for="" class="col-12 mb-2">E-mail *</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control rounded-pill py-2 px-3"
            v-model="email"
          />
        </div>

        <div class="mt-3">
          <label for="" class="col-12 mb-2">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control rounded-pill py-2 px-3"
            v-model="password"
          />
        </div>

        <div class="d-flex mx-0 align-items-center px-2 mt-2">
          <input type="checkbox" name="keep-logged" id="keep-logged" />
          <label for="keep-logged" class="mb-0 ms-2">Manter logado</label>

          <router-link to="" class="ms-auto">Esqueceu a senha?</router-link>
        </div>

        <div class="pt-1">
          <button type="submit" class="ds-button submit fw-bold text-white mt-4">Login</button>
        </div>

        <div class="mt-4 pt-3 text-secondary">
          Ainda não tem registro? <router-link to="" class="ms-auto">Criar uma conta</router-link>
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
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      if (this.validator()) {
        this.signIn();
      }
    },
    validator() {
      if (!this.email) {
        console.log('preencher email');

        return false;
      }

      if (!this.password) {
        console.log('preencher senha');

        return false;
      }

      return true;
    },
    async signIn() {
      await this.$axios
        .post('/auth/sign-in/', { email: this.email, password: this.password })
        .then((res) => {
          const token = res.data.token;

          localStorage.setItem('access_token', token);

          if (localStorage.getItem('access_token')) {
            this.$router.push({ name: 'core.home' });
          }
        })
        .catch((err) => console.log('err', err));
    },
  },
};
</script>

<style lang="scss">
#ds-auth-sign-in-component {
  input {
    height: 50px;
  }

  #ds-login-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    color: #afafaf !important;

    &::before {
      content: '';
      width: 120px;
      border-bottom: 1px solid #dedede;
      padding: 0;
      height: 0;
      display: inline-block;
      margin-right: 10px;
    }

    &::after {
      content: '';
      width: 120px;
      border-bottom: 1px solid #dedede;
      padding: 0;
      height: 0;
      display: inline-block;
      margin-left: 10px;
    }
  }

  .ds-button {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: 0px;

    .icon {
      width: 30px;
    }
  }

  .submit {
    background: rgb(255, 0, 150);
    background: linear-gradient(90deg, rgba(255, 0, 150, 1) 0%, rgba(255, 132, 0, 1) 95%);
  }
}
</style>
