<template>
  <div class="fixed top-0 w-full">
    <nav class="bg-blue-500 h-auto pt-1 px-1 pb-1">
      <div class="w-full container py-2 mx-auto flex items-center justify-between flex-wrap items-center">
        <a class="flex px-4 py-2 text-sm font-medium text-white
        bg-black bg-opacity-20 hover:bg-opacity-30 focus:outline-none
        focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" href="#">
          <i class="material-icons text-sm mr-1">
            format_list_bulleted
          </i> Формы
        </a>

        <input class="bg-black text-sm w-1/3 bg-opacity-20 bg-opacity-30 px-2 py-2 text-white placeholder-white" placeholder="Искать..." type="search">

        <Menu as="div" class="relative inline-block text-left">
          <MenuButton class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white
        bg-black bg-opacity-20 hover:bg-opacity-30 focus:outline-none
        focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Войти
            <i
                class="material-icons w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
            >
              expand_more
            </i>
          </MenuButton>
          <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-slot="{ active }">
              <a :class='{ "bg-blue-500": active }' href="/account-settings">
                Account settings
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a :class='{ "bg-blue-500": active }' href="/account-settings">
                Documentation
              </a>
            </MenuItem>
            <MenuItem disabled>
              <span class="opacity-75">Invite a friend (coming soon!)</span>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
    <nav class="bg-blue-900 bg-opacity-90 h-auto">
      <div class="w-full container mx-auto align-middle flex justify-between items-center">
        <div class="flex">
          <router-link as="a" to="/" class="flex px-4 py-2 mr-4 text-sm font-medium text-white border-b-2 border-blue-400">
            <i class="material-icons text-sm mr-1">
              home
            </i> Главная
          </router-link>
          <router-link as="a" to="/quizes" class="flex px-4 py-2 mr-4 text-sm text-gray-300 hover:text-white border-b-2 border-blue-900 hover:border-green-400">
            <i class="material-icons text-sm mr-1">
              assignment
            </i> Опросы
          </router-link>
          <a class="flex px-4 py-2 text-sm text-gray-300 hover:text-white border-b-2 border-blue-900 hover:border-red-400" href="#">
            <i class="material-icons text-sm mr-1">
              quiz
            </i> Тесты
          </a>
        </div>
        <div class="flex">
          <router-link as="a" to="/form/edit/0" class="flex px-4 py-2 mr-4 text-sm font-medium text-white border-b-2 border-blue-400">
            <i class="material-icons text-sm mr-1">
              post_add
            </i> Создать форму
          </router-link>
          <router-link as="a" to="/" class="flex px-4 py-2 mr-4 text-sm font-medium text-white border-b-2 border-blue-400">
            <i class="material-icons text-sm mr-1">
              person
            </i> Пользователи
          </router-link>
          <router-link as="a" to="/quizes" class="flex px-4 py-2 mr-4 text-sm text-gray-300 hover:text-white border-b-2 border-blue-900 hover:border-green-400">
            <i class="material-icons text-sm mr-1">
              science
            </i> Предметы
          </router-link>
          <a class="flex px-4 py-2 text-sm text-gray-300 hover:text-white border-b-2 border-blue-900 hover:border-red-400" href="#">
            <i class="material-icons text-sm mr-1">
              settings
            </i> Настройки
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";

export default {
  name: 'Navbar',
  data: () => ({

  }),
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
}
</script>
