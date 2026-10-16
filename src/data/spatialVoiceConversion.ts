export type SpatialVoiceConversionOutputKind = 'publication' | 'presentation';

export interface SpatialVoiceConversionOutput {
  kind: SpatialVoiceConversionOutputKind;
  year: number;
  month?: number;
  title: string;
  authors?: string[];
  venue: string;
  url?: string;
}

export const spatialVoiceConversionOutputs: SpatialVoiceConversionOutput[] = [
  {
    kind: 'publication',
    year: 2026,
    month: 9,
    title: 'Learning Blind Speech Separation and Spatial Propagation via Attention Based Graph Neural Network for Spatial Voice Conversion',
    authors: ['Xiaoyang Liu', 'Shinnosuke Takamichi'],
    venue: '日本音響学会秋季研究発表会',
  },
];
