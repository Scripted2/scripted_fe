export interface LoadingIndicatorProps {
    spinnerColor?: string;
    spinnerSize?: string;
    backgroundColor?: string;
    textColor?: string;
    text?: string;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
    marginTop?: number;
    isRentCartModal?: boolean;
    textSize?: string;
    gap?: number;
}