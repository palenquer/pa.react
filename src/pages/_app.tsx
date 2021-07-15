import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Provider as NextAuthProvider } from "next-auth/client";
import useToggle from "../hooks/useToggle";
import "../styles/tailwind-globals.css";

function MyApp({ Component, pageProps }) {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <NextAuthProvider session={pageProps.session}>
      <div className="flex flex-col h-screen">
        <Header toggleIsOn={toggleIsOn} />
        {isOn && <Menu />}
        <Component {...pageProps} />
      </div>
    </NextAuthProvider>
  );
}

export default MyApp;
