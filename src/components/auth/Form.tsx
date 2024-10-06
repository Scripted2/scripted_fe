import {Button, FormControl, Input, InputGroup, InputLeftElement, Text, VStack} from "@chakra-ui/react";
import {FiUser} from "react-icons/fi";
import {MdEmail, MdLock} from "react-icons/md";
import {Link} from "react-router-dom";

interface IAuthForm {
    buttonText: string;
    bottomText?: string;
    linkText?: string;
    goTo: string;
}

const AuthForm = ({
                      buttonText,
                      bottomText,
                      linkText,
                      goTo,
                  }: IAuthForm) => {
    const fieldStyles = {
        backgroundColor: "#474B52",
        borderRadius: "40.38px",
        border: "none",
        height: "58px",
        color: "#FFFFFF",
        textAlign: "center",
        _placeholder: {
            color: "#FFFFFF",
            fontSize: "1.15rem",
        },
        _active: {
            border: "none",
        },
    };

    const leftElementStyles = {
        pointerEvents: "none",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "25px",
    }

    return (
        <>
            <VStack
                spacing={4}
                align="stretch"
                width={"280px"}
                margin={"0 auto"}
            >
                <FormControl id="first-name" isRequired mt={"60px"}>
                    <InputGroup>
                        <InputLeftElement
                            children={<FiUser color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input sx={fieldStyles} type="text" placeholder="First Name"/>
                    </InputGroup>
                </FormControl>
                <FormControl id="last-name" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<FiUser color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input sx={fieldStyles} type="text" placeholder="Last Name"/>
                    </InputGroup>
                </FormControl>
                <FormControl id="username" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<FiUser color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input sx={fieldStyles} type="text" placeholder="Username"/>
                    </InputGroup>
                </FormControl>
                <FormControl id="email" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<MdEmail color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input sx={fieldStyles} type="email" placeholder="Email"/>
                    </InputGroup>
                </FormControl>
                <FormControl id="password" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<MdLock color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input sx={fieldStyles} type="password" placeholder="Password"/>
                    </InputGroup>
                </FormControl>
                <FormControl id="confirm-password" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<MdLock color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input sx={fieldStyles} type="password" placeholder="Confirm Password"/>
                    </InputGroup>
                </FormControl>
                <Button m={"20px auto"}>{buttonText}</Button>

                <Text fontSize={"1.262rem"} color={"#FFFFFF"} textAlign={"center"}>
                    {bottomText}
                    <Text
                        as={"span"}
                        fontWeight={"semibold"}
                        color={"#0C237D"}
                        cursor={"pointer"}
                    >
                        <Link to={goTo}>
                            {linkText}
                        </Link>
                    </Text>
                </Text>
            </VStack>
        </>
    )
}

export default AuthForm;