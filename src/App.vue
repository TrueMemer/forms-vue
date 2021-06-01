<template>
  <navbar/>
  <main class="container mt-28 mx-auto">
    <router-view></router-view>
  </main>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
};
</script>
