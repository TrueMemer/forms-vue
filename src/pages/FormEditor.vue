<template>
  <div class="h-full grid grid-cols-3 grid-flow-col gap-4">
    <div class="row-span-3 bg-white p-5 border-gray-100 shadow-lg">
      <div class="font-bold">Настройки формы</div>
      <hr class="my-2">
      <div>
        <label class="block text-sm font-medium text-gray-700" for="type">Тип</label>
        <select v-model="quiz.type" class="bg-white mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" name="type" id="type">
          <option selected value="quiz">Опрос</option>
          <option value="test">Тестирование</option>
        </select>
      </div>
      <div class="mt-3">
        <label class="block text-sm font-medium text-gray-700" for="type">Предмет</label>
        <select v-model="quiz.class" class="bg-white mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" name="type" id="type">
          <option selected value="0">Физика</option>
          <option value="1">Химия</option>
        </select>
      </div>
      <div class="mt-3 flex items-start">
        <div class="flex items-center h-5">
          <input id="offers" name="offers" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
        </div>
        <div class="ml-3 text-sm">
          <label for="offers" class="font-medium text-gray-700">Бессрочный</label>
        </div>
      </div>
      <div class="mt-3">
        <label class="block text-sm font-medium text-gray-700" for="type">Количество попыток</label>
        <input type="number" v-model="quiz.max_attempts" class="mt-1 block w-full py-2 text-base border border-opacity-30 pl-3 border-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500" name="type" id="type"/>
      </div>
      <div class="mt-3">
        <label class="block text-sm font-medium text-gray-700" for="type">Ограничение по времени</label>
        <input type="text" v-model="quiz.max_time" class="tml-duration-picker mt-1 block w-full py-2 text-base border border-opacity-30 pl-3 border-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500" name="type" id="type"/>
      </div>
<!--      <div class="mt-3 flex justify-between">-->
<!--        <div class="flex">-->
<!--          <label class="block text-sm font-medium text-gray-700" for="type">Дата начала</label>-->
<!--          <input class="focus:ring-blue-500 focus:border-blue-500 block pl-7 pr-12 sm:text-sm border-gray-300" type="date" placeholder="">-->
<!--        </div>-->
<!--        <div class="flex justify-end">-->
<!--          <label class="block text-sm font-medium text-gray-700" for="type">Дата конца</label>-->
<!--          <input class="focus:ring-blue-500 focus:border-blue-500 block pl-7 pr-12 sm:text-sm border-gray-300" type="date" placeholder="">-->
<!--        </div>-->
<!--      </div>-->
      <button class="mt-3 text-white py-2 w-full bg-green-500">Сохранить</button>
    </div>
    <div class="col-span-3 bg-white p-5 border-gray-100 shadow-lg">
      <input class="w-full text-xl" v-model="quiz.title" type="text" placeholder="Название формы">
    </div>
    <div class="col-span-2">
      <Disclosure v-for="(question, key) in quiz.questions" :key="key" as="div" class="first:mt-0 mt-2 w-full">
        <DisclosureButton class="flex flex-col items-start p-5 w-full bg-white border-gray-100 shadow-lg">
          <div class="w-full flex justify-between">
            <div class="mb-3">{{ quiz.questions[key].text }}</div>
            <Menu class="flex justify-end" as="div">
              <MenuButton>
                <span class="material-icons">
                  more_horiz
                </span>
              </MenuButton>
              <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group hover:text-black flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                    >
                      <span
                          :active="active"
                          class="material-icons w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                      >
                        delete
                      </span>
                      Удалить
                    </button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="font-semibold">{{ questionTypes[quiz.questions[key].type] }}</div>
        </DisclosureButton>
        <DisclosurePanel class="bg-white border-t p-5 border-gray-300 shadow-lg">
          <div>
            <label class="block text-sm font-medium text-gray-700" for="type">Текст вопроса</label>
            <input type="text" v-model="quiz.questions[key].text" class="mt-1 block w-full py-2 text-base border border-opacity-30 pl-3 border-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500" name="type" id="type"/>
          </div>
          <div class="mt-2">
            <label class="block text-sm font-medium text-gray-700" for="type">Тип вопроса</label>
            <select v-model="quiz.questions[key].type" class="mt-1 bg-white block w-full pl-2 py-2 text-base border border-opacity-30 border-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500" name="type" id="type">
              <option v-for="(types, key) in questionTypes" :value="key">{{ types }}</option>
            </select>
          </div>
          <div class="mt-2">
            <div class="mt-3 flex items-start">
              <div class="flex items-center h-5">
                <input v-model="quiz.questions[key].necessary" id="offers" name="offers" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <div class="ml-3 text-sm">
                <label for="offers" class="font-medium text-gray-700">Обязательный</label>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <label class="font-medium text-gray-700">Ответы:</label>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <button @click="addQuestion" class="mt-2 w-full py-2 bg-white border-gray-100 shadow">+</button>
    </div>
  </div>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu, MenuButton, MenuItems, MenuItem, Switch
} from '@headlessui/vue';

import 'html-duration-picker';

export default {
  methods: {
    addQuestion() {
      this.quiz.questions.push({
        text: 'Текст вопроса',
        type: 'single',
        necessary: false,
      })
    }
  },
  data: () => ({
    quiz: {
      title: '',
      type: 'quiz',
      class: 0,
      questions: [{
        text: 'Первый вопрос?',
        type: 'single',
        necessary: false
      }]
    },
    questionTypes: {
      'truefalse': 'Да/Нет',
      'single': 'Один ответ',
      'multi': 'Несколько ответов',
      'text': 'Текстовый ответ',
      'sort': 'Сортировка'
    }
  }),
  components: { Disclosure, DisclosureButton, DisclosurePanel, Switch,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,},
}
</script>
