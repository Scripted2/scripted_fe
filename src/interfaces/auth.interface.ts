import React from "react";

export interface ISignUp {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    confirm_password: string;
    favorite_categories_ids?: number[];
}

export interface IAuthForm {
    buttonText: string;
    bottomText?: string;
    linkText?: string;
    goTo: string;
    buttonAction?: () => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: ISignUp;
}

export interface ISignUpFirstStep {
    goToNextStep: () => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: ISignUp;
}

export interface ISignUpSecondStep {
    onSubmit: () => void;
    updateFavoriteCategories: (categories: number[]) => void;
}