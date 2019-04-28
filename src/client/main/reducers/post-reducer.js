import { FETCH_POSTS, FETCH_POST } from "../config/action-types";

const INITIAL_STATE = {
	collection: [],
	focus: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, collection: action.posts };
		case FETCH_POST:
			return { ...state, focus: action.post };
		default:
			return state;
	}
}
