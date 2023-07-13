<script setup lang="ts">
import { ILayers, ILayersTypes, EnumType } from '../../types/cake.types';

//
defineProps<{
  layer: ILayers;
  layersTypes: ILayersTypes;
}>();

//
const emit = defineEmits<{
  changeType: [type: EnumType];
  changeCount: [num: number];
  layerRemove: [];
}>();
</script>

<template>
  <tr>
    <td>
      <select @change="emit('changeType', ($event.target as HTMLSelectElement).value as EnumType)">
        <option v-for="(layerType, key) in layersTypes" :key="key" :value="key">
          {{ layerType.label }}
        </option>
      </select>
    </td>
    <td>
      <input
        type="number"
        min="0"
        :value="layer.height"
        @change="emit('changeCount', +($event.target as HTMLInputElement).value)"
      />
    </td>
    <td>
      <span @click="emit('layerRemove')" class="cake_params__remove">⛌</span>
    </td>
  </tr>
</template>

<style lang="css" scoped>
td > * {
  width: 100%;
}

.cake_params__remove {
  cursor: pointer;
}
</style>
