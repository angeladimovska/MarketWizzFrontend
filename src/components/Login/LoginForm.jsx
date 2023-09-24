import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../../services/AuthService";

export const LoginForm = () => {
    const [ loginData, setLoginData ] = useState({ username: "", password: "" });
    const { login } = AuthService();
    const [ error, setError ] = useState("");
    const [ fieldErrors, setFieldErrors ] = useState({});

    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await login(loginData.username, loginData.password);
            localStorage.setItem("token", res);
            navigate("/forum");
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
    const onChange = (event) => {
        setLoginData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        setFieldErrors((prev) => ({ ...prev, [event.target.name]: undefined }));
        setError(undefined);
    }
    return (
        <form onSubmit={ handleLoginSubmit }>
            <div style={ { color: 'red' } }>{ error }</div>
            <input className="input-class"
                   type="text"
                   placeholder="Корисничко име"
                   name="username"
                   value={ loginData.username }
                   onChange={ onChange }
            />
            <div style={ { color: 'red' } }>{ fieldErrors.username }</div>
            <input className="input-class"
                   type="password"
                   placeholder="Лозинка"
                   name="password"
                   value={ loginData.password }
                   onChange={ onChange }
            />
            <div style={ { color: 'red' } }>{ fieldErrors.password }</div>
            <button type="submit" className="btn btn-dark">НАЈАВИ СЕ</button>
        </form>
    );
};
