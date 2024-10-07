import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    breakpoints: {
        base: "0px",
        sm: "640px",
        md: "768px",
        lg: "1920px",
        xl: "2560px",
    },
    styles: {
        global: {
            body: {
                bg: "transparent",
            },
        },
    },
    fonts: {
        heading: "'Poppins', sans-serif",
        body: "Poppins, sans-serif",
    },
    components: {
        Button: {
            variants: {
                solid: {
                    color: "#FFFFFF",
                    bg: "#3B2762",
                    _hover: {
                        bg: "#2c1f4f",
                    },
                },
            },
            baseStyle: {
                fontWeight: "semibold",
                borderRadius: "40.38px",
            },
            sizes: {
                md: {
                    h: "58px",
                    w: "250px",
                    fontSize: "1.262rem",
                    px: "32px",
                },
            },
            defaultProps: {
                variant: "solid",
            },
        },
    }
});

export default theme;
