export type SpatialVoiceConversionOutputKind = 'publication' | 'presentation';

export interface SpatialVoiceConversionOutput {
  kind: SpatialVoiceConversionOutputKind;
  year: number;
  title: string;
  venue: string;
  url?: string;
}

// Add verified project-specific records here as they become available.
export const spatialVoiceConversionOutputs: SpatialVoiceConversionOutput[] = [];
