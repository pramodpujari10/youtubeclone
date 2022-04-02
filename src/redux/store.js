import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
  homeVideosReducer,
  selectedVideoReducer,
  relatedVideoReducer,
  searchedVideosReducer,
} from './reducers/video.reducer';

const reducer=initialState=>initialState

const rootReducer = combineReducers({
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  relatedVideo: relatedVideoReducer,
  searchedVideos:searchedVideosReducer,
});


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);


export default store;