export type OptionKey = 'roof' | 'exterior' | 'balcony' | 'wall' | 'general';
export type AgeKey = 'less10' | '10to20' | '20to30' | 'over30';
export type StructureKey = 'concrete' | 'steel' | 'mixed';
export type RoofShapeKey = 'flat' | 'slope';
export type RoofMethodKey = 'paint' | 'cover' | 'replace';
export type WallMaterialKey = 'mortar' | 'siding' | 'tile' | 'unknown';
export type WaterproofKey = 'urethane' | 'frp' | 'sheet' | 'asphalt' | 'concrete' | 'unknown';

export type SimulationState = {
  option?: OptionKey;
  age?: AgeKey;
  structure?: StructureKey;
  roofShape?: RoofShapeKey;
  roofMethod?: RoofMethodKey;
  wallMaterial?: WallMaterialKey;
  waterproof?: WaterproofKey;
  width?: number;
  height?: number;
  floors?: number;
  balconyCount?: number;
};

export type RangePrice = {
  min: number;
  max: number;
};

export type CalculationResult = {
  total: number;
  range: RangePrice;
  details: Record<string, RangePrice>;
  visibleBlocks: Array<'roof' | 'exterior' | 'wall' | 'balcony'>;
  showTotalRow: boolean;
  isSlope: boolean;
};
