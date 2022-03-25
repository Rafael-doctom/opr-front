import { useState, useEffect } from "react";
import { useRequirements as useRequirementsContext } from "../contexts/requirementsContext";
import { listAllRequirements } from "../service/requirements.service";

export default function useRequirements(pageLimit) {
    const [requirements, setRequirements] = useState([]);
    const {requirements : requirementsList, setRequirements: setRequirementsToContext} = useRequirementsContext()

    async function fetchRequirements(page, titulo, orderBy = "id", direction = "desc", offSet = "10") {
      const queryParams = {
        titulo,
        orderBy,
        direction,
        page,
        offSet
      }

      listAllRequirements(queryParams).then((response) => {
        setRequirementsToContext(response);
        setRequirements(response);
      })
    }
  
    return [
      requirements,
      fetchRequirements
    ];
}