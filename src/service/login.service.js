import { api } from "./api";
import { encryptValue } from "../utils/cryptography";

export async function login(loginData, shouldEncrypt = true) {
    if (shouldEncrypt) {
        loginData.senha = encryptValue(loginData.senha);
        loginData.cpf = encryptValue(loginData.cpf);
    }

    return api.post("/login", loginData).then((response) => {
        return new Promise((resolve, reject) => {
            if (response.data) {
                localStorage.setItem("@opr/token", response.data);
                resolve();
            } else {
                reject();
            }
        })
    });
}