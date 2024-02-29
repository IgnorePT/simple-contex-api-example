import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Footer from "../Footer/Footer";

function MainContent() {
	const contextUser = useContext(UserContext);

	// Update user vai ser executada no submit do formulario
	const onSubmitForm = (e) => {
		e.preventDefault();
		contextUser.updateUserFn(e.target[0].value);
	};

	return (
		<div className="content">
			<h2>Update your profile</h2>
			<div className="profile-card">
				<form onSubmit={onSubmitForm} className="profile-form">
					<div className="form-group">
						<label htmlFor="name">Update your name</label>
						{/* Controlled Form
						<input
							id="name"
							type="text"
							placeholder="Insert your name"
							value={user}
							onChange={(e) => {
								updateUser(e.target.value);
							}}
						/> */}
						<input id="name" type="text" placeholder="Insert your name" />
					</div>
					{/* 
					<div className="form-group">
						<label htmlFor="name">Update your profession</label>
						<input id="name" type="text" placeholder="Insert your profession" />
					</div> */}

					<button type="submit">Atualizar utilizador</button>
				</form>
			</div>

			<Footer />
		</div>
	);
}

export default MainContent;
