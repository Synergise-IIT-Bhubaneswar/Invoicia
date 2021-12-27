import { Component } from "react";
import { AuthContextProvider } from "./contexts/authContext";
import { UserContextProvider } from "./contexts/userContext";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="">
        <AuthContextProvider>
          <UserContextProvider>
          <Routes />
          </UserContextProvider>
        </AuthContextProvider>
      </div>
    );
  }
}

export default App;
