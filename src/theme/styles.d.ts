import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			text: {
				primary: string;
				secondary: string;
				tertiary: string;
			}

			background: {
				primary: string;
				secondary: string;
				tertiary: string;
			}

			input: {
				normal: string;
				focus: string;
				error: string;
			}

			link: {
				primary: string;
			}
		}
	}
}
