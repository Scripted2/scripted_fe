import {Text} from "@chakra-ui/react";
import {IHeader} from "../../interfaces/header.interface.ts";

const Header = ({
                    title
                }: IHeader) => {
    return (
        <>
            <Text
                backgroundColor={"transparent"}
                color={"#FFFFFF"}
                fontSize={"1.25rem"}
                fontWeight={"semibold"}
                textAlign={"center"}
                marginTop={{base: "100px", lg: "110px", xl: "250px"}}
            >
                {title}
            </Text>
        </>
    );
}

export default Header;