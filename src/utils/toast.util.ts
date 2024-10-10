import { UseToastOptions, useToast } from "@chakra-ui/react";

export const toastOptions: UseToastOptions = {
    duration: 4000,
    isClosable: true,
    position: "top-right",
};

export const showErrorToast = (
    toast: ReturnType<typeof useToast>,
    title: string,
    description: string,
) => {
    toast({
        title: title,
        description: description,
        status: "error",
        ...toastOptions,
    });
};

export const showSuccessToast = (
    toast: ReturnType<typeof useToast>,
    title: string,
    description: string,
) => {
    toast({
        title: title,
        description: description,
        status: "success",
        ...toastOptions,
    });
};

export const showInfoToast = (
    toast: ReturnType<typeof useToast>,
    title: string,
    description: string,
) => {
    toast({
        title: title,
        description: description,
        status: "info",
        ...toastOptions,
    });
};

export const showWarningToast = (
    toast: ReturnType<typeof useToast>,
    title: string,
    description: string,
) => {
    toast({
        title: title,
        description: description,
        status: "warning",
        ...toastOptions,
    });
};