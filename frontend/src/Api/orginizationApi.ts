import { Organization,Deal } from "../interfaces";


const getOrginizations = async (): Promise<Organization[]>=> { 
    try {
        const response = await fetch(`http://localhost:3000/organizations`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch deals: ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log(data.rows)
        return data.rows;

      } catch (error) {
        console.error('Error fetching deals:', error);
        return []
      }
}
const getOrgDeals = async (organizationId:number): Promise<Deal[]>=> { 
    try {
        const response = await fetch(`http://localhost:3000/organizations/${organizationId}/deals`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch deals: ${response.statusText}`);
        }
    
        const data = await response.json();
        return data.deals;

      } catch (error) {
        console.error('Error fetching deals:', error);
        return []
      }
}

export default {getOrginizations,getOrgDeals}