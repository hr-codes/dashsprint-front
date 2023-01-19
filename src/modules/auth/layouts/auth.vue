<template>
  <main id="ds-auth-main" class="p-0 w-100 row mx-0">
    <div id="ds-auth-image" class="col-7 p-0 order-1 d-flex">
      <DsLogo size="xxl" mode="extensive-white" class="mt-auto ms-4 mb-4" />
    </div>

    <div
      id="ds-auth-content"
      class="col-5 shadow-lg"
      :class="[
        $route.name === 'auth.sign-in' ? 'order-2' : '',
        $route.name === 'auth.sign-up' ? 'order-0' : '',
      ]"
    >
      <DsLogo size="md" />

      <router-view />
    </div>
  </main>
</template>

<script>
import DsLogo from '@/core/components/icons/logo.vue';

export default {
  components: {
    DsLogo,
  },
};
</script>

<style lang="scss">
#ds-auth-main {
  height: 100vh;

  #ds-auth-image {
    background-image: url('@/core/assets/images/backgrounds/dashsprint-auth-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    // background: linear-gradient(90deg, rgba(255, 0, 150, 1) 0%, rgba(255, 132, 0, 1) 140%);
  }

  #ds-auth-content {
    padding: 80px 140px;
  }
}
</style>
