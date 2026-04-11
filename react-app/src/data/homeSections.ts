export type ReasonItem = {
  no: string;
  title: string;
  body: string;
};

export const reasonItems: ReasonItem[] = [
  {
    no: '01',
    title: '正直な建物診断',
    body: '本当に必要な工事だけを提案。不要な工事で費用を膨らませません。',
  },
  {
    no: '02',
    title: '自社職人の直営施工',
    body: '自社職人による施工で品質がぶれにくく、安定した仕上がりを実現します。',
  },
  {
    no: '03',
    title: '一貫した管理体制',
    body: '診断から施工まで一社完結。中間コストを抑え、適正価格でご提供します。',
  },
];

export type ServiceItem = {
  title: string;
  body: string;
  href: string;
};

export const serviceItems: ServiceItem[] = [
  {
    title: '大規模修繕事業',
    body: '建物の資産価値を維持するための診断から施工までを一貫対応。',
    href: '/service/large-scale-repair',
  },
  {
    title: '防水事業',
    body: '屋上・外壁・バルコニーの防水で、雨漏りと劣化を予防します。',
    href: '/service/waterproofing',
  },
  {
    title: '外壁塗装',
    body: '下地処理から仕上げまで、耐久性と美観を両立した外壁塗装。',
    href: '/service/painting',
  },
  {
    title: '水中点検',
    body: 'ドローンと専門技術を活用し、目視しづらい箇所を安全に点検。',
    href: '/dive-survey',
  },
];

export const flowItems = [
  'お問い合わせ・ヒアリング',
  '現地調査・建物診断',
  '診断レポート・お見積もり提示',
  '施工開始・品質管理',
  '完了検査・お引き渡し',
  'アフターフォロー',
];

export type VoiceItem = {
  quote: string;
  author: string;
};

export const voiceItems: VoiceItem[] = [
  {
    quote:
      '提案が明確で、不要な工事をすすめられなかった点が信頼できました。工期や連絡も丁寧でした。',
    author: '西宮市 / マンション管理組合',
  },
  {
    quote:
      '外壁塗装後の見た目が想像以上で、入居者からの評判も良くなりました。対応もスムーズでした。',
    author: '神戸市 / オーナー様',
  },
  {
    quote:
      '雨漏りの原因を的確に特定してもらえたので、再発せず安心しています。説明が分かりやすかったです。',
    author: '大阪市 / ビル管理会社',
  },
];
