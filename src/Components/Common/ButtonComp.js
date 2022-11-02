import { Button } from "@mui/material";

const ButtonComp = ({ label, startIcon, endIcon, className, onClick }) => {
    return (
        <Button className={className} size="small" variant="contained" startIcon={startIcon} endIcon={endIcon} color='error' onClick={onClick}>
            {label}
        </Button>
    )
}

export default ButtonComp;