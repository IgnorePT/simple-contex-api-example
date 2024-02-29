import { useContext } from "react";
import PackageIcon from "../icons/PackageIcon";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
	const userContext = useContext(UserContext);
	return (
		<div className="header">
			<div>
				<PackageIcon />
			</div>

			<div className="user">
				<span className="image"></span>
				<span className="name">{userContext.user}</span>
			</div>
		</div>
	);
}
