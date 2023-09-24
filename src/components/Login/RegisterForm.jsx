import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../../services/AuthService";

export const RegisterForm = () => {
    const [ registerData, setRegisterData ] = useState({
        username: "",
        email: "",
        password: "",
        matchingPassword: "",
    });


    const [ error, setError ] = useState("");
    const [ fieldErrors, setFieldErrors ] = useState({});

    const { register } = AuthService();

    const navigate = useNavigate();

    const onChange = (event) => {
        console.log("event.target.name", event.target.name);
        console.log("event.target.value", event.target.value);
        const { name, value } = event.target;

        if (name === "email" && value.trim() !== "") {
            if (!/\S+@\S+\.\S+/.test(value)) {
                setFieldErrors((prev) => ({ ...prev, [name]: "Invalid email address." }));
            } else {
                setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
            }
        }

        setRegisterData((prev) => ({ ...prev, [name]: value }));
        setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
        setError(undefined);

    };
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await register(registerData);
            localStorage.setItem("token", res);
            navigate("/products");
        } catch (error) {
            if (error.response?.data?.fieldErrors) {
                const acc = {}
                error.response?.data?.fieldErrors.forEach((current) => {
                    console.log(current)
                    if (acc[current.field]) {
                        acc[current.field] = acc[current.field] + ", " + current.message;
                    } else {
                        acc[current.field] = current.message;
                    }
                });
                setFieldErrors(acc);
            } else {
                setError(error?.response?.data?.message);
            }
        }
    };

    return (
        <form onSubmit={ handleRegisterSubmit }>
            <div className="register-form">
                <div style={ { color: "red" } }>{ error }</div>
                <input className="input-class"
                       style={ fieldErrors.username ? { border: "1px solid red" } : {} }
                       type="text"
                       placeholder="Корисничко име"
                       name="username"
                       value={ registerData.username }
                       onChange={ onChange }
                />
                <div style={ { color: "red" } }>{ fieldErrors.username }</div>
                <input className="input-class"
                       style={ fieldErrors.email ? { border: "1px solid red" } : {} }
                       type="email"
                       placeholder="Е-маил"
                       name="email"
                       value={ registerData.email }
                       onChange={ onChange }
                />
                <div style={ { color: "red" } }>{ fieldErrors.email }</div>
                <input className="input-class"
                       style={ fieldErrors.password ? { border: "1px solid red" } : {} }
                       type="password"
                       placeholder="Лозинка"
                       name="password"
                       value={ registerData.password }
                       onChange={ onChange }
                />
                <div style={ { color: "red" } }>{ fieldErrors.password }</div>
                <input className="input-class"
                       style={ fieldErrors.matchingPassword ? { border: "1px solid red" } : {} }
                       type="password"
                       placeholder="Потврди лозинка"
                       name="confirmPassword"
                       value={ registerData.matchingPassword }
                       onChange={ onChange }
                />
                <div style={ { color: "red" } }>{ fieldErrors.matchingPassword }</div>
            </div>
            <button type="submit" className="btn btn-dark">РЕГИСТРИРАЈ СЕ</button>
        </form>
    );
};