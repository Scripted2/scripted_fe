import { Spinner, Center, VStack, Text, HStack } from "@chakra-ui/react";
import {LoadingIndicatorProps} from "../../interfaces/site.interface.ts";

const LoadingIndicator = ({
                              spinnerColor = "#FFFFFF",
                              spinnerSize = "xl",
                              backgroundColor,
                              text = "Loading...",
                              textColor = "white",
                              position = "fixed",
                              textSize = "2xl",
                              marginTop,
                              gap = 4,
                              isRentCartModal = false,
                          }: LoadingIndicatorProps) => {
    return (
        <>
            <Center
                position={position}
                top="0"
                right="0"
                bottom="0"
                left="0"
                zIndex="9999"
                backgroundColor={backgroundColor}
                mt={marginTop}
            >
                {isRentCartModal ? (
                    <HStack spacing={gap}>
                        <Text color={textColor} fontSize={textSize}>
                            {text}
                        </Text>
                        <Spinner size={spinnerSize} color={spinnerColor} />
                    </HStack>
                ) : (
                    <VStack spacing={gap}>
                        <Spinner size={spinnerSize} color={spinnerColor} />
                        <Text color={textColor} fontSize={textSize}>
                            {text}
                        </Text>
                    </VStack>
                )}
            </Center>
        </>
    );
};

export default LoadingIndicator;