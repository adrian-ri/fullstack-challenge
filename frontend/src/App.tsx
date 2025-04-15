import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./Components/header";
import Home from "./Views/home";
import { Organization,Deal } from "./interfaces";
import orginizationApi from "./Api/orginizationApi";
function App() {
  const [dealArray,setDealArray] = useState<Deal[]>([]);
  // Was planning to send the Org array so that you could select the org based on the results from the getOrginizations endpoint
  const [orgArray, setOrgArray] = useState<Organization[]>([])
  // hard coded to the first OrgId
  const [organizationId,setOrganizationId] = useState<number>(1);

  const populateDeals = async ():Promise<void> =>{
      const result  = await orginizationApi.getOrgDeals(organizationId)
      setDealArray(result);
  }
  const populateOrgArray = async ():Promise<void> =>{
      const result  = await orginizationApi.getOrginizations()
      setOrgArray(result)
  }

  useEffect(()=>{
    populateDeals();
    populateOrgArray();
  },[])

  return (
    <Container>
      <Header dealArray={dealArray} />
      <Home dealArray={dealArray}/>
    </Container>
  )
}

export default App
