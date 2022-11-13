import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Player } from '../player';
import * as bookActions from '../store/book.actions';
import * as bookSelector from '../store/book.selectors';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit, OnDestroy {
  @Input() book!: Player;
  private bookStore$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store
  ) {
    this.bookStore$ = new Subscription();
  }

  ngOnInit(): void {
    this.bookStore$.add(
      this.store.select(bookSelector.isDeleteSuccess)
        .pipe(filter(done => !!done))
        .subscribe(() => this.snackBar.open('Book deleted!', 'OK', { duration: 2000 })),
    );
  }

  ngOnDestroy(): void {
    this.bookStore$?.unsubscribe();
  }

  onChangeFavoriteState(): void {
    const fieldsToUpdate = { favorite: !this.book.favorite };
    this.store.dispatch(bookActions.patchBook({ id: this.book.id, book: fieldsToUpdate }));
  }

  onClickRemoveBook(id: number): void {
    this.store.dispatch(bookActions.deleteBook({ id }));
  }

  onBookDetailNavigate(book: Player): void {
    this.router.navigate([book.id], { relativeTo: this.activatedRoute });
  }

}
