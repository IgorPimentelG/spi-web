/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export type ConfigInput = {
	name: string;
	label: string;
	attributes?: object;
	register: UseFormRegister<any>;
	hasError: boolean;
}
