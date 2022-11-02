import { Button } from "@mui/material";

const ButtonComp = ({ label, startIcon, endIcon, className }) => {
    return (
        <Button className={className} size="small" variant="contained" startIcon={startIcon} endIcon={endIcon} color='error'>
            {label}
        </Button>
    )
}

export default ButtonComp;