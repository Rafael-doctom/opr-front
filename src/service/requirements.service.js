import { apiAuth } from "./api";

export async function createRequirement(requirementData) {
    return new Promise((resolve, reject) => {
        apiAuth.post("/requerimento/novo", requirementData).then((response) => {
            resolve(response.data.requerimentoCriado);
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

export async function listAllRequirements(queryParams) {
    return new Promise((resolve, reject) => {
        apiAuth.get("/requerimentos", {
            params: queryParams
        }).then((response) => {
            resolve(response.data);
        }).catch(() => {
            reject();
        })
    })
}

export async function getLikeAndComments(requirementId) {
    let likes = 0;
    let comments = [];
    
    await apiAuth.get("/curtidas_por_requerimento", {
        idRequerimento: requirementId
    }).then((response) => {
        if (!response.data.message === "Este requerimento ainda não recebeu curtidas.") {
            likes = response.data.total_curtidas;
        } 
    })

    await apiAuth.get("search/comentario", {
        id: requirementId
    }).then((response) => {
        if (response.data.comentarios) {
            comments = response.data
        }
    })

    return {likes, comments};
}

export async function changeRequirementStatus(updateData, requirementId) {
    return new Promise((resolve, reject) => {
        apiAuth.put(`/requerimento/edit/${requirementId}`, {
            updateData
        }).then((response) => {
            if (response.data.requerimentoAtualizado) {
                resolve(response.data.requerimentoAtualizado)
            } else {
                reject();
            }
        }).catch(() => {
            reject();
        })
    })
} 