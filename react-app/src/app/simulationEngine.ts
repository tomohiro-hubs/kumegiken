import type {
  AgeKey,
  CalculationResult,
  OptionKey,
  RangePrice,
  SimulationState,
  StructureKey,
  WallMaterialKey,
  WaterproofKey,
} from '../types/simulation';

const MIN_FACTOR = 0.85;
const MAX_FACTOR = 1.15;

const toRange = (value: number): RangePrice => ({
  min: Math.round(value * MIN_FACTOR),
  max: Math.round(value * MAX_FACTOR),
});

export const formatRange = (range: RangePrice): string =>
  `${range.min.toLocaleString()}円〜${range.max.toLocaleString()}円`;

const getAgeCoef = (age: AgeKey): number => {
  if (age === 'less10') return 0.8;
  if (age === 'over30') return 1.1;
  return 1;
};

const getStructureCoef = (structure: StructureKey): number => {
  if (structure === 'steel') return 0.9;
  if (structure === 'mixed') return 1.1;
  return 1;
};

const getRoofSizeCoef = (area: number): number => {
  if (area >= 300) return 0.75;
  if (area >= 50) return 1;
  return 1.2;
};

const getRoofShapeCoef = (state: SimulationState): number => {
  if (state.roofShape !== 'slope') return 1;
  let coef = 1.3;
  if (state.roofMethod === 'cover') coef *= 1.8;
  if (state.roofMethod === 'replace') coef *= 2.5;
  return coef;
};

const getWaterproofCoef = (waterproof: WaterproofKey): number => {
  if (waterproof === 'frp') return 1.05;
  if (waterproof === 'sheet') return 1.1;
  if (waterproof === 'asphalt') return 1.15;
  if (waterproof === 'concrete') return 1.2;
  if (waterproof === 'unknown') return 1.1;
  return 1;
};

const getExteriorWallCoef = (wallMaterial: WallMaterialKey): number =>
  wallMaterial === 'mortar' ? 0.5 : 1;

const getPaintWallCoef = (wallMaterial: WallMaterialKey): number =>
  wallMaterial === 'tile' ? 0.8 : 1;

export const optionLabelMap: Record<OptionKey, string> = {
  roof: '屋上防水工事',
  exterior: '外壁防水工事',
  balcony: 'バルコニー防水工事',
  wall: '外壁塗装工事',
  general: '総合改修工事',
};

export const getProgressStatus = (state: SimulationState): { filled: number; total: number } => {
  if (!state.option) return { filled: 0, total: 1 };

  const checks: boolean[] = [
    true,
    Boolean(state.age),
    Boolean(state.structure),
    Boolean(state.waterproof),
    (state.width ?? 0) > 0,
    (state.height ?? 0) > 0,
  ];

  if (state.option === 'exterior' || state.option === 'wall' || state.option === 'general') {
    checks.push((state.floors ?? 0) > 0, Boolean(state.wallMaterial));
  }
  if (state.option === 'balcony' || state.option === 'general') {
    checks.push((state.balconyCount ?? 0) > 0);
  }
  if (state.option === 'roof' || state.option === 'general') {
    checks.push(Boolean(state.roofShape));
    if (state.roofShape === 'slope') checks.push(Boolean(state.roofMethod));
  }

  return { filled: checks.filter(Boolean).length, total: checks.length };
};

export const validateSimulationState = (state: SimulationState): string | null => {
  const option = state.option;
  if (!option || !state.age || !state.structure || !state.waterproof) {
    return '未選択の項目があります。必須項目を選択してください。';
  }
  if ((state.width ?? 0) <= 0 || (state.height ?? 0) <= 0) {
    return '縦・横は1以上で入力してください。';
  }
  if ((option === 'roof' || option === 'general') && !state.roofShape) {
    return '屋根の形状を選択してください。';
  }
  if ((option === 'roof' || option === 'general') && state.roofShape === 'slope' && !state.roofMethod) {
    return '勾配屋根の場合は屋根工法を選択してください。';
  }
  if ((option === 'exterior' || option === 'wall' || option === 'general') && !state.wallMaterial) {
    return '外壁の素材を選択してください。';
  }
  if ((option === 'exterior' || option === 'wall' || option === 'general') && (state.floors ?? 0) <= 0) {
    return '建物の階数を入力してください。';
  }
  if ((option === 'balcony' || option === 'general') && (state.balconyCount ?? 0) <= 0) {
    return 'バルコニーの個数を入力してください。';
  }
  return null;
};

