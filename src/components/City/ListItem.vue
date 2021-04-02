<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <!-- <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""> -->
          <svg width="16" height="20" fill="currentColor">
            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
          </svg>
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ detailState.city }}
          </div>
          <div class="text-sm text-gray-500">
            {{ detailState.last_available_date }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">{{ detailState.estimated_population }}</div>
      <div class="text-sm text-gray-500">População</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">{{ detailState.last_available_confirmed }}</div>
      <div class="text-sm text-gray-500">Confirmados</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <div class="text-sm text-gray-900">{{ detailState.last_available_deaths }}</div>
      <div class="text-sm text-gray-500">Obitos</div>
    </td>
    <!-- <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
    </td> -->
  </tr>
</template>

<script>
export default {
  props: ['detailState']
}
</script>
