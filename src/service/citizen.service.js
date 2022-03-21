import { api, apiAuth } from "./api";
import { encryptValue } from "../utils/cryptography";
import { saveUser, updateUser } from "../store/actions/userActor";

export async function registerCitizen(citizenData) {
    const citizenDataEncrypted = citizenData;
    citizenDataEncrypted.senha = encryptValue(citizenData.senha);
    citizenDataEncrypted.cpf = encryptValue(citizenData.cpf);

    return api.post("/cidadao", citizenDataEncrypted).then((response) => {
        return new Promise((resolve, reject) => {
            if (response.data) {
                const userInformations = response.data.cidadaoCriado;

                const infoForLogin = {
                    senha: citizenData.senha,
                    cpf: citizenData.cpf
                }
                citizenLogin(infoForLogin).then(() => {
                    saveUser(userInformations);
                    resolve();
                }).catch(() => {
                    reject()
                })
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
    return apiAuth.put("/cidadao", updateData).then((response) => {
        if (response.data) {
            if (response.data.cidadaoAlterado) {
                updateUser(response.data.cidadaoAlterado);
            }
        }
    });
}