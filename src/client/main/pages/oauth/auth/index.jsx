import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { PageContainer, PageHeader } from "enscript-reusables";
import { fetchPosts } from "../../../actions/post-actions";

const AuthorizeOAuth = ({ verifiedOAuthKey }) => {
	useEffect(() => {
		if (!verifiedOAuthKey) window.location.pathname = "/main/login";
	}, []);

	const onGrantAccess = () => {
		// Ideally, the consumer app url here should have been pre-registered with this service-provider
		window.location.href = `http://localhost:17500/main/oauth/redirect?oauth_request_token_key=${verifiedOAuthKey}`;
	};

	const onDenyAccess = () => {
		// Ideally, the consumer app url here should have been pre-registered with this service-provider
		window.location.href = "http://localhost:17500/main/login";
	};

	return (
		<div id="authorize-oauth-page" className="main-page">
			<PageContainer asContainer>
				<PageHeader title="Authorize external access" />

				<br />

				<div className="row">
					<div className="col-6 offset-3">
						<div className="card">
							<div className="card-body">
								<p>OAuth Consumer app is requesting access to your posts.</p>
								<p>Do you want to grant access</p>
								<hr />
								<button className="btn btn-success" onClick={onGrantAccess}>
									Yes
								</button>
								&nbsp;
								<button className="btn btn-danger" onClick={onDenyAccess}>
									No
								</button>
							</div>
						</div>
					</div>
				</div>
			</PageContainer>
		</div>
	);
};

AuthorizeOAuth.propTypes = {
	verifiedOAuthKey: PropTypes.string
};

export default connect(
	state => ({
		verifiedOAuthKey: state.auth.verifiedOAuthKey
	}),
	{ fetchPosts }
)(AuthorizeOAuth);
