import { mockListRequeriments } from "../service/api";
import { useState } from "react";

export default function useRequirements(pageLimit) {
    const [requirements, setRequirements] = useState([]);

    function fetchRequirements(page) {
        const virtualPage = ((page - 1) * pageLimit) ? 0 : ((page - 1) * pageLimit)

        fetch(mockListRequeriments)
        .then(res => res.json())
        .then(setRequirements)
    }
  
    return (
      fetchRequirements,
      requirements
    );
  }