export const calculateSimulation = (state: SimulationState): CalculationResult => {
  const option = state.option as OptionKey;
  const ageCoef = getAgeCoef(state.age as AgeKey);
  const width = state.width as number;
  const height = state.height as number;
  const floors = state.floors ?? 1;
  const balconyCount = state.balconyCount ?? 1;
  const wallMaterial = state.wallMaterial ?? 'unknown';

  const details: Record<string, RangePrice> = {};
  const visibleBlocks: CalculationResult['visibleBlocks'] = [];
  let showTotalRow = false;
  let total = 0;
  const isSlope = state.roofShape === 'slope';

  const roofArea = width * height;
  const wallArea = 2 * (width + height) * floors * 3;
  const wallSizeCoef = wallArea >= 300 ? 0.8 : 1;
  const balconyArea = width * height * balconyCount;

  const calculateRoofTotal = (): number =>
    5000 *
    roofArea *
    ageCoef *
    getRoofSizeCoef(roofArea) *
    getStructureCoef(state.structure as StructureKey) *
    getRoofShapeCoef(state) *
    getWaterproofCoef(state.waterproof as WaterproofKey);

  if (option === 'general') {
    const roofTotal = calculateRoofTotal();
    const exteriorTotal = 800 * wallArea * ageCoef * wallSizeCoef * getExteriorWallCoef(wallMaterial);
    const wallTotal = 2500 * wallArea * ageCoef * wallSizeCoef * getPaintWallCoef(wallMaterial);
    const balconyTotal = balconyArea <= 20 ? 130000 : 4000 * balconyArea * ageCoef;
    total = roofTotal + exteriorTotal + wallTotal + balconyTotal;
    visibleBlocks.push('roof', 'exterior', 'wall', 'balcony');
    showTotalRow = true;

    details.roofTotal = toRange(roofTotal);
    details.exteriorTotal = toRange(exteriorTotal);
    details.wallTotal = toRange(wallTotal);
    details.balconyTotal = toRange(balconyTotal);
    details.total = toRange(total);

    if (isSlope) {
      details.roofCleaningSloped = toRange(roofTotal * 0.05);
      details.roofPrepRemove = toRange(roofTotal * 0.2);
      details.roofMethod = toRange(roofTotal * 0.75);
    } else {
      details.roofCleaning = toRange(roofTotal * 0.05);
      details.roofRepair = toRange(roofTotal * 0.1);
      details.roofPrep = toRange(roofTotal * 0.55);
      details.roofMain = toRange(roofTotal * 0.2);
      details.roofSealing = toRange(roofTotal * 0.1);
    }

    details.exteriorScaffold = toRange(exteriorTotal * 0.3);
    details.exteriorRemove = toRange(exteriorTotal * 0.1);
    details.exteriorWaterproof = toRange(exteriorTotal * 0.6);
    details.wallScaffold = toRange(wallTotal * 0.3);
    details.wallRemove = toRange(wallTotal * 0.1);
    details.wallPaint = toRange(wallTotal * 0.5);
    details.wallAccessory = toRange(wallTotal * 0.1);
    details.balconyCleaning = toRange(balconyTotal * 0.05);
    details.balconyRepair = toRange(balconyTotal * 0.1);
    details.balconyPrep = toRange(balconyTotal * 0.55);
    details.balconyMain = toRange(balconyTotal * 0.2);
    details.balconySealing = toRange(balconyTotal * 0.1);
  } else if (option === 'roof') {
    total = calculateRoofTotal();
    visibleBlocks.push('roof');
    details.roofTotal = toRange(total);
    if (isSlope) {
      details.roofCleaningSloped = toRange(total * 0.05);
      details.roofPrepRemove = toRange(total * 0.2);
      details.roofMethod = toRange(total * 0.75);
    } else {
      details.roofCleaning = toRange(total * 0.05);
      details.roofRepair = toRange(total * 0.1);
      details.roofPrep = toRange(total * 0.55);
      details.roofMain = toRange(total * 0.2);
      details.roofSealing = toRange(total * 0.1);
    }
  } else if (option === 'exterior') {
    total = 800 * wallArea * ageCoef * wallSizeCoef * getExteriorWallCoef(wallMaterial);
    visibleBlocks.push('exterior');
    details.exteriorTotal = toRange(total);
    details.exteriorScaffold = toRange(total * 0.3);
    details.exteriorRemove = toRange(total * 0.1);
    details.exteriorWaterproof = toRange(total * 0.6);
  } else if (option === 'wall') {
    total = 2500 * wallArea * ageCoef * wallSizeCoef * getPaintWallCoef(wallMaterial);
    visibleBlocks.push('wall');
    details.wallTotal = toRange(total);
    details.wallScaffold = toRange(total * 0.3);
    details.wallRemove = toRange(total * 0.1);
    details.wallPaint = toRange(total * 0.5);
    details.wallAccessory = toRange(total * 0.1);
  } else {
    total = balconyArea <= 20 ? 130000 : 4000 * balconyArea * ageCoef;
    visibleBlocks.push('balcony');
    details.balconyTotal = toRange(total);
    details.balconyCleaning = toRange(total * 0.05);
    details.balconyRepair = toRange(total * 0.1);
    details.balconyPrep = toRange(total * 0.55);
    details.balconyMain = toRange(total * 0.2);
    details.balconySealing = toRange(total * 0.1);
  }

  const range = toRange(total);
  return { total, range, details, visibleBlocks, showTotalRow, isSlope };
};
