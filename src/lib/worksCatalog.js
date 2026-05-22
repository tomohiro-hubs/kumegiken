export const WORK_REGIONS = {
  kansai: { key: 'kansai', label: '関西', path: '/works/kansai', description: '兵庫・大阪を中心とした施工事例' },
  kanto: { key: 'kanto', label: '関東', path: '/works/kanto', description: '東京・神奈川・埼玉・千葉の施工事例（順次公開）' },
};

export const WORK_CATEGORIES = {
  waterproofing: '防水工事',
  'large-scale-repair': '大規模修繕',
  painting: '外壁塗装',
  sealing: 'シーリング',
  'leak-repair': '雨漏り補修',
};

export const WORKS_CATALOG = [
  {
    slug: 'nishinomiya-mansion-waterproofing-01',
    title: '屋上ウレタン防水改修工事',
    fullTitle: '西宮市 マンション 屋上防水工事',
    location: '西宮市',
    region: 'kansai',
    buildingType: 'マンション',
    category: 'waterproofing',
    image: '/images/waterproofing-rooftop.jpg',
  },
  {
    slug: 'osaka-building-large-scale-repair-01',
    title: 'オフィスビル大規模修繕工事',
    fullTitle: '大阪市 ビル 大規模修繕工事',
    location: '大阪市',
    region: 'kansai',
    buildingType: 'ビル',
    category: 'large-scale-repair',
    image: '/images/scaffold-install.jpg',
  },
  {
    slug: 'kobe-mansion-painting-01',
    title: '分譲マンション外壁塗装工事',
    fullTitle: '神戸市 マンション 外壁塗装工事',
    location: '神戸市',
    region: 'kansai',
    buildingType: 'マンション',
    category: 'painting',
    image: '/images/building-completed.jpg',
  },
  {
    slug: 'amagasaki-shop-leak-repair-01',
    title: '店舗天井雨漏り補修工事',
    fullTitle: '尼崎市 店舗 雨漏り補修工事',
    location: '尼崎市',
    region: 'kansai',
    buildingType: '店舗',
    category: 'leak-repair',
    image: '/images/leak-repair.jpg',
  },
  {
    slug: 'nishinomiya-building-sealing-01',
    title: '商業ビル外壁シーリング打替え工事',
    fullTitle: '西宮市 ビル 外壁シーリング打替え工事',
    location: '西宮市',
    region: 'kansai',
    buildingType: 'ビル',
    category: 'sealing',
    image: '/images/sealing-work.jpg',
  },
  {
    slug: 'takarazuka-mansion-waterproofing-01',
    title: 'マンション屋上シート防水工事',
    fullTitle: '宝塚市 マンション 屋上シート防水工事',
    location: '宝塚市',
    region: 'kansai',
    buildingType: 'マンション',
    category: 'waterproofing',
    image: '/images/waterproofing-hands.jpg',
  },
  {
    slug: 'osaka-mansion-large-scale-repair-01',
    title: '分譲マンション第1回大規模修繕工事',
    fullTitle: '大阪市 マンション 大規模修繕工事（100戸）',
    location: '大阪市',
    region: 'kansai',
    buildingType: 'マンション',
    category: 'large-scale-repair',
    image: '/images/large-scale-aerial.jpg',
  },
  {
    slug: 'itami-apartment-painting-01',
    title: '賃貸アパート外壁塗装工事',
    fullTitle: '伊丹市 アパート 外壁塗装工事',
    location: '伊丹市',
    region: 'kansai',
    buildingType: 'アパート',
    category: 'painting',
    image: '/images/painting-work.jpg',
  },
  {
    slug: 'ashiya-house-waterproofing-01',
    title: '戸建て住宅バルコニーFRP防水工事',
    fullTitle: '芦屋市 戸建て バルコニーFRP防水工事',
    location: '芦屋市',
    region: 'kansai',
    buildingType: '戸建て',
    category: 'waterproofing',
    image: '/images/crack-inspection.jpg',
  },
  {
    slug: 'suita-factory-waterproofing-01',
    title: '工場屋上アスファルト防水改修工事',
    fullTitle: '吹田市 工場 屋上アスファルト防水改修工事',
    location: '吹田市',
    region: 'kansai',
    buildingType: '工場',
    category: 'waterproofing',
    image: '/images/hero-main.jpg',
  },
];

export const KANTO_DRAFT_CARDS = [
  {
    title: '東京都 マンション 屋上防水改修（準備中）',
    category: 'waterproofing',
    location: '東京都',
    buildingType: 'マンション',
    image: '/images/waterproofing-rooftop.jpg',
  },
  {
    title: '神奈川県 ビル 大規模修繕（準備中）',
    category: 'large-scale-repair',
    location: '神奈川県',
    buildingType: 'ビル',
    image: '/images/scaffold-install.jpg',
  },
  {
    title: '埼玉県 アパート 外壁塗装（準備中）',
    category: 'painting',
    location: '埼玉県',
    buildingType: 'アパート',
    image: '/images/painting-work.jpg',
  },
];

export function getWorksByRegion(regionKey) {
  return WORKS_CATALOG.filter((item) => item.region === regionKey);
}
