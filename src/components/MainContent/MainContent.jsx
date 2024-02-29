import Footer from "../Footer/Footer";

function MainContent() {
	return (
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
						<input id="name" type="text" placeholder="Insert your profession" />
					</div>

					<button type="submit">Atualizar utilizador</button>
				</form>
			</div>

			<Footer />
		</div>
	);
}

export default MainContent;
