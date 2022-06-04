/* eslint-disable quotes */
import Profile from "./Profile";
import Image from "next/image";
import ImageLogo from "@assets/images/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { useAppDispatch } from "@store/index";
import { IoBarChartSharp } from "react-icons/io5";
import { Container, ContainerLogo, ContainerOptions, Label, Option } from "./styles";
import { AiFillPieChart, AiOutlinePoweroff, AiOutlineSearch } from "react-icons/ai";
import { authActions } from "@store/actions";
import { useRouter } from "next/router";

const Menu = () => {

	const dispatch = useAppDispatch();
	const router = useRouter();
	const { logout } = authActions;

	function onExit() {
		dispatch(logout());
		router.replace("/");
	}

	return(
		<Container>

			<Profile name="francisco fernandes"/>

			<ContainerOptions>
				<Option>
					<AiOutlineSearch/>
					{` Pesquisas`}
				</Option>

				<Option>
					<FaUserAlt/>
					{` usuários`}
				</Option>

				<Option>
					<AiFillPieChart/>
					{` relatórios`}
				</Option>

				<Option>
					<IoBarChartSharp/>
					{` indicadores de desempenho`}
				</Option>

				<Option highlighted onClick={onExit}>
					<AiOutlinePoweroff/>
					{` sair`}
				</Option>
			</ContainerOptions>

			<ContainerLogo>
				<Image
					src={ImageLogo}
					width={100}
					height={100}
					objectFit="contain"
				/>
				<Label>sistema de pesquisa<br/>institucional</Label>
			</ContainerLogo>
		</Container>
	);
};

export default Menu;
