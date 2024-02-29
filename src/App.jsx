import { useState } from "react";

import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export function Main() {
	return (
		<div className="main">
			<WelcomeMessage />
			<div className="content">
				<h2>Update your profile</h2>
				<div className="profile-card">
					<form className="profile-form">
						<div className="form-group">
							<label htmlFor="name">Update your name</label>
							<input id="name" type="text" placeholder="Insert your name" />
						</div>

						<div className="form-group">
							<label htmlFor="name">Update your profession</label>
							<input
								id="name"
								type="text"
								placeholder="Insert your profession"
							/>
						</div>

						<button type="submit">Atualizar utilizador</button>
					</form>
				</div>

				<Footer />
			</div>
		</div>
	);
}

function App() {
	const [user, setUser] = useState(null);

	return (
		<>
			<Header />
			<Main></Main>
		</>
	);
}

export default App;
