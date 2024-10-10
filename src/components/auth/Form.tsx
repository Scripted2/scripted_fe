import {Button, Checkbox, FormControl, Input, InputGroup, InputLeftElement, Text, VStack} from "@chakra-ui/react";
import {FiUser} from "react-icons/fi";
import {MdEmail, MdLock} from "react-icons/md";
import {Link} from "react-router-dom";
import {IAuthForm} from "../../interfaces/auth.interface.ts";
import {fieldInputStyles, leftElementStyles} from "../../styles/components/form.ts";
import {useState} from "react";

const AuthForm = ({
                      buttonText,
                      bottomText,
                      linkText,
                      goTo,
                      buttonAction,
                      onInputChange,
                      formData,
                      errors,
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
                <FormControl
                    id="first-name"
                    isRequired
                    mt={"5vh"}
                >
                    <InputGroup>
                        <InputLeftElement
                            children={<FiUser color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input
                            name={"first_name"}
                            sx={{
                                ...fieldInputStyles,
                                border: errors?.first_name ? "2px solid red" : ""
                            }}
                            type="text"
                            placeholder="First Name"
                            onChange={onInputChange}
                            value={formData.first_name}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl id="last-name" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<FiUser color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input
                            name={"last_name"}
                            sx={{
                                ...fieldInputStyles,
                                border: errors?.last_name ? "2px solid red" : ""
                            }}
                            type="text"
                            placeholder="Last Name"
                            onChange={onInputChange}
                            value={formData.last_name}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl id="username" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<FiUser color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input
                            name={"username"}
                            sx={{
                                ...fieldInputStyles,
                                border: errors?.username ? "2px solid red" : ""
                            }}
                            type="text"
                            placeholder="Username"
                            onChange={onInputChange}
                            value={formData.username}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl id="email" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<MdEmail color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input
                            name={"email"}
                            sx={{
                                ...fieldInputStyles,
                                border: errors?.email ? "2px solid red" : ""
                            }}
                            type="email"
                            placeholder="Email"
                            onChange={onInputChange}
                            value={formData.email}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl id="password" isRequired>
                    <InputGroup>
                        <InputLeftElement
                            children={<MdLock color="white" size={"32px"}/>}
                            sx={leftElementStyles}
                        />
                        <Input
                            name={"password"}
                            sx={{
                                ...fieldInputStyles,
                                border: errors?.password ? "2px solid red" : ""
                            }}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={onInputChange}
                            value={formData.password}
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
                            name={"confirm_password"}
                            sx={{
                                ...fieldInputStyles,
                                border: errors?.confirm_password ? "2px solid red" : ""
                            }}
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            onChange={onInputChange}
                            value={formData.confirm_password}
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
                <Button m={"20px auto"} onClick={buttonAction}>{buttonText}</Button>
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