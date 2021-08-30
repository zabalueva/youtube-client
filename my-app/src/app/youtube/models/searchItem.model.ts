import { Snippet } from './snippet.model';
import { Statistics } from './statistics.model';

export interface SearchItem {
  kind: string,
  etag: string,
  id: string | null,
  snippet: Snippet,
  statistics: Statistics
}
