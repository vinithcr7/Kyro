import { InputAdornment, TextField } from "@mui/material"
import { iconsMapping } from '../../Utils/IconsMapping';

const TextBox = ({ id, label, icon, value, onChange }) => {
    return (
        <TextField
            label={label}
            id={id}
            size='small'
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
                startAdornment: <InputAdornment position="start">{iconsMapping[icon]}</InputAdornment>,
            }}
            value={value}
            onChange={onChange}
        />
    )
}

export default TextBox;