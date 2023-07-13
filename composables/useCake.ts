import { computed, ref } from 'vue';
import { ILayersTypes, EnumType, ILayers } from '../types/cake.types';

export const useCake = () => {
  const layersTypes = ref<ILayersTypes>({
    biscuit: { price1sm: 50, label: 'Бисквит' },
    meringue: { price1sm: 100, label: 'Безе' },
    curd: { price1sm: 60, label: 'Творожный' },
  });

  const layers = ref<ILayers[]>([]);

  const defaultLayerType = ref<EnumType>(EnumType.BISCUIT);

  const defaultHeight = ref(4);

  //
  const total = computed(() => {
    return layers.value.reduce(
      (acc, item) => acc + item.height * layersTypes.value[item.type].price1sm,
      0,
    );
  });

  //
  const addLayer = () => {
    layers.value.push({
      id: new Date().getTime(),
      type: defaultLayerType.value,
      height: defaultHeight.value,
    });
  };

  //
  return {
    layersTypes,
    layers,
    addLayer,
    total,
  };
};
