import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Player } from '../player';

export const adapter = createEntityAdapter<Player>({
  selectId: (sensor: Player) => sensor.id,
  sortComparer: false
});

export interface BooksState extends EntityState<Player> {
  selectedId: number | null;
  action: string | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialstate: BooksState = adapter.getInitialState({
  selectedId: null,
  action: null,
  loading: false,
  loaded: false,
  error: null
});

export const featureKey = 'books';
