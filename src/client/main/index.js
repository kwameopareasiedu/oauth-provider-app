import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

import Base from "./pages/base";
import Login from "./pages/login";
import AllPosts from "./pages/post/all";
import OnePost from "./pages/post/one";
import Page404 from "./pages/404";

const store = applyMiddleware(ReduxThunk)(createStore)(reducers);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/main" exact component={Base} />

				<Route path="/main/login" exact component={Login} />
				<Route path="/main/post/all" exact component={AllPosts} />
				<Route path="/main/post/show/:id" exact component={OnePost} />

				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);
