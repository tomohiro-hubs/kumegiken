import type { FooterColumn, NavItem } from '../types/site';

export const headerNavItems: NavItem[] = [
  { label: '選ばれる理由', href: '/#reason' },
  {
    label: 'サービス',
    href: '/service',
    items: [
      { label: '大規模修繕事業', href: '/service/large-scale-repair' },
      { label: '防水事業', href: '/service/waterproofing' },
      { label: '外壁塗装', href: '/service/painting' },
      { label: '水中点検', href: '/dive-survey' },
    ],
  },
  { label: '施工事例', href: '/works' },
  { label: '施工の流れ', href: '/#flow' },
  { label: 'お客様の声', href: '/#voice' },
  { label: 'コラム', href: '/column' },
  {
    label: '会社情報',
    href: '/company',
    items: [
      { label: '会社概要', href: '/company' },
      { label: '代表メッセージ', href: '/company/message' },
      { label: 'スタッフ紹介', href: '/company/staff' },
      { label: '対応エリア', href: '/company/area' },
      { label: '沿革', href: '/company/history' },
    ],
  },
];

export const mobileNavItems = [
  { label: 'トップページ', href: '/' },
  { label: '選ばれる理由', href: '/#reason' },
  { label: 'サービス一覧', href: '/service' },
  { label: '施工事例', href: '/works' },
  { label: '施工の流れ', href: '/#flow' },
  { label: 'お客様の声', href: '/#voice' },
  { label: 'コラム', href: '/column' },
  { label: '会社情報', href: '/company' },
  { label: '採用情報', href: '/recruit' },
  { label: '見積もりシミュレーション', href: '/simulation' },
  { label: 'お問い合わせ', href: '/contact' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'サービス',
    links: [
      { label: '大規模修繕事業', href: '/service/large-scale-repair' },
      { label: '防水事業', href: '/service/waterproofing' },
      { label: '外壁塗装', href: '/service/painting' },
      { label: '水中点検', href: '/dive-survey' },
    ],
  },
  {
    title: 'コンテンツ',
    links: [
      { label: '選ばれる理由', href: '/#reason' },
      { label: '施工事例', href: '/works' },
      { label: '施工の流れ', href: '/#flow' },
      { label: 'お客様の声', href: '/#voice' },
      { label: 'コラム', href: '/column' },
      { label: '見積もりシミュレーション', href: '/simulation' },
    ],
  },
  {
    title: '企業情報',
    links: [
      { label: '会社概要', href: '/company' },
      { label: '代表メッセージ', href: '/company/message' },
      { label: '採用情報', href: '/recruit' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
];
