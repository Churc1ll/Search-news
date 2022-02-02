import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  HANDLE_CLICK,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, setLoading: true };
    case SET_STORIES:
      return {
        ...state,
        setLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => action.payload != story.objectID),
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        page: 0,
        query: action.payload,
      };
    case HANDLE_PAGE:
      if (action.payload === 'dec' && state.page !== 0)
        return {
          ...state,
          page: state.page - 1,
        };
      if (action.payload === 'inc' && state.page < state.nbPages)
        return {
          ...state,
          page: state.page + 1,
        };
      else {
        return {
          ...state,
          page: state.page,
        };
      }
    case HANDLE_CLICK:
      return {
        ...state,
        query: '',
      };

    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
export default reducer;
