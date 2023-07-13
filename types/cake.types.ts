interface ILayerType {
  price1sm: number;
  label: string;
}

export interface ILayersTypes {
  biscuit: ILayerType;
  meringue: ILayerType;
  curd: ILayerType;
}

//
export enum EnumType {
  BISCUIT = 'biscuit',
  MERINGUE = 'meringue',
  CURD = 'curd',
}

export interface ILayers {
  id: number;
  type: EnumType;
  height: number;
}
