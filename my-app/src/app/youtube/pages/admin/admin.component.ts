import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addCard } from 'src/app/redux/actions/card.action';
import { selectAllCards } from 'src/app/redux/selectors/card.selector';
import { Card, initialCardsState } from '../../models/card.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  cards: Card[] = initialCardsState;

  cards$ = this.store.pipe(select(selectAllCards));

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.cards$.subscribe((cards) => {
      this.cards = cards;
    });
  }

  saveCustomCard(card: Card) {
    this.store.dispatch(addCard({ card }));
  }
}
