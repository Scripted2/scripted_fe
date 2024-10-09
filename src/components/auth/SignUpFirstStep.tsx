import AuthForm from "./Form.tsx";
import {ISignUpFirstStep} from "../../interfaces/form.interface.ts";

const SignUpFirstStep = ({goToNextStep}: ISignUpFirstStep) => {
    return (
        <>
            <AuthForm
                buttonText={"Next"}
                bottomText={"Already have an account?"}
                linkText={"Log in"}
                goTo={"/login"}
                buttonAction={goToNextStep}
            />
        </>
    );
}

export default SignUpFirstStep;