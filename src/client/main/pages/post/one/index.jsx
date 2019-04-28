import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { PageContainer, PageHeader, Breadcrumbs } from "enscript-reusables";
import { fetchPost } from "../../../actions/post-actions";

const OnePost = ({ match, post, fetchPost }) => {
	useEffect(() => {
		fetchPost(match.params.id);
	}, []);

	return (
		<div id="all-post-page" className="main-page">
			{post && (
				<PageContainer asContainer>
					<Breadcrumbs crumbs={[{ text: "All Posts", link: "/main/post/all" }, { text: post.title }]} />
					<PageHeader title={post.title} />

					<br />

					<p>{post.content}</p>
				</PageContainer>
			)}
		</div>
	);
};

OnePost.propTypes = {
	match: PropTypes.object,
	post: PropTypes.object,
	fetchPost: PropTypes.func
};

export default withRouter(
	connect(
		state => ({
			post: state.post.focus
		}),
		{ fetchPost }
	)(OnePost)
);
