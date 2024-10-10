import {UseToastOptions, useToast} from "@chakra-ui/react";

const toastOptions: UseToastOptions = {
    duration: 3000,
    isClosable: true,
    position: "top-right",
};

export const showErrorToast = (
    toast: ReturnType<typeof useToast>,
    description: string,
) => {
    toast({
        description: description,
        status: "error",
        ...toastOptions,
    });
};

export const showSuccessToast = (
    toast: ReturnType<typeof useToast>,
    description: string,
) => {
    toast({
        description: description,
        status: "success",
        ...toastOptions,
    });
};

export const showInfoToast = (
    toast: ReturnType<typeof useToast>,
    description: string,
) => {
    toast({
        description: description,
        status: "info",
        ...toastOptions,
    });
};

export const showWarningToast = (
    toast: ReturnType<typeof useToast>,
    description: string,
) => {
    toast({
        description: description,
        status: "warning",
        ...toastOptions,
    });
};

export const showLoadingToast = (
    toast: ReturnType<typeof useToast>,
    description: string,
) => {
    toast({
        description: description,
        status: "loading",
        ...toastOptions,
    });
}