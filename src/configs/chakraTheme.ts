import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    breakpoints: {
        base: "0px",
        sm: "640px",
        md: "768px",
        m: "800px",
        l: "1200px",
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
                    _active: {
                        bg: "#2c1f4f",
                    },
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
