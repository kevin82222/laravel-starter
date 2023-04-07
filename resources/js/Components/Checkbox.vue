<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  checked: boolean
  value?: any
}>()

const emit = defineEmits(['update:checked'])

const proxyChecked = computed({
  get() {
    return props.checked
  },

  set(val) {
    emit('update:checked', val)
  },
})
</script>

<template>
  <input
    v-model="proxyChecked"
    type="checkbox"
    :value="value"
    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
  >
</template>
