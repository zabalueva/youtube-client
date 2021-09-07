import { createAction, props } from '@ngrx/store';
import { Card } from '../../youtube/models/card.model';

export const addCard = createAction(
  '[Card List] Add Card',
  props<{ card: Card }>(),
);

export const getAllCards = createAction('[Card List/serv] Get Card');
