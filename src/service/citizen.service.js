import { api } from "./api";
import { encryptValue } from "../utils/cryptography";

export async function registerCitizen(citizenData) {
    console.log(citizenData)
    citizenData.senha = encryptValue(citizenData.senha);
    citizenData.cpf = encryptValue(citizenData.cpf);

    return api.post("/cidadao", citizenData).then((response) => {
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

export async function citizenLogin(loginData) {
    loginData.senha = encryptValue(loginData.senha);
    loginData.cpf = encryptValue(loginData.cpf);

    return api.post("/cidadao/login", loginData).then((response) => {
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

export async function updateCitizen(updateData) {
    return api.put("/cidadao", updateData);
}

export async function deleteCitizen(citizenCpf) {
    return api.delete("/cidadao", citizenCpf)
}