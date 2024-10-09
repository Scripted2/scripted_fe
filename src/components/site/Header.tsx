import {Box, Flex, IconButton, Text, useMediaQuery} from "@chakra-ui/react";
import {IHeader} from "../../interfaces/header.interface.ts";
import {IoMdArrowBack} from "react-icons/io";

const Header = ({
                    title,
                    showBackButton,
                    onClick,
                }: IHeader) => {
    const [is455wide] = useMediaQuery("(max-width: 455px)");
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            mt={{base: "100px", lg: "110px", xl: "250px"}}
        >
            <Box
                width={{ base: "90%", md: "70%", m: "60%", l: "40%", lg: "30%" }}
                position="relative"
                p="10px"
            >
                {showBackButton && (
                    <IconButton
                        className="scale-on-hover"
                        icon={<IoMdArrowBack/>}
                        aria-label="Go back"
                        onClick={onClick}
                        fontSize="20px"
                        color="#130F26"
                        width="40px"
                        height="40px"
                        backgroundColor="#E6EEFA"
                        _hover={{backgroundColor: "#E6EEFA", transform: "scale(1.1)"}}
                        transition="transform 0.2s ease"
                        position="absolute"
                        left="10px"
                        top="5px"
                    />
                )}
                <Text
                    color="#FFFFFF"
                    fontSize="1.25rem"
                    fontWeight="semibold"
                    textAlign="center"
                    ml={is455wide && showBackButton ? "61px" : "0"}
                >
                    {title}
                </Text>
            </Box>
        </Flex>
    );
}

export default Header;