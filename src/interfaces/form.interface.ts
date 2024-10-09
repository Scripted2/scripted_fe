export interface IAuthForm {
    buttonText: string;
    bottomText?: string;
    linkText?: string;
    goTo: string;
    buttonAction?: () => void;
}