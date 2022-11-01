import { Button } from "@mui/material";

const ButtonComp = ({ label, startIcon, endIcon }) => {
    return (
        <Button size="small" variant="contained" startIcon={startIcon} endIcon={endIcon} color='error'>
            {label}
        </Button>
    )
}

export default ButtonComp;