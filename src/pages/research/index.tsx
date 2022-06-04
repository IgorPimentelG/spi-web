import Head from "next/head";
import { Tabs, TabPanel } from "react-tabs";
import { Menu, Table } from "@components/layout";
import { Title } from "@components/ui";
import { RootContainer, Container, ContainerResearch, Status, ContainerStatus } from "@styles/home-styles";

const HomePage = () => {
	return(
		<RootContainer>
			<Head>
				<title>SPI | Pesquisas</title>
			</Head>
			<Menu/>
			<Container>
				<Title text="pesquisas"/>

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
