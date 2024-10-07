import {Button, Checkbox, FormControl, Input, InputGroup, InputLeftElement, Text, VStack} from "@chakra-ui/react";
import {FiUser} from "react-icons/fi";
import {MdEmail, MdLock} from "react-icons/md";
import {Link} from "react-router-dom";
import {IAuthForm} from "../../interfaces/form.interface.ts";
import {fieldStyles, leftElementStyles} from "../../styles/components/form.ts";
import {useState} from "react";

const AuthForm = ({
                      buttonText,
                      bottomText,
                      linkText,
                      goTo,
                  }: IAuthForm) => {
    const [showPassword, setShowPassword] = useState(false);

    const revealPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <VStack
                spacing={4}
                maxW={"280px"}
                margin={"0 auto"}
            >
                <FormControl id="first-name" isRequired mt={20}>
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
                        <Input
                            sx={fieldStyles}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                        />
                    </InputGroup>
                </FormControl>
                <FormControl id="confirm-password" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<MdLock color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input
                            sx={fieldStyles}
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                        />
                    </InputGroup>
                </FormControl>
                <Checkbox
                    colorScheme={"whiteAlpha"}
                    color={"#FFFFFF"}
                    fontSize={"1.262rem"}
                    fontWeight={"semibold"}
                    onChange={revealPassword}
                >
                    Show Password
                </Checkbox>
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