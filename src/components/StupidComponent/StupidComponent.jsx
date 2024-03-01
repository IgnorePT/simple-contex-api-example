import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function StupidComponent() {
	const userContext = useContext(UserContext);

	console.log(userContext);
	return <div>{userContext.user} this is stupid</div>;
}

export default StupidComponent;
