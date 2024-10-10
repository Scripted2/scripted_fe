import {ISignUpSecondStep} from "../../interfaces/auth.interface.ts";
import {Box, Button, Flex} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {ICategory} from "../../interfaces/category.interface.ts";
import {environment} from "../../services/environment.service.ts";

const SignUpSecondStep = ({
                              onSubmit,
                              updateFavoriteCategories,
                          }: ISignUpSecondStep) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    useEffect(() => {
        axios.get(`${environment.backend_api_url}${environment.api.categories}`)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleCategorySelect = (categoryId: number) => {
        const updatedCategories = selectedCategories.includes(categoryId)
            ? selectedCategories.filter(id => id !== categoryId)
            : [...selectedCategories, categoryId];

        setSelectedCategories(updatedCategories);
        updateFavoriteCategories(updatedCategories);
    };

    return (
        <>
            <Box
                margin="5vh auto"
                maxW="700px"
                textAlign="center"
                position="relative"
            >
                <Flex
                    wrap="wrap"
                    justify="space-evenly"
                    position="relative"
                    left="50%"
                    transform="translateX(-50%)"
                >
                    {categories && categories.map((category: ICategory) => (
                        <Flex
                            className={"scale-on-hover"}
                            as="label"
                            key={category.id}
                            align="center"
                            justify="center"
                            bg={selectedCategories.includes(category.id) ? "#3C49A3" : "#474B52"}
                            color="#FFFFFF"
                            borderRadius="40.38"
                            w="fit-content"
                            px={4}
                            py={2}
                            m="10px"
                            cursor="pointer"
                            fontSize="md"
                            fontWeight="semibold"
                            _hover={{bg: "gray.600"}}
                            boxShadow={selectedCategories.includes(category.id) ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"}
                            onClick={() => handleCategorySelect(category.id)}
                        >
                            #{category.name}
                        </Flex>
                    ))}
                </Flex>
                <Button onClick={onSubmit} display="block" mx="auto" mt="50px">
                    Sign Up
                </Button>
            </Box>
        </>
    );
}

export default SignUpSecondStep;