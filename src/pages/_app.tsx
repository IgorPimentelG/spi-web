import "react-toastify/dist/ReactToastify.css";
import "@styles/globals.css";
import Theme from "../theme";
import store from "@store/index";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
	return(
		<Fragment>
			<Theme>
				<Provider store={store}>
					<Component {...pageProps} />
					<ToastContainer
						position="top-right"
						autoClose={5000}
						closeOnClick
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</Provider>
			</Theme>
		</Fragment>
	);
}

export default MyApp;
