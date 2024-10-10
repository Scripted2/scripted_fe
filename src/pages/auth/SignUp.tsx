import SignUpFirstStep from "../../components/auth/SignUpFirstStep.tsx";
import SignUpSecondStep from "../../components/auth/SignUpSecondStep.tsx";
import React, {useState} from "react";
import Header from "../../components/site/Header.tsx";
import {ISignUp} from "../../interfaces/auth.interface.ts";
import axios from "axios";
import {environment} from "../../services/environment.service.ts";
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";
import {showErrorToast, showSuccessToast, showWarningToast} from "../../utils/toast.util.ts";
import {
    capitalizeFirstLetter, validateConfirmPassword,
    validateEmail,
    validateName, validatePassword,
    validateUsername
} from "../../utils/field.validation.util.ts";

const SignUp = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<ISignUp>({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        favorite_categories_ids: []
    });
    const [errors, setErrors] = useState({
        first_name: false,
        last_name: false,
        username: false,
        email: false,
        password: false,
        confirm_password: false
    });
    const formattedFirstName = capitalizeFirstLetter(formData.first_name);
    const formattedLastName = capitalizeFirstLetter(formData.last_name);

    const goToNextStep = () => {
        const {first_name, last_name, username, email, password, confirm_password} = formData;

        let newErrors = {
            first_name: false,
            last_name: false,
            username: false,
            email: false,
            password: false,
            confirm_password: false
        };

        let hasErrors = false;

        if (!first_name || !last_name || !username || !email || !password || !confirm_password) {
            showWarningToast(toast, "Please fill in all fields.");
            return;
        }

        if (!validateName(formattedFirstName)) {
            showErrorToast(toast, "First name is invalid.");
            newErrors.first_name = true;
            hasErrors = true;
        }

        if (!validateName(formattedLastName)) {
            showErrorToast(toast, "Last name is invalid.");
            newErrors.last_name = true;
            hasErrors = true;
        }

        if (!validateUsername(username)) {
            showErrorToast(toast, "Username is invalid.");
            newErrors.username = true;
            hasErrors = true;
        }

        if (!validateEmail(email)) {
            showErrorToast(toast, "Email is invalid.");
            newErrors.email = true;
            hasErrors = true;
        }

        if (!validatePassword(password)) {
            showErrorToast(toast, "Password is invalid.");
            newErrors.password = true;
            hasErrors = true;
        }

        if (!validateConfirmPassword(password, confirm_password)) {
            showErrorToast(toast, "Passwords do not match.");
            newErrors.confirm_password = true;
            hasErrors = true;
        }

        setErrors(newErrors);

        if (!hasErrors) {
            setStep(2);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        const newValue = (name === "first_name" || name === "last_name") ? capitalizeFirstLetter(value) : value;
        setFormData({...formData, [name]: newValue});
    }

    const updateFavoriteCategories = (selectedCategories: number[]) => {
        setFormData({...formData, favorite_categories_ids: selectedCategories});
    };

    const handleSubmit = () => {
        if (formData.favorite_categories_ids?.length === 0) {
            showWarningToast(toast, "Please select at least one category.");
            return;
        }
        const signUpData = {
            ...formData,
            first_name: formattedFirstName,
            last_name: formattedLastName
        }
        axios.post(`${environment.backend_api_url}${environment.api.sign_up}`, signUpData)
            .then(() => {
                showSuccessToast(toast, "Account created successfully!");
                localStorage.removeItem(environment.local_storage.favorite_categories_ids);
                navigate("/login");
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    if (err.response.data.email && err.response.data.email.length > 0 && err.response.data.email[0] === environment.backend_response.existing_email) {
                        showErrorToast(toast, "Email already exists.");
                        setErrors({...errors, email: true});
                        setStep(1);
                        return;
                    } else if (err.response.data.username && err.response.data.username.length > 0 && err.response.data.username[0] === environment.backend_response.existing_username) {
                        showErrorToast(toast, "Username already exists.");
                        setErrors({...errors, username: true});
                        setStep(1);
                        return;
                    }
                }
                showErrorToast(toast, "An error occurred. Please try again later.");
            });
    };

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
                    errors={errors}
                />
            )}
            {step === 2 && (
                <SignUpSecondStep
                    onSubmit={handleSubmit}
                    updateFavoriteCategories={updateFavoriteCategories}
                />
            )}
        </>
    )
}

export default SignUp;