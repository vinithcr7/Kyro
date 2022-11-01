import Greeting from "./Greeting";
import ButtonComp from "../Common/ButtonComp";
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from "@mui/material";
import Menuitem from "../Common/Menuitem";
import { MenuSchema } from "../../Schema/MenuSchema";
import '../../Styles/Header.css';

const Header = ({ userName }) => {
    return (
        <div className="headerbar">
            <Greeting userName={userName} />
            <div className="admin-action">
                <ButtonComp label={"Add Project"} startIcon={<AddIcon />} />
                <div className="admin-menu">
                    <Avatar sx={{ bgcolor: "blue", borderRadius: '10px' }} variant="square">N</Avatar>
                    <Menuitem userName={userName} menuItems={MenuSchema} />
                </div>
            </div>
        </div>
    )
}

export default Header;