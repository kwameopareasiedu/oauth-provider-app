import axios from "axios";
import { utils } from "enscript-reusables";
import { addAndRemoveFlash } from "./flash-actions";
import { addLoadingEntry, removeLoadingEntry } from "./loading-actions";
import { FETCHING_POSTS, FETCHING_POST } from "../config/loading-entries";
import { FETCH_POSTS, FETCH_POST } from "../config/action-types";
import { API_URL } from "../config/url";

const { createUrl, errorMessage } = utils;
const resolveUrl = createUrl.bind(null, API_URL);

export const fetchPosts = () => dispatch => {
	dispatch(addLoadingEntry(FETCHING_POSTS));

	axios
		.get(resolveUrl("post/fetch-all"))
		.then(response => {
			dispatch(removeLoadingEntry(FETCHING_POSTS));
			dispatch({
				type: FETCH_POSTS,
				posts: response.data
			});
		})
		.catch(err => {
			console.error(err);
			dispatch(removeLoadingEntry(FETCHING_POSTS));
			dispatch(addAndRemoveFlash("danger", errorMessage(err, "Unable to fetch posts")));
		});
};

export const fetchPost = id => dispatch => {
	dispatch(addLoadingEntry(FETCHING_POST + id));

	axios
		.get(resolveUrl(`post/fetch/${id}`))
		.then(response => {
			dispatch(removeLoadingEntry(FETCHING_POST + id));
			dispatch({
				type: FETCH_POST,
				post: response.data
			});
		})
		.catch(err => {
			console.error(err);
			dispatch(removeLoadingEntry(FETCHING_POST + id));
			dispatch(addAndRemoveFlash("danger", errorMessage(err, "Unable to fetch post data")));
		});
};
