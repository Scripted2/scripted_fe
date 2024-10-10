import {Text, Box} from "@chakra-ui/react";

const ScreenSize = () => {
    return (
        <Box
            maxW="400px"
            minW={"fit-content"}
            m="auto"
            mt={"40vh"}
            p={6}
            bg="red.50"
            borderRadius="5px"
            border="1px solid"
            borderColor="red.200"
            boxShadow="lg"
            textAlign="center"
            fontFamily={"'Poppins', sans-serif"}
        >
            <Text
                fontSize="lg"
                color="red.600"
                fontWeight="bold"
            >
                Please use a larger screen to view this site.
            </Text>
            <Text fontSize="md" color="red.600" mt={2}>
                The minimum screen size is 320px.
            </Text>
        </Box>
    );
};

export default ScreenSize;
