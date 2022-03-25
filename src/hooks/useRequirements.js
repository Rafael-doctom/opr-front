import { useState } from "react";
import { useRequirements as useRequirementsContext } from "../contexts/requirementsContext";

export default function useRequirements(pageLimit) {
    const [requirements, setRequirements] = useState([]);
    const {requirements : requirementsList} = useRequirementsContext()

    async function fetchRequirements(page) {
        const virtualPage = ((page - 1) * pageLimit) ? 0 : ((page - 1) * pageLimit)

        // TODO: Nesse local pode ser inserida a chamada no backend
        // Analisar se há necessidade do virtual page de acordo com
        // o modo que foi implementado no backend
        setRequirements(requirementsList)
    }
  
    return [
      requirements,
      fetchRequirements
    ];
}