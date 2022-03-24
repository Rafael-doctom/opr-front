import { apiAuth } from "./api";

export async function createRequirement(requirementData) {
    return new Promise((resolve, reject) => {
        apiAuth.post("/requerimento", {
            requirementData
        }).then((response) => {
            resolve(response.data);
        }).catch(() => {
            reject();
        })
    })
}

export async function getHypedRequirement() {
    return new Promise((resolve, reject) => {
        apiAuth.get("/emalta").then((response) => {
            resolve(response.data);
        }).catch(() => {
            reject();
        })
    })
}

export async function getRequirement(requirementId) {
    return new Promise((resolve, reject) => {
        apiAuth.get("/requerimento", { 
            params: {
                id: requirementId
            }
        }).then((response) => {
            resolve(response.data);
        }).catch(() => {
            reject();
        })
    })
}

export async function listAllRequirements() {
    return new Promise((resolve, reject) => {
        apiAuth.get("/requerimentos").then((response) => {
            resolve(response.data);
        }).catch(() => {
            reject();
        })
    })
}