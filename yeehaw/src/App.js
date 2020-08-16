import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import FeaturedUsers from "./pages/FeaturedUsers";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Search from "./pages/Search";
import { useStateValue } from "./StateProvider";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="App">
			<Router>
				{!user ? (
					<Landing />
				) : (
					<>
						<Header />
						<div className="app-body">
							<Switch>
								<Route exact path="/" component={FeaturedUsers} />
								{/* <Route path="/account" component={Account} />
              	<Route path="/search" component={Search} /> */}
								<Route path="/userRoom">
									<div className="row-flex">
									<Sidebar />
									<Route path="/userRoom/:hostEmail" component={Chat} />
									</div>									
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
