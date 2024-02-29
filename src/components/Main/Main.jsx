import MainContent from "../MainContent/MainContent";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

export default function Main() {
	return (
		<div className="main">
			<WelcomeMessage />
			<MainContent />
		</div>
	);
}
