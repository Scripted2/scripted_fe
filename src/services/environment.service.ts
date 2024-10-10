const api = {
    log_in: 'token',
    sign_up: 'signup',
    categories: 'categories',
}

const backend_response = {
    existing_email: "user with this email already exists.",
    existing_username: "user with this username already exists.",
}

const local_storage = {
    accessToken: "accessToken",
    refreshToken: "refreshToken",
    userData: "userData",
}

export const environment = {
    backend_url: "http://127.0.0.1:8000/",
    backend_api_url: "http://127.0.0.1:8000/api/",
    backend_response: backend_response,
    api: api,
    local_storage: local_storage,
}