
import Link from "next/link";
import { FaUpload } from "react-icons/fa";
import { AiFillEye, } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { Column, Container, ContainerIcon, Row, TitleColumn } from "./styles";

const Table = () => {
	return(
		<Container cellSpacing={0}>
			<Column>
				<TitleColumn>cod</TitleColumn>
				<TitleColumn>campus</TitleColumn>
				<TitleColumn>ciclo pnp</TitleColumn>
				<TitleColumn>data ínicio</TitleColumn>
				<TitleColumn>Data Término</TitleColumn>
				<TitleColumn>Ações</TitleColumn>
			</Column>
			<Column>
				<Row>2331</Row>
				<Row>Monteiro</Row>
				<Row>2018.1 - 2020.2</Row>
				<Row>22/03/2022</Row>
				<Row>22/04/2022</Row>
				<Row>
					<ContainerIcon>
						<Link href='/research-data'>
							<FaUpload style={{ margin: 5}}/>
						</Link>
					</ContainerIcon>
					<AiFillEye style={{ margin: 5}}/>
					<BsTrashFill style={{ margin: 5}}/>
				</Row>
			</Column>

			<Column>
				<Row>2331</Row>
				<Row>Monteiro</Row>
				<Row>2018.1 - 2020.2</Row>
				<Row>22/03/2022</Row>
				<Row>22/04/2022</Row>
				<Row>
					<FaUpload style={{ margin: 5}}/>
					<AiFillEye style={{ margin: 5}}/>
					<BsTrashFill style={{ margin: 5}}/>
				</Row>
			</Column>
		</Container>
	);
};

export default Table;
