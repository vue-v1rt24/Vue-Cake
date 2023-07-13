<script setup lang="ts">
import CakeItem from './CakeItem.vue';
import { ILayers } from '../../types/cake.types';

//
defineProps<{
  layers: ILayers[];
}>();

//
const emit = defineEmits<{
  changeHeightClickLeft: [idx: number];
  changeHeightClickRight: [idx: number];
}>();

//
const changeHeightClickLeft = (idx: number) => {
  emit('changeHeightClickLeft', idx);
};

const changeHeightClickRight = (idx: number) => {
  emit('changeHeightClickRight', idx);
};
</script>

<template>
  <div class="cake_layers">
    <CakeItem
      v-for="(layer, idx) in layers"
      :key="layer.id"
      :layer="layer"
      @change-height-click-left="changeHeightClickLeft(idx)"
      @change-height-click-right="changeHeightClickRight(idx)"
    />
  </div>
</template>

<style lang="css" scoped>
.cake_layers {
  width: 50%;
}
</style>
