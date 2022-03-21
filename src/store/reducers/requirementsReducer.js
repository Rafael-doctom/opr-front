import ActionTypes from "../actions/actionTypes";

const initialState = {
    all: [
        {
            id: 0,
            idUser: 150,
            status: "analysis",
            user: {
                photo:
                    "https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg",
                name: "Marcos Antônio",
                location: "Campina Grande - PB",
                dateOccurrence: "20/12/2021",
                createdIn: "20/12/2021",
            },
            creationDate: 1639979972,
            tags: ["melhoria", "saúde", "cultura", "população"],
            title: "Requerimento de teste",
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            likes: 10,
            media: [
                "https://www.sigma.cv/wp-content/uploads/2021/04/c08f69c7-907f-404f-a2b1-db9384089eee-660x600.jpg",
                "https://vempracasa.com/imoveis/imagens/1368650/1624033951728-570x425.jpg",
                "https://www.lopes.com.br/blog/wp-content/uploads/2016/07/terreno.jpg",
            ],
            legislators: [
                { name: "Seu Zé Benfica", party: "Partido Democrático Trabalhista" },
                { name: "Seu Zé Benfica", party: "Partido Democrático Trabalhista" },
                { name: "Seu Zé Benfica", party: "Partido Democrático Trabalhista" },
            ],
            comments: [
                {
                    profile: null,
                    name: "Zefinho",
                    message:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    profile:
                        "https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-u.jpg",
                    name: "Zefinho",
                    message:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    profile: null,
                    name: "Zefinho",
                    message: "Hello World!",
                },
                {
                    profile:
                        "https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-u.jpg",
                    name: "Zefinho",
                    message: "Hello World!",
                },
                {
                    profile:
                        "https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-u.jpg",
                    name: "Zefinho",
                    message:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
            ],
        },
        {
            id: 1,
            status: "concluded",
            user: {
                name: "Marcos Antônio",
                location: "Campina Grande - PB",
            },
            title: "Título descritivo do requerimento",
            description:
                "Descrição do Requerimento feito na busca de solucionar um problema existente dentro da comunidade!",
            creationDate: 1639979972,
        },
        {
            id: 2,
            status: "concluded",
            user: {
                name: "Marcos Antônio",
                location: "Campina Grande - PB",
            },
            title: "Título descritivo do requerimento",
            description:
                "Descrição do Requerimento feito na busca de solucionar um problema existente dentro da comunidade!",
            creationDate: 1639979972,
        },
        {
            id: 3,
            status: "concluded",
            user: {
                name: "Marcos Antônio",
                location: "Campina Grande - PB",
            },
            title: "Título descritivo do requerimento",
            description:
                "Descrição do Requerimento feito na busca de solucionar um problema existente dentro da comunidade!",
            creationDate: 1639979972,
        },
        {
            id: 4,
            status: "concluded",
            user: {
                name: "Marcos Antônio",
                location: "Campina Grande - PB",
            },
            title: "Título descritivo do requerimento",
            description:
                "Descrição do Requerimento feito na busca de solucionar um problema existente dentro da comunidade!",
            creationDate: 1639979972,
        },
        {
            id: 5,
            status: "analisys",
            user: {
                name: "Marcos Antônio",
                location: "Campina Grande - PB",
            },
            title: "Título descritivo do requerimento",
            description:
                "Descrição do Requerimento feito na busca de solucionar um problema existente dentro da comunidade!",
            creationDate: 1639979972,
        },
        {
            id: 6,
            status: "not_accepted",
            user: {
                name: "Marcos Antônio",
                location: "Campina Grande - PB",
            },
            title: "Título descritivo do requerimento",
            description:
                "Descrição do Requerimento feito na busca de solucionar um problema existente dentro da comunidade!",
            creationDate: 1639979972,
        },
        {
            id: 7,
            status: "not_accepted",
            user: {
                name: "Marcos Antônio",
                location: "Campina Grande - PB",
            },
            title: "Título descritivo do requerimento",
            description:
                "Descrição do Requerimento feito na busca de solucionar um problema existente dentro da comunidade!",
            creationDate: 1639979972,
        },
    ],
};

export default function requirementsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SAVE_REQUIREMENTS:
            return {...state, all: action.payload};
        case ActionTypes.SAVE_REQUIREMENT:
            return {...state, all: [...state.all, action.payload]};
        case ActionTypes.UPDATE_REQUIREMENT:
            const reqIndex = state.all.findIndex(req => req.id === action.payload.id);
            const updatedRequirements = {...state};
            updatedRequirements.all[reqIndex] = action.payload;
            return updatedRequirements;
        default:
            return state;
    }
}
