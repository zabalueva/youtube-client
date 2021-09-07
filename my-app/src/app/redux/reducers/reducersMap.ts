import { ActionReducerMap } from '@ngrx/store';
import { cardsReducer } from './card.reducer';

import { AppState } from '../state.model';

export const reducersMap: ActionReducerMap<AppState> = {
  cards: cardsReducer,
};
