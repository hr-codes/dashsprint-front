<template>
  <div id="ds-logo">
    <img
      v-if="!mode || mode === 'normal'"
      src="@/core/assets/images/icons/ds-logo.jpg"
      alt="Logo DashSprint"
      :class="[size ?? 'md']"
    />

    <img
      v-if="mode && mode === 'white'"
      src="@/core/assets/images/icons/ds-logo-white.png"
      alt="Logo DashSprint"
      :class="[size ?? 'md']"
    />

    <img
      v-if="mode && mode === 'extensive'"
      src="@/core/assets/images/icons/ds-logo-extensive.jpg"
      alt="Logo DashSprint"
      :class="[size ?? 'md']"
    />

    <img
      v-if="mode && mode === 'extensive-white'"
      src="@/core/assets/images/icons/ds-logo-extensive-white.png"
      alt="Logo DashSprint"
      :class="[size ?? 'md']"
    />
  </div>
</template>

<script>
export default {
  props: ['size', 'mode'],
};
</script>

<style lang="scss">
#ds-logo {
  img {
    &.sm {
      width: 45px;
    }

    &.md {
      width: 70px;
    }

    &.lg {
      width: 100px;
    }

    &.xl {
      width: 150px;
    }

    &.xxl {
      width: 200px;
    }

    &.xxxl {
      width: 250px;
    }

    &.xxxxl {
      width: 350px;
    }
  }
}
</style>
