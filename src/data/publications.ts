export interface Publication {
  year: number;
  authors: string[];
  title: string;
  venue: string;
  city: string;
  type: 'oral' | 'poster';
  featured: boolean;
  note?: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    year: 2025,
    authors: ['Xiaoyang Liu', 'Yuma Kinoshita'],
    title: 'Pre-training Autoencoder for Acoustic Event Classification via Blinky',
    venue: 'APSIPA Annual Summit and Conference (ASC)',
    city: 'Singapore',
    type: 'oral',
    featured: true,
    note: 'Special Session: Advanced Topics in Audio Understanding of Sound Events, Scenes, and Beyond',
  },
  {
    year: 2025,
    authors: ['劉 笑陽', '木下祐磨'],
    title: '「ブリンキー」による音響イベント分類のための事前学習に基づく音光変換の検討',
    venue: '日本音響学会 秋季研究発表会',
    city: '仙台',
    type: 'poster',
    featured: false,
  },
  {
    year: 2024,
    authors: ['Xiaoyang Liu', 'Yuma Kinoshita'],
    title: 'Sound-To-Light Conversion via Pre-trained Auto-Encoder for Acoustic Scene Classification Using Blinky',
    venue: 'IEICE General Conference',
    city: 'Hiroshima',
    type: 'oral',
    featured: true,
  },
];
