import { createAction, props } from '@ngrx/store';
import { Player, PlayerId } from '../player';

export enum type {
  SELECT_BOOK            = '[ Book ] Select a Book',
  FIND_ALL_BOOKS         = '[ Book ] Find All Books',
  FIND_ALL_BOOKS_FAIL    = '[ Book ] Find All Books Fail',
  FIND_ALL_BOOKS_SUCCESS = '[ Book ] Find All Books Success',
  FIND_ONE_BOOK          = '[ Book ] Find One Book',
  FIND_ONE_BOOK_FAIL     = '[ Book ] Find One Book Fail',
  FIND_ONE_BOOK_SUCCESS  = '[ Book ] Find One Book Success',
  CREATE_BOOK            = '[ Book ] Create Book',
  CREATE_BOOK_FAIL       = '[ Book ] Create Book Fail',
  CREATE_BOOK_SUCCESS    = '[ Book ] Create Book Success',
  UPDATE_BOOK            = '[ Book ] Update Book',
  UPDATE_BOOK_FAIL       = '[ Book ] Update Book Fail',
  UPDATE_BOOK_SUCCESS    = '[ Book ] Update Book Success',
  PATCH_BOOK             = '[ Book ] Patch Book',
  PATCH_BOOK_FAIL        = '[ Book ] Patch Book Fail',
  PATCH_BOOK_SUCCESS     = '[ Book ] Patch Book Success',
  DELETE_BOOK            = '[ Book ] Delete Book',
  DELETE_BOOK_FAIL       = '[ Book ] Delete Book Fail',
  DELETE_BOOK_SUCCESS    = '[ Book ] Delete Book Success',
}

export const SelectBook          = createAction(type.SELECT_BOOK, props<{ id: number }>());
export const findAllBooks        = createAction(type.FIND_ALL_BOOKS);
export const findAllBooksFail    = createAction(type.FIND_ALL_BOOKS_FAIL, props<{ error: any }>());
export const findAllBooksSuccess = createAction(type.FIND_ALL_BOOKS_SUCCESS, props<{ books: Array<Player> }>());
export const findOneBook         = createAction(type.FIND_ONE_BOOK, props<{ id: number }>());
export const findOneBookFail     = createAction(type.FIND_ONE_BOOK_FAIL, props<{ error: any }>());
export const findOneSuccess      = createAction(type.FIND_ONE_BOOK_SUCCESS, props<{ book: Player }>());
export const createBook          = createAction(type.CREATE_BOOK, props<{ book: Player }>());
export const createBookFail      = createAction(type.CREATE_BOOK_FAIL, props<{ error: any }>());
export const createBookSuccess   = createAction(type.CREATE_BOOK_SUCCESS, props<{ book: Player }>());
export const updateBook          = createAction(type.UPDATE_BOOK, props<{ book: Player }>());
export const updateBookFail      = createAction(type.UPDATE_BOOK_FAIL, props<{ error: any }>());
export const updateBookSuccess   = createAction(type.UPDATE_BOOK_SUCCESS, props<{ book: Player }>());
export const patchBook           = createAction(type.PATCH_BOOK, props<{ id: number, book: Partial<Player> }>());
export const patchBookFail       = createAction(type.PATCH_BOOK_FAIL, props<{ error: any }>());
export const patchBookSuccess    = createAction(type.PATCH_BOOK_SUCCESS, props<{ book: Player }>());
export const deleteBook          = createAction(type.DELETE_BOOK, props<{ id: number }>());
export const deleteBookFail      = createAction(type.DELETE_BOOK_FAIL, props<{ error: any }>());
export const deleteBookSuccess   = createAction(type.DELETE_BOOK_SUCCESS, props<{ id: number }>());
