<script setup lang="ts">
import { computed } from 'vue';
import { ILayers } from '../../types/cake.types';

//
const props = defineProps<{
  layer: ILayers;
}>();

//
const emit = defineEmits<{
  changeHeightClickLeft: [];
  changeHeightClickRight: [];
}>();

//
const cakeType = computed(() => {
  return `cake_layers__item_${props.layer.type}`;
});

const cakeStyle = computed(() => {
  return { height: props.layer.height + '0px' };
});
</script>

<template>
  <div
    :class="['cake_layers__item', cakeType]"
    :style="cakeStyle"
    @click.left="emit('changeHeightClickLeft')"
    @click.right.prevent="emit('changeHeightClickRight')"
  ></div>
</template>

<style lang="css" scoped>
.cake_layers__item {
  transition: height 0.3s;
}

.cake_layers__item_biscuit {
  background-color: rgb(228, 163, 76);
}

.cake_layers__item_meringue {
  background-color: rgb(184, 184, 184);
}

.cake_layers__item_curd {
  background-color: rgb(231, 229, 229);
}
</style>
