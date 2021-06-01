<template>
  <div class="bg-blue-400 bg-opacity-50 border border-opacity-75 p-4 w-full">
    <div class="text-gray-900 font-bold text-2xl">Добро пожаловать, Аноним! 👋</div>
    <div class="mt-1 text-gray-700">Здесь собрана вся статистика за сегодня.</div>
  </div>

  <div class="mt-4 grid grid-cols-3 gap-6">
    <div class="bg-white p-5 border-gray-100 shadow-lg">
      <span class="text-4xl text-gray-600 material-icons">
        person_add
      </span>
      <div class="font-bold">Новых пользователей</div>
      <hr class="my-2">
      <div class="text-gray-900 flex items-start mt-2">
        <h2 class="text-gray-900 font-bold text-4xl">2</h2>
        <div class="ml-1 text-white bg-green-500 rounded-full px-1.5 font-semibold text-sm">+50%</div>
      </div>
    </div>

    <div class="bg-white p-5 border-gray-100 shadow-lg">
      <span class="text-4xl text-gray-600 material-icons">
        post_add
      </span>
      <div class="font-bold">Создано тестов</div>
      <hr class="my-2">
      <div class="text-gray-900 flex items-start mt-2">
        <h2 class="text-gray-900 font-bold text-4xl">1</h2>
        <div class="ml-1 text-white bg-red-500 rounded-full px-1.5 font-semibold text-sm">-10%</div>
      </div>
    </div>

    <div class="bg-white p-5 border-gray-100 shadow-lg">
      <span class="text-4xl text-gray-600 material-icons">
        checklist
      </span>
      <div class="font-bold">Пройдено тестов</div>
      <hr class="my-2">
      <div class="text-gray-900 flex items-start mt-2">
        <h2 class="text-gray-900 font-bold text-4xl">5</h2>
        <div class="ml-1 text-white bg-yellow-500 rounded-full px-1.5 font-semibold text-sm">+14%</div>
      </div>
    </div>
<!--    <div class="bg-white col-span-3 p-5 border-gray-100 shadow-lg">-->
<!--      <div class="font-bold">Недавние действия</div>-->
<!--      <hr class="my-2">-->
<!--      <div class="text-gray-900 flex items-start mt-2">-->
<!--        <h2 class="text-gray-900 font-bold text-4xl">5</h2>-->
<!--        <div class="ml-1 text-white bg-yellow-500 rounded-full px-1.5 font-semibold text-sm">+14%</div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script></script>
