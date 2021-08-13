/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeSearchDuration = (payload) => ({ payload, type: CHANGE_DURATION });
export const addSearchTags = payload => ({ payload, type: ADD_TAGS });
export const removeSearchTags = payload => ({ payload, type: REMOVE_TAGS });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION:
      if (action.payload.type == 'from') {
        // console.log(statePart);
        return {
          ...statePart,
          duration: {
            from: action.payload.value,
            to: statePart.duration.to,
          },
        };
      } else {
        return {
          ...statePart,
          duration: {
            from: statePart.duration.from,
            to: action.payload.value,
          },
        };
      }
    case ADD_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag !== action.payload),
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
