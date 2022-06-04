/* eslint-disable quotes */
import { IoBarChartSharp } from "react-icons/io5";
import { Container, ContainerOptions, Option } from "./styles";
import { AiFillHome, AiFillPieChart, AiOutlinePoweroff, AiOutlineMenu } from "react-icons/ai";

const Menu = () => {
	return(
		<Container>
			<ContainerOptions>
				<Option>
					<AiFillHome/>
					{` início`}
				</Option>

				<Option>
					<AiFillPieChart/>
					{` adminitração`}
				</Option>

				<Option>
					<AiOutlineMenu/>
					{` relatórios`}
				</Option>

				<Option>
					<IoBarChartSharp/>
					{` indicadores de desempenho`}
				</Option>

				<Option>
					<AiOutlinePoweroff/>
					{` sair`}
				</Option>
			</ContainerOptions>
		</Container>
	);
};

export default Menu;
