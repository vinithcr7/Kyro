import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Grid } from '@mui/material';
import { iconsMapping } from '../../Utils/IconsMapping';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const SideNav = ({ sideNavSchema }) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = (open) => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <Grid container>
                    <Grid item>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => handleDrawerToggle(open)}
                            sx={{
                                minWidth: 0,
                                mr: 'auto',
                                justifyContent: 'center',
                                px: 2.5
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    {open && <Grid item>
                        <Typography variant='h5' sx={{ justifyContent: 'center' }}>KYRO</Typography>
                    </Grid>}
                </Grid>
                <List>
                    {sideNavSchema.map((sideNavElement) => (
                        <ListItem key={sideNavElement.id} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {iconsMapping[sideNavElement.icon]}
                                </ListItemIcon>
                                <ListItemText primary={sideNavElement.label} sx={{ opacity: open ? 1 : 0 }} />
                                {sideNavElement.alertCount && <Avatar sx={{ width: 17, height: 17, fontSize: 15, bgcolor: 'red', display: open ? 'inherit' : 'none' }}>{sideNavElement.alertCount}</Avatar>}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <ListItem key={'logOut'} disablePadding sx={{ display: 'block', position: 'absolute', bottom: 0 }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {iconsMapping['logoutIcon']}
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            </Drawer>
        </Box>
    );
}

export default SideNav;
