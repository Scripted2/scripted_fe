export const validateName = (name: string): boolean => {
    const re = /^[A-ZÀ-ÿ][a-zà-ÿ'-]+(\s[A-ZÀ-ÿ][a-zà-ÿ'-]+)*$/;
    return re.test(name) && name.length <= 150;
};

export const validateUsername = (username: string): boolean => {
    const re = /^[a-zA-Z0-9_-]{3,150}$/;
    return re.test(username);
};

export const validateEmail = (email: string): boolean => {
    const re =
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string): boolean => {
    const re =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?!.*\s).{8,255}$/;
    return re.test(String(password));
};

export const validateConfirmPassword = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
}

export const capitalizeFirstLetter = (string: string | undefined): string => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};
