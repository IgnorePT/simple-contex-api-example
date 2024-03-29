import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

// <BrowserRouter>
// 	<App />
// </BrowserRouter>;

function App() {
	//const user = "Guest!!";
	const [user, setUser] = useState("guest");

	const updateUser = (name) => {
		setUser(name);
	};

	const userLenght = user.length;

	return (
		<>
			<UserContext.Provider
				value={{
					user: user,
					updateUserFn: updateUser,
					userLenght: userLenght,
				}}
			>
				<Header />
				<Main updateUser={updateUser}></Main>
			</UserContext.Provider>
		</>
	);
}

export default App;
