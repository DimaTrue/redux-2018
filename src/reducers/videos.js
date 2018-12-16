const ADD_VIDEO = 'ADD_VIDEO';
const EDIT_VIDEO = 'EDIT_VIDEO';
const REMOVE_VIDEO = 'REMOVE_VIDEO';

const INIT = [];

export default function videosReducer(state = INIT, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_VIDEO:
			const newItem = {
				id: String(Math.random()),
				title: payload.title,
				url: payload.url,
				tags: payload.tags,
			};
			return [newItem, ...state];

		case EDIT_VIDEO:
			let newList = state.map(el => {
				if (el.id === payload.id) {
					el.title = payload.title;
					el.tags = payload.tags;
				}
				return el;
			});
			return newList;

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

export const editVideo = ({ id, title, tags }) => {
	return {
		type: EDIT_VIDEO,
		payload: {
			id,
			title,
			tags
		}
	};
};
