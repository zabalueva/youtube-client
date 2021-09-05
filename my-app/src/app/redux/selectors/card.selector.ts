import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Card } from 'src/app/youtube/models/card.model';

import { AppState } from '../state.model';

export const selectcardsFree = createSelector(
  (state: AppState) => state.cards,
  (cards: Card[]) => cards,
);

export const selectAllCards = createFeatureSelector<Card[]>('cards');

export const selectCards = createSelector(
  selectcardsFree,
  selectAllCards,
  (cards: Card[]) => cards.map((id) => cards.find((card) => card)),
);
