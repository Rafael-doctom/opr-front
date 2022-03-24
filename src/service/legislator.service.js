import { api, apiAuth } from "./api";

import { login } from "./login.service";

export async function registerLegislator(legislatorData) {
    return api.post("/legislador", legislatorData).then((response) => {
        return new Promise((resolve, reject) => {
            if (response.data) {
                const userInformations = response.data.legisladorCriado;

                const infoForLogin = {
                    senha: legislatorData.senha,
                    cpf: legislatorData.cpf
                }

                login(infoForLogin, false).then(() => {
                    resolve(userInformations);
                }).catch(() => {
                    reject()
                })
            } else {
                reject();
            }
        })
    });
}

export async function updateLegislator(updateData) {
    return new Promise(async (resolve, reject) => {
        return apiAuth.put("/legislador", updateData).then((response) => {
            if (response.data) {
                if (response.data.legisladorAlterado) {
                    resolve(response.data.legisladorAlterado);
                } else {
                    reject();
                }
            } else {
                reject();
            }
        }).catch(() => {
            reject();
        });
    })
}