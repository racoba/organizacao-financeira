import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { NavbarLinks } from "./NavbarLinks";

export const Navbar: React.FC = () => (
	<Box
		py={{base:"15px" , lg: "20px"}}
		px={{base: "20px" , lg: "50px"}}
		display="flex"
		justifyContent="space-between"
		alignItems="center"
		__css={{
			boxShadow: "0px 6px 20px -3px rgba(0, 0, 0, 0.45)",
		}}
	>
		<Image
			alt="ciclik-logo"
			src="/logo.png"
			h={{base: "5rem", sm: "5rem"}}
			ml={{base: 0, sm:"1rem", lg: "6rem"}}
		/>
		<NavbarLinks />
	</Box>
);
