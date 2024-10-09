import {ISignUpSecondStep} from "../../interfaces/form.interface.ts";
import {Button} from "@chakra-ui/react";

const SignUpSecondStep = ({
                              onSubmit
                          }: ISignUpSecondStep) => {
    return (
        <>
            <Button onClick={onSubmit}>Sign Up</Button>
        </>
    );
}

export default SignUpSecondStep;