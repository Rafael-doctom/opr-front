import { mockListRequeriments } from "../service/api";
import { useState } from "react";

export default function useRequirements(pageLimit) {
    const [requirements, setRequirements] = useState([]);

    async function fetchRequirements(page) {
        const virtualPage = ((page - 1) * pageLimit) ? 0 : ((page - 1) * pageLimit)

        // TODO: Nesse local pode ser inserida a chamada no backend
        // Analisar se há necessidade do virtual page de acordo com
        // o modo que foi implementado no backend
        setRequirements(mockListRequeriments)
    }
  
    return [
      requirements,
      fetchRequirements
    ];
}