<template>
  <div id="ds-default-layout" class="row mx-0 align-items-start">
    <header id="ds-topbar" class="col-12 p-0 shadow-sm pe-5 d-flex align-items-center">
      <div id="ds-topbar-menu" class="d-flex justify-content-center me-4">
        <img src="@/core/assets/images/icons/ds-menu.png" alt="Sidebar Toggle" />
      </div>

      <DsLogo size="sm" />
    </header>

    <div id="ds-sidebar" class="p-2"></div>

    <main id="ds-main-content" class="col-12">
      <div class="p-4 bg-white rounded shadow-sm">
        <router-view />
      </div>
    </main>
  </div>
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
@import '@colors';

$topbar-size: 60px;
$sidebar-size: 60px;
$main-padding: 25px;
$main-padding-top: $topbar-size + $main-padding;
$main-padding-left: $sidebar-size + $main-padding;

$topbar-z-index: 20;
$sidebar-z-index: 10;
$main-z-index: 1;

#ds-default-layout {
  #ds-topbar {
    position: fixed;
    height: $topbar-size;
    z-index: $topbar-z-index;
    background-color: #fff;

    #ds-topbar-menu {
      width: $sidebar-size;

      img {
        width: 23px;
        cursor: pointer;
      }
    }
  }

  #ds-sidebar {
    position: fixed;
    height: 100vh;
    width: $sidebar-size;
    z-index: $sidebar-z-index;
    background-color: $color-sidebar;
  }

  #ds-main-content {
    padding: $main-padding;
    padding-left: $main-padding-left;
    padding-top: $main-padding-top;
    z-index: $main-z-index;
    background-color: $color-delta;
    height: 100vh;
  }
}
</style>
