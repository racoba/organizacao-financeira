import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { LinkButton } from "../../../components/LinkButton";
import strings from "../../../resources/strings";
import mainRoutes from "../../../resources/navigationLinks";

interface IProps {
	onClose: () => void;
}

export const DrawerContent: React.FC<IProps> = (props) => {
	const routeStrings = strings.routeNames;
	const fontSizeBreakPoint = {md: "lg", lg: "xl"};

	const { onClose } = props;
	return (
		<Box
			bg="white"
			alignItems="center"
			display="flex"
			flexDirection="column"
		>

			{mainRoutes.map((mainLink) => (
				<LinkButton key={mainLink.name} routeLink={mainLink.link} >
					<Text
						color="primary.500"
						fontSize={fontSizeBreakPoint}
						fontWeight="bold"
						mb="1.5"
					>
						{mainLink.name}
					</Text>
				</LinkButton>
			))}
			<Text
				color="primary.500"
				fontSize={fontSizeBreakPoint}
				fontWeight="bold"
				mb="1.5"
			>
				{routeStrings.androidDownload}
			</Text>
			<Text
				color="primary.500"
				fontSize={fontSizeBreakPoint}
				fontWeight="bold"
				mb="1.5"
			>
				{routeStrings.iosDownload}
			</Text>
			<Text
				color="gray.400"
				fontSize={fontSizeBreakPoint}
				fontWeight="bold"
				onClick={onClose}
				cursor="pointer"
				mb="1.5"
			>
				{strings.components.navbar.close}
			</Text>
		</Box>
	);
};
