import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { mockListRequeriments } from "../../../service/api";

export default function usePagination() {
    const location = useLocation()
    const history = useHistory()

    function getActualPage() {
        
    }

    const [actualPage, setActualPage] = useState()

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