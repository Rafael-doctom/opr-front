import { api } from "./api";
import { encryptValue } from "../utils/cryptography";

export async function registerLegislator(legislatorData) {
    legislatorData.password = encryptValue(legislatorData.password);
    legislatorData.cpf = encryptValue(legislatorData.cpf);

    return api.post("/legislador", legislatorData).then((response) => {
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

export async function legislatorLogin(loginData) {
    loginData.password = encryptValue(loginData.password);
    loginData.cpf = encryptValue(loginData.cpf);

    return api.post("/legislador/login", loginData).then((response) => {
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

export async function updateLegislator(updateData) {
    return api.put("/legislador", updateData);
}

export async function deleteLegislador(legislatorCpf) {
    return api.delete("/legislador", legislatorCpf)
}