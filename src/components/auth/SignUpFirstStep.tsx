import AuthForm from "./Form.tsx";
import {ISignUpFirstStep} from "../../interfaces/auth.interface.ts";

const SignUpFirstStep = ({
                             goToNextStep,
                             onInputChange,
                             formData,
                             errors
                         }: ISignUpFirstStep) => {
    return (
        <>
            <AuthForm
                buttonText={"Next"}
                bottomText={"Already have an account?"}
                linkText={"Log in"}
                goTo={"/login"}
                buttonAction={goToNextStep}
                onInputChange={onInputChange}
                formData={formData}
                errors={errors}
            />
        </>
    );
}

export default SignUpFirstStep;