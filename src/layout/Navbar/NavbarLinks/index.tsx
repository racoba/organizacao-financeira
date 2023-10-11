import React from "react";
import { useRouter } from "next/router";
import {
	Box,
	Text,
} from "@chakra-ui/react";
import { MobileDrawer, LinkButton } from "../../../components";
import { DrawerContent } from "../DrawerContent";
import navigationLinks from "../../../resources/navigationLinks";
import { HamburgerIcon } from "@chakra-ui/icons";

export const NavbarLinks: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const router = useRouter();
	const fontSizeBreakPoint = { base: "lg", lg: "xl" };
	const mobileBreakPoint = { base: "block", lg: "none" };
	const desktopBreakPoint = { base: "none", lg: "flex" };
	const onClickGTagEvent = (eventName: string) => {
		if (typeof gtag !== "undefined") {
			gtag("event", eventName, {
				event_category: "Site Forms",
			});
		}
	};
	return (
		<>
			<Box d={desktopBreakPoint} alignItems="center">
				{navigationLinks.map((navigation) => (
					<LinkButton
						key={navigation.name}
						routeLink={navigation.link}
						_hover={{
							textDecoration: "none",
						}}
					>
						<Text
							cursor="pointer"
							color="primary.600"
							fontSize={fontSizeBreakPoint}
							mr="5"
							fontWeight={router.pathname === navigation.link.href ? "bold" : "normal"}
							onClick={() => onClickGTagEvent(`${navigation.name} Clicked`)}
						>
							{navigation.name}
						</Text>
					</LinkButton>
				))}
			</Box>
			<Box d={mobileBreakPoint} >
				<HamburgerIcon
					alt="menu-icon"
					w={50}
					h={30}
					color="primary.500"
					onClick={() => setIsOpen(true)}
					cursor="pointer"
				/>
				<MobileDrawer
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					drawerContentProps={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
				>
					<DrawerContent onClose={() => setIsOpen(false)} />
				</MobileDrawer>
			</Box>
		</>
	);
};
