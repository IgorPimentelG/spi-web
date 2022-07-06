import Head from "next/head";
import { BsPlus } from "react-icons/bs";
import { Title } from "@components/ui";
import { useRouter } from "next/router";
import { Tabs, TabPanel } from "react-tabs";
import { Menu, Table } from "@components/layout";
import {
	RootContainer,
	Container,
	ContainerResearch,
	ContainerStatus,
	ContainerHeader,
	Status,
	ButtonNewResearch,
	LabelButton,
} from "@styles/home-styles";

const HomePage = () => {

	const router = useRouter();

	function newResearchHandler() {
		router.push("research-data");
	}

	return(
		<RootContainer>
			<Head>
				<title>SPI | Pesquisas</title>
			</Head>

			<Menu/>

			<Container>
				<ContainerHeader>
					<Title text="pesquisas"/>
					<ButtonNewResearch onClick={newResearchHandler}>
						<BsPlus color='#FFF' size={20}/>
						<LabelButton>Nova Pesquisa</LabelButton>
					</ButtonNewResearch>
				</ContainerHeader>

				<ContainerResearch>
					<Tabs>
						<ContainerStatus>
							<Status>Atribuída (2)</Status>
							<Status>Andamento (0)</Status>
							<Status>Pedência (0)</Status>
							<Status>Concluídas (0)</Status>
						</ContainerStatus>

						<TabPanel>
							<Table/>
						</TabPanel>
					</Tabs>
				</ContainerResearch>
			</Container>
		</RootContainer>
	);
};

export default HomePage;
