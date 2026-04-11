import type {
  AgeKey,
  OptionKey,
  RoofMethodKey,
  RoofShapeKey,
  StructureKey,
  WallMaterialKey,
  WaterproofKey,
} from '../types/simulation';

type OptionItem<T extends string> = { value: T; label: string };

export const optionItems: OptionItem<OptionKey>[] = [
  { value: 'roof', label: '屋上防水工事' },
  { value: 'exterior', label: '外壁防水工事' },
  { value: 'balcony', label: 'ベランダ・バルコニー防水工事' },
  { value: 'wall', label: '外壁塗装工事' },
  { value: 'general', label: '総合改修工事' },
];

export const ageItems: OptionItem<AgeKey>[] = [
  { value: 'less10', label: '築10年未満' },
  { value: '10to20', label: '築10〜20年' },
  { value: '20to30', label: '築20〜30年' },
  { value: 'over30', label: '築30年以上' },
];

export const structureItems: OptionItem<StructureKey>[] = [
  { value: 'concrete', label: '鉄筋コンクリート造り' },
  { value: 'steel', label: '鉄骨造り' },
  { value: 'mixed', label: '鉄骨鉄筋コンクリート造り' },
];

export const roofShapeItems: OptionItem<RoofShapeKey>[] = [
  { value: 'flat', label: '陸屋根' },
  { value: 'slope', label: '勾配屋根' },
];

export const roofMethodItems: OptionItem<RoofMethodKey>[] = [
  { value: 'paint', label: '屋根塗装' },
  { value: 'cover', label: '屋根カバー工法' },
  { value: 'replace', label: '屋根の葺き替え' },
];

export const wallMaterialItems: OptionItem<WallMaterialKey>[] = [
  { value: 'mortar', label: 'モルタル' },
  { value: 'siding', label: 'サイディング' },
  { value: 'tile', label: 'タイル' },
  { value: 'unknown', label: 'わからない' },
];

export const waterproofItems: OptionItem<WaterproofKey>[] = [
  { value: 'urethane', label: 'ウレタン防水' },
  { value: 'frp', label: 'FRP防水' },
  { value: 'sheet', label: '塩ビ・ゴムシート防水' },
  { value: 'asphalt', label: 'アスファルト防水' },
  { value: 'concrete', label: '保護コンクリート' },
  { value: 'unknown', label: 'わからない' },
];
