function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "Khong de trong email"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email khong ton tai"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Khong de trong password"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password khong dung"
    } else {
        error.password = ""
    }
    return error;
}


export default Validation;