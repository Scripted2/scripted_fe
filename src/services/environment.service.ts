const api = {
    log_in: 'login',
    sign_up: 'signup',
    categories: 'categories',
}

const backend_response = {
    existing_email: "user with this email already exists.",
    existing_username: "user with this username already exists.",
}

export const environment = {
    backend_url: "http://127.0.0.1:8000/",
    backend_api_url: "http://127.0.0.1:8000/api/",
    backend_response: backend_response,
    api: api,
}