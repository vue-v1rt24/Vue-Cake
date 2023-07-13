<script setup lang="ts">
import { useCake } from './composables/useCake';
import Cake from './components/cake/Cake.vue';
import Params from './components/params/Params.vue';
import Total from './components/Total.vue';

import { EnumType } from './types/cake.types';

//
const { layersTypes, layers, addLayer, total } = useCake();

//
const chaType = (idx: number, type: EnumType) => {
  layers.value[idx].type = type;
};

const chaCount = (idx: number, count: number) => {
  layers.value[idx].height = count;
};

const layerRemove = (idx: number) => {
  layers.value.splice(idx, 1);
};

const changeHeightClickLeft = (idx: number) => {
  layers.value[idx].height++;
};

const changeHeightClickRight = (idx: number) => {
  layers.value[idx].height--;
};
</script>

<template>
  <div class="container">
    <h1>Конструктор торта</h1>

    <hr />

    <button @click="addLayer">Добавить слой торта</button>

    <template v-if="1">
      <hr />

      <div class="builder">
        <Cake
          :layers="layers"
          @change-height-click-left="changeHeightClickLeft"
          @change-height-click-right="changeHeightClickRight"
        />

        <Params
          :layers-types="layersTypes"
          :layers="layers"
          @cha-type="chaType"
          @cha-count="chaCount"
          @layer-remove="layerRemove"
        />
      </div>

      <hr />

      <Total :total="total" />
    </template>
  </div>
</template>

<style lang="css" scoped>
.container {
  max-width: 1200px;
  padding: 30px;
  margin: 0 auto;
}

/*  */
.builder {
  display: flex;
  column-gap: 30px;
}
</style>
