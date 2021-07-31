import { Thumbnail } from './thumbnail.model';

export interface Snippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: {
    default: Thumbnail,
    medium: Thumbnail,
    high: Thumbnail,
    standard: Thumbnail,
    maxres: Thumbnail
  },
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: {
    title: string,
    description: string
  },
  defaultAudioLanguage: string
}
