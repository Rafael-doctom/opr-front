import React, { createContext, useState, useContext, useCallback } from 'react';

const UserContext = createContext();
// TODO: Deletar antes da implementação final (aqui apenas para desenvolvimento)
const initialUser = {
	id: 150,
	name: "Marcos Antônio",
	cpf: 16546546554,
	state: "PB",
	city: "Campina Grande",
	email: "marcos@antonio.com",
};

// >>> Para testar legislador
// const initialUser = {
// 	id: 20,
// 	name: "João Gomes",
// 	cpf: 16546546554,
// 	state: "PB",
// 	city: "João Pessoa",
// 	email: "joao@gomes.yahoo",
// 	partido: "PDT"
// };

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(initialUser);
    console.log(currentUser)

    const updateUser = useCallback((newUser)=>{
        setCurrentUser({...currentUser, ...newUser});
    }, [currentUser]);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) throw new Error("error: no user context")
    const { currentUser, setCurrentUser, updateUser } = context;
    return { currentUser, setCurrentUser, updateUser };
}