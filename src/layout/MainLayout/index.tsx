import React from "react";
import { Box } from "@chakra-ui/react";
import { AbsoluteContactSocialButtons, GradientDivider } from "../../components";
import { SiteHead } from "../../layout/SiteHead";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

import strings from "../../resources/strings";

interface IProps {
	disableNavbarGradient?: boolean;
}

export const MainLayout: React.FC<IProps> = (props) => {
	const { disableNavbarGradient, children } = props;

	return (
		<Box minH="100vh">
			<Navbar />
			{!disableNavbarGradient && (
				<GradientDivider />
			)}
			<SiteHead />
			{children}
			<Footer />
			<AbsoluteContactSocialButtons />
		</Box>
	);
};
