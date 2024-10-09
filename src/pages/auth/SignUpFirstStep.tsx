import Header from "../../components/site/Header.tsx";
import AuthForm from "../../components/auth/Form.tsx";

const SignUpPage = () => {
    return (
        <>
            <Header title={"Let’s create you an account!"}/>
            <AuthForm
                buttonText={"Next"}
                bottomText={"Already have an account?"}
                linkText={"Log in"}
                goTo={"/login"}
            />
        </>
    );
}

export default SignUpPage;