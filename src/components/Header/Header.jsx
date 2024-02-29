import PackageIcon from "../icons/PackageIcon";

export default function Header() {
	return (
		<div className="header">
			<div>
				<PackageIcon />
			</div>

			<div className="user">
				<span className="image"></span>
				<span className="name">Nelson</span>
			</div>
		</div>
	);
}
