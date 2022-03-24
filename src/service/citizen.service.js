import { api, apiAuth } from "./api";

import { login } from "./login.service";

export async function registerCitizen(citizenData) {

    return api.post("/cidadao", citizenData).then((response) => {
        return new Promise((resolve, reject) => {
            if (response.data) {
                const userInformations = response.data.cidadaoCriado;

                const infoForLogin = {
                    senha: citizenData.senha,
                    cpf: citizenData.cpf
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

export async function updateCitizen(updateData) {
    return apiAuth.put("/cidadao", updateData).then((response) => {
        if (response.data) {
            if (response.data.cidadaoAlterado) {
                return(response.data.cidadaoAlterado)
            }
        }
    });
}