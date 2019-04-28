import "./index.scss";
import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { InputField, LoaderButton, HOCs } from "enscript-reusables";
import { AUTHENTICATING } from "../../config/loading-entries";
import { authenticate } from "../../actions/auth-actions";

const Login = ({ history, loading, handleSubmit, authenticate }) => {
	const interceptAuthenticate = values => {
		authenticate(values, () => {
			history.push("/main/post/all");
		});
	};

	return (
		<div id="login" className="main-page">
			<div className="row">
				<div className="col-4 offset-4">
					<h1 className="text-center">OAuth Service Provider login</h1>

					<form onSubmit={handleSubmit(interceptAuthenticate)}>
						<Field component={InputField} type="email" name="email" label="Email" placeholder="Enter your email" />
						<Field component={InputField} type="password" name="password" label="Password" placeholder="Enter your password" />

						<LoaderButton className="btn btn-primary btn-lg btn-block" isLoading={loading.includes(AUTHENTICATING)}>
							Login
						</LoaderButton>
					</form>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	history: PropTypes.object,
	loading: PropTypes.array,
	fieldValues: PropTypes.object,
	handleSubmit: PropTypes.func,
	authenticate: PropTypes.func
};

export default withRouter(
	connect(
		state => ({ loading: state.loading }),
		{ authenticate }
	)(
		HOCs.withForm({
			name: "LoginForm",
			required: ["email", "password"]
		})(Login)
	)
);
