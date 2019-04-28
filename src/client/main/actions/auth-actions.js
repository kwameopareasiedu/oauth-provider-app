import axios from "axios";
import { utils } from "enscript-reusables";
import { addAndRemoveFlash } from "./flash-actions";
import { addLoadingEntry, removeLoadingEntry } from "./loading-actions";
import { AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILED, UNAUTHENTICATING_SUCCESS, OAUTH_AUTHENTICATION_SUCCESS } from "../config/action-types";
import { AUTHENTICATING, UNAUTHENTICATING } from "../config/loading-entries";
import { API_URL } from "../config/url";

const { createUrl, errorMessage } = utils;
const resolveUrl = createUrl.bind(null, API_URL);

export const authenticate = (values, successCallback) => dispatch => {
	dispatch(addLoadingEntry(AUTHENTICATING));

	axios
		.post(resolveUrl("login"), values)
		.then(response => {
			dispatch(removeLoadingEntry(AUTHENTICATING));

			if (response.data.verifiedOAuthKey) {
				dispatch({ type: OAUTH_AUTHENTICATION_SUCCESS, verifiedOAuthKey: response.data.verifiedOAuthKey });
			} else dispatch({ type: AUTHENTICATION_SUCCESS });

			dispatch(addAndRemoveFlash("success", "Authenticated"));
			if (successCallback) successCallback(response.data.verifiedOAuthKey);
		})
		.catch(err => {
			console.error(err);
			dispatch(removeLoadingEntry(AUTHENTICATING));
			dispatch({ type: AUTHENTICATION_FAILED });
			dispatch(addAndRemoveFlash("danger", errorMessage(err, "Authentication failed!")));
		});
};

export const logout = () => dispatch => {
	dispatch(addLoadingEntry(UNAUTHENTICATING));

	axios
		.get(resolveUrl("logout"))
		.then(() => {
			dispatch(removeLoadingEntry(UNAUTHENTICATING));
			dispatch({ type: UNAUTHENTICATING_SUCCESS });
		})
		.catch(err => {
			console.error(err);
			dispatch(removeLoadingEntry(UNAUTHENTICATING));
			dispatch(addAndRemoveFlash("danger", errorMessage(err, "Unable to logout. Please try again")));
			dispatch(handleAuthFailed(err));
		});
};

export const handleAuthFailed = err => {
	if (err && err.response && err.response.status == 401) {
		return { type: AUTHENTICATION_FAILED };
	}

	return { type: null };
};
