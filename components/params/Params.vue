<script setup lang="ts">
import ParamsItem from './ParamsItem.vue';
import { ILayersTypes, ILayers, EnumType } from '../../types/cake.types';

//
defineProps<{
  layersTypes: ILayersTypes;
  layers: ILayers[];
}>();

//
const emit = defineEmits<{
  chaType: [idx: number, type: EnumType];
  chaCount: [idx: number, count: number];
  layerRemove: [idx: number];
}>();

//
const changeType = (idx: number, type: EnumType) => {
  emit('chaType', idx, type);
};

const changeCount = (idx: number, count: number) => {
  emit('chaCount', idx, count);
};

const layerRemove = (idx: number) => {
  emit('layerRemove', idx);
};
</script>

<template>
  <div class="cake_params">
    <table class="cake_params__table" border="1" cellspacing="3">
      <thead>
        <tr>
          <th scope="col">Тип</th>
          <th scope="col">Высота торта (см)</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        <ParamsItem
          v-for="(layer, idx) in layers"
          :key="layer.id"
          :layer="layer"
          :layers-types="layersTypes"
          @change-type="changeType(idx, $event)"
          @change-count="changeCount(idx, $event)"
          @layer-remove="layerRemove(idx)"
        />
      </tbody>
    </table>
  </div>
</template>

<style lang="css" scoped>
.cake_params {
  width: 50%;
}

.cake_params__table {
  width: 100%;
  text-align: center;
}
</style>
