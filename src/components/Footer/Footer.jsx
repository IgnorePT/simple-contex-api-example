import { useContext } from "react";
import StupidComponent from "../StupidComponent/StupidComponent";
import { UserContext } from "../../contexts/UserContext";

export default function Footer() {
	//Fornece um hook chamafo useContext
	const userContext = useContext(UserContext);

	return (
		<footer className="footer">
			<span>made with ❤️ by {userContext.user}</span>
			<StupidComponent />
		</footer>
	);
}
