import type { ImageMetadata } from 'astro';

export interface TFeedback {
  name: string;
  country: string;
  feedback: string;
  image: ImageMetadata;
}
