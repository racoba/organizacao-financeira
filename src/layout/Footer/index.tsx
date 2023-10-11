import React from "react";
import NextLink from "next/link";
import { observer } from "mobx-react-lite";
import {
	Box,
	Flex,
	Image,
	Text,
	HStack,
	VStack,
} from "@chakra-ui/react";

import { LinkButton } from "~/components";
import { categorySection } from "./categorysection";
import navigationLinks from "../../resources/navigationLinks";
import strings from "../../resources/strings";

export const Footer: React.FC = observer(() => {
	const fontSizeBreakPoint = { md: "md", lg: "xl" };
	const footerStrings = strings.footer;

	return (
		<Flex
			py={10}
			px={{ base: 5, sm: 50, lg: 100 }}
			justifyContent={{ base: "center", md: "space-between" }}
			alignItems="center"
		>

			<VStack
				width={{ base: "70%", md: "30%" }}
				alignItems={{ base: "center", md: "flex-start" }}
				spacing={5}
			>
				<Image
					alt="ciclik-logo"
					src="/logo.png"
					h="5rem"
				/>

				<Box>
					{footerStrings.aboutUs.map((text, index) => (
						<Text
							key={index}
							textColor="gray.500"
							textAlign={{ base: "center", md: "start" }}
						>
							{text}
						</Text>
					))}
				</Box>
				<HStack spacing={4}>
					<NextLink href={strings.externalLinks.facebook}>
						<Image
							alt="Facebook"
							cursor="pointer"
							src="/FacebookIcon.png"
							h="2rem"
						/>
					</NextLink>
					<NextLink href={strings.externalLinks.instagram}>
						<Image
							alt="Instagram"
							cursor="pointer"
							src="/InstagramIcon.png"
							h="2rem"
						/>
					</NextLink>
				</HStack>
			</VStack>

			<Flex >
				<Box
					mr={{ base: 0, md: 5 }}
					display={{ base: "none", md: "flex" }}
					flexDirection="column"
				>
					<Box
						backgroundColor="secondary.500"
						alignSelf="flex-end"
						height={1}
						width={130}
						mr={4}
					/>
					{categorySection.map((navigation) => (

						<NextLink
							key={navigation.name}
							href={navigation.link}
							passHref
						>
							<Text
								cursor="pointer"
								color="primary.600"
								fontSize={fontSizeBreakPoint}
								mr="5"
								fontWeight="bold"
								textAlign="end"
							>
								{navigation.name}
							</Text>
						</NextLink>
					))}
				</Box>

				<Box
					display={{ base: "none", md: "flex" }}
					flexDirection="column"
				>
					<Box
						backgroundColor="secondary.500"
						height={1}
						width={130}
						mr={4}
						alignSelf="flex-end"
					/>
					{navigationLinks.map((navigation) => (
						<LinkButton key={navigation.name} routeLink={navigation.link} color="primary.100">
							<Text
								cursor="pointer"
								color="primary.600"
								fontSize={fontSizeBreakPoint}
								mr="5"
								fontWeight="bold"
								textAlign="end"
							>
								{navigation.name}
							</Text>
						</LinkButton>
					))}
				</Box>
			</Flex>
		</Flex>
	);
});

