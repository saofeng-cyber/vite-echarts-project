<template>
  <svg aria-hidden="true" :width="width" :height="height">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  prefix?: string;
  name: string;
  color?: string | undefined;
  width?: number;
  height?: number;
}
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  name: '',
  color: undefined,
  width: 16,
  height: 16
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
