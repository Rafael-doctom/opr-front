import { api, apiAuth } from "./api";
import { encryptValue } from "../utils/cryptography";
import { saveUser, updateUser } from "../store/actions/userActor";

export async function registerLegislator(legislatorData) {
    const legislatorDataEncrypted = legislatorData;
    legislatorDataEncrypted.password = encryptValue(legislatorData.password);
    legislatorDataEncrypted.cpf = encryptValue(legislatorData.cpf);

    return api.post("/legislador", legislatorDataEncrypted).then((response) => {
        return new Promise((resolve, reject) => {
            if (response.data) {
                const userInformations = response.data.legisladorCriado;

                const infoForLogin = {
                    senha: legislatorData.senha,
                    cpf: legislatorData.cpf
                }
                legislatorLogin(infoForLogin).then(() => {
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
    return apiAuth.put("/legislador", updateData).then((response) => {
        if (response.data) {
            if (response.data.legisladorAlterado) {
                updateUser(response.data.legisladorAlterado);
            }
        }
    });
}