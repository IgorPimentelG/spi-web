import { ReactNode } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const Theme: React.FC<{
	children: ReactNode
}> = ({ children }) => {

	const config: DefaultTheme = {
		colors: {
			text: {
				primary: "#666A7C",
				secondary: "#FFFFFF",
				tertiary: "#5CB85C"
			},

			background: {
				primary: "#EEEEEE",
				secondary: "#5CB85C",
				tertiary: "#292929"
			},

			input: {
				normal: "#cccccc",
				focus: "#5CB85C",
				error: "#D93644"
			},

			link: {
				primary: "#527B3E"
			}
		}
	};

	return(
		<ThemeProvider theme={config}>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
