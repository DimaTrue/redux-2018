const ADD_VIDEO = 'ADD_VIDEO';
const EDIT_VIDEO = 'EDIT_VIDEO';
const REMOVE_VIDEO = 'REMOVE_VIDEO';

const INIT = [];

export default function videosReducer(state = [], action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_VIDEO:
            const newItem = {
                id: String(Math.random()),
                title: payload.title,
                url: payload.url,
                tags: payload.tags,
            };

            return [newItem, ...state];

            case EDIT_VIDEO:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            name: action.payload.id
          }
        }
        return item;
      });

            case REMOVE_VIDEO:
      return state.filter(item => item.id !== action.payload.id);

        default:
            return state;
    }
}

export const addVideo = ({ title, url, tags }) => ({
    type: ADD_VIDEO,
    payload: { title, url, tags },
});



export const removeVideo = (id) => ({
    type: REMOVE_VIDEO,
    payload: { id },
});

export const editItemCreator = (id, title) => {
    return {
      type: EDIT_VIDEO,
      payload: {
        title,
        id,
      }
    };
  };