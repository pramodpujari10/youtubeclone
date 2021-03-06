import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  RELATED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
  SEARCHED_VIDEO_FAIL,
} from '../actionType';

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory:'All',
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: 
        // state.activeCategory===payload.category?[...state.videos,payload.videos]:
        payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory:payload.category,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const selectedVideoReducer=(state={
  loading:true,
  video:null,

},
action)=>{
  const {payload,type}=action
  switch (type) {
    case SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        video:payload,
      };
    case SELECTED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        video:null,
        error:payload,
      };

    default:
      return state;
  }
}
export const relatedVideoReducer=(state={
  loading:true,
  videos:[],

},
action)=>{
  const {payload,type}=action
  switch (type) {
    case RELATED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case RELATED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}


export const searchedVideosReducer=(state={
  loading:true,
  videos:[],

},
action)=>{
  const {payload,type}=action
  switch (type) {
    case SEARCHED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCHED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case SEARCHED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}