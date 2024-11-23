import { Outlet } from "react-router-dom";
import Main from "../Components/Footer/Main";

function RootLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Main />
      </footer>
    </div>
  );
}

export default RootLayout;
