import { Container, ContainerName, ContainerImage, Label } from "./styles";
import ImgProfile from "@assets/images/profile.png";
import Image from "next/image";

const Profile: React.FC<{ name: string }> = ({ name }) => {
	return(
		<Container>
			<ContainerImage>
				<Image
					src={ImgProfile}
					width={60}
					height={60}
					objectFit="cover"
					style={{ borderRadius: 50}}
				/>
			</ContainerImage>

			<ContainerName>
				<Label>{name}</Label>
			</ContainerName>
		</Container>
	);
};

export default Profile;
