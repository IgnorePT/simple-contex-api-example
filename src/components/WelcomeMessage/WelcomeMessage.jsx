import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function WelcomeMessage() {
	const userContext = useContext(UserContext);

	return (
		<div className="welcome-message">
			<div className="text">
				<h1>Welcome {userContext.user}!</h1>
				<span>Share your art with us</span>
			</div>
		</div>
	);
}

export default WelcomeMessage;
