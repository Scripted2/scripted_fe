import SignUpFirstStep from "../../components/auth/SignUpFirstStep.tsx";
import SignUpSecondStep from "../../components/auth/SignUpSecondStep.tsx";
import React, {useState} from "react";
import Header from "../../components/site/Header.tsx";

const SignUp = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const goToNextStep = () => {
        setStep(2)
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value});
    }

    const handleSubmit = () => {
        console.log("Submitted form data: ", formData);
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
                onClick={() => setStep(1)}
            />
            {step === 1 && (
                <SignUpFirstStep
                    goToNextStep={goToNextStep}
                    formData={formData}
                    onInputChange={handleInputChange}
                />
            )}
            {step === 2 && (
                <SignUpSecondStep
                    onSubmit={handleSubmit}
                />
            )}
        </>
    )
}

export default SignUp;