import { useState, useEffect } from "react";
import {Box, AppBar, Typography, Divider, Paper} from "@mui/material";
import { Deal } from "../interfaces";

interface Props{
    dealArray:Deal[]
}
const Header = ({dealArray}:Props) => {
    const[netValue, setNetValue] = useState<number>(0);

    const calculateNetValue = (): number => {
       return dealArray.reduce((acc,deal)=>{
            return acc + deal.value;
        },0)
    }

    const populateNetValue = (): void => {
        setNetValue(calculateNetValue())
    }

    useEffect(()=>{
       populateNetValue()
    })
    return (
        <AppBar> 
            <Typography variant="h5">
                Deals
            </Typography>
            <Paper sx={{width:"300px", display:"flex"}}>
                <Typography>
                    {`Netvalue: ${netValue}`}
                </Typography>
            </Paper>
            <Divider />
        </AppBar>
    )
}

export default Header;