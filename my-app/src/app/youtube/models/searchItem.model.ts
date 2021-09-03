import { Snippet } from './snippet.model';
import { Statistics } from './statistics.model';

export interface SearchItem {
  kind: string,
  etag: string,
  id: {
    kind?: string,
    videoId: string
  }
  snippet: Snippet,
  statistics: Statistics
}
