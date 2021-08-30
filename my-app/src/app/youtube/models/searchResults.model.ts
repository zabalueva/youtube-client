import { SearchItem } from './searchItem.model';
import { PageInfo } from './pageInfo.model';

export interface SearchResults {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: SearchItem[]
}
