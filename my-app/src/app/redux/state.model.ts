import { Card } from 'src/app/youtube/models/card.model';

export interface AppState {
  cards: Card[];
  // TODO: add store for videos
/*   videos: SearchItem[]; */
}

export const initialAppState: AppState = {
  cards: [],
/*   videos: [], */
};
