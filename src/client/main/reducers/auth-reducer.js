import {
	AUTHENTICATION_SUCCESS,
	AUTHENTICATION_FAILED,
	UNAUTHENTICATING_SUCCESS,
	OAUTH_AUTHENTICATION_SUCCESS,
	OAUTH_REDIRECTED
} from "../config/action-types";

const key = "app-is-authenticated";
const INITIAL_STATE = {
	isAuthenticated: localStorage.getItem(key) == "true",
	verifiedOAuthKey: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case AUTHENTICATION_SUCCESS:
			localStorage.setItem(key, "true");
			return { ...state, isAuthenticated: true };
		case OAUTH_AUTHENTICATION_SUCCESS:
			localStorage.setItem(key, "true");
			return {
				...state,
				isAuthenticated: true,
				verifiedOAuthKey: action.verifiedOAuthKey
			};
		case OAUTH_REDIRECTED:
			return { ...state, verifiedOAuthKey: null };
		case AUTHENTICATION_FAILED:
		case UNAUTHENTICATING_SUCCESS:
			localStorage.removeItem(key);
			return { ...state, isAuthenticated: false };
		default:
			return state;
	}
}
