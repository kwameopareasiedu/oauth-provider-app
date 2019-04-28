import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { ListRenderer, PageContainer, PageHeader } from "enscript-reusables";
import { fetchPosts } from "../../../actions/post-actions";

const AllPosts = ({ posts, fetchPosts }) => {
	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div id="all-post-page" className="main-page">
			<PageContainer asContainer>
				<PageHeader title="My Posts" />

				<br />

				<ListRenderer items={posts} attrs={[{ label: "Title", value: "title" }]} redirect="/main/post/show/:id" />
			</PageContainer>
		</div>
	);
};

AllPosts.propTypes = {
	posts: PropTypes.array,
	fetchPosts: PropTypes.func
};

export default connect(
	state => ({
		posts: state.post.collection
	}),
	{ fetchPosts }
)(AllPosts);
