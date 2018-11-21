import { combineReducers } from 'redux';
import { SuggestionsReducer, SuggestionsState } from './suggestions';

export interface RootState {
    suggestions: SuggestionsState
}

export default combineReducers<RootState>({
    suggestions: SuggestionsReducer,
});