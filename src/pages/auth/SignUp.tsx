import SignUpFirstStep from "../../components/auth/SignUpFirstStep.tsx";
import SignUpSecondStep from "../../components/auth/SignUpSecondStep.tsx";
import {useState} from "react";
import Header from "../../components/site/Header.tsx";

const SignUp = () => {
    const [step, setStep] = useState(1);

    const goToNextStep = () => {
        setStep(step + 1);
    }

    return (
        <>
            <Header
                title={
                    step === 1
                        ? "Let’s create you an account!"
                        : "What are you interested in?"
                }
                showBackButton={
                    step === 2
                }
                onClick={() => setStep(step - 1)}
            />
            {step === 1 && <SignUpFirstStep goToNextStep={goToNextStep}/>}
            {step === 2 && <SignUpSecondStep/>}
        </>
    )
}

export default SignUp;