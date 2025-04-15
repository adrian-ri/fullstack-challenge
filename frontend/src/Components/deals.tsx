import { List,ListItem,ListItemText, Box, Typography } from "@mui/material";
import { Deal } from "../interfaces";

interface Props{
    dealArray: Deal[]
}
const Deals = ({dealArray}: Props) => {
    return (
        <Box sx={{mt:10}}>
            <Typography variant="h5">
                Deals
            </Typography>
            <List>
                {dealArray.map(deal => {
                    return(
                        <ListItem key={deal.id}>
                            {/* Needed to link the deal to the account name using a forign key */}
                            <ListItemText primary={`Name:${deal.account_id} Amount: ${deal.value}`}/>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
};

export default Deals;