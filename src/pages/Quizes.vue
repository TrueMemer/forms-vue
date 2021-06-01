<template>
  <div class="flex p-1 mt-20 mb-5 justify-between">
    <div class="flex items-end text-gray-700">
      <div class="font-bold text-xl">Все опросы</div>
      <div class="mx-2 text-gray-400">|</div>
      <div>всего {{ quizes.length }}</div>
    </div>
    <div>
<!--      <div class="text-gray-900 font-semibold">Фильтры: </div>-->

    </div>
  </div>

  <div class="grid grid-cols-3 gap-4">
    <div v-for="(quiz, key) in quizes" :key="key" class="bg-white p-5 border-gray-100 shadow-lg">
      <div class="flex items-center">
        <div class="font-bold text-2xl">{{ quiz.name }}</div>
        <div v-if="quiz.status === 'active'" class="ml-1 text-white bg-green-100 rounded-full px-1.5 py-0.5 border-gray-100 font-semibold text-xs text-green-500">Активен</div>
        <div v-if="quiz.status === 'expired'" class="ml-1 text-white bg-gray-100 rounded-full px-1.5 py-0.5 border-gray-100 font-semibold text-xs text-gray-500">Истек</div>
      </div>
      <hr class="my-3">
      <div class="grid text-gray-600 text-sm grid-cols-3">
        <div class="col-span-3">
          <div class="grid grid-cols-3">
            <div class="inline-flex items-center col-end">
              <i class="material-icons text-sm mr-2">event</i>
              {{ quiz.start_date }}
            </div>
            <div class="inline-flex justify-center">
              <div class="material-icons text-sm">east</div>
            </div>
            <div class="inline-flex items-center col-end">
              <i class="material-icons text-sm mr-2">event</i>
              {{ quiz.end_date }}
            </div>
          </div>
        </div>
        <div class="mt-1">
          <div class="inline-flex items-center col-end">
            <i class="material-icons text-sm mr-2">science</i>
            {{ quiz.class.name }}
          </div>
        </div>
        <div></div>
        <div class="inline-flex items-center col-end">
          <i class="material-icons text-sm mr-2">question_answer</i>
          {{ quiz.questions.length }} вопросов
        </div>
      </div>
      <button :class="['mt-3', 'py-1.5', 'px-3',
        quiz.status === 'active' ? 'bg-blue-500' : '',
        quiz.status === 'expired' ? 'bg-gray-500' : '',
        'text-base', 'text-white']" :disabled="quiz.status !== 'active'">Пройти</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    quizes: [
      {
        name: 'Тест по физике',
        status: 'active',
        start_date: '26 марта, 2021',
        end_date: '26 марта, 2021',
        class: {
          id: 1,
          name: 'Физика'
        },
        questions: []
      },
      {
        name: 'Тест по математике',
        status: 'expired',
        start_date: '26 марта, 2021',
        end_date: '26 марта, 2021',
        class: {
          id: 2,
          name: 'Математика'
        },
        questions: []
      }
    ]
  })
}
</script>
