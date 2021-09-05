import {
  Action, createReducer, on,
} from '@ngrx/store';
import { addCard, getAllCards } from '../actions/card.action';
import { Card, initialCardsState } from '../../youtube/models/card.model';

export const cardsFeatureKey = 'cards';

const cardsReducerQ = createReducer(
  initialCardsState,
  on(addCard, (state, { card }) => [...state, card]),
  on(getAllCards, (state) => [...initialCardsState, ...state]),
);

export function cardsReducer(state: any, action: any) {
  return cardsReducerQ(state, action);
}
