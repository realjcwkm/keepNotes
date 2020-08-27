import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LightBulbIcon from '@material-ui/icons/EmojiObjectsOutlined';

import logo from '../statics/keep_logo.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		color: '#616161',
		backgroundColor: '#fff',
		zIndex: theme.zIndex.drawer + 1,
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		borderRight: 'none',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		borderRight: 'none',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	pageTitle: {
		fontWeight: 400
	},
	menuItem: {
		borderTopRightRadius: 25,
		borderBottomRightRadius: 25,
		fontWeight: 500,
		backgroundColor: '#feefc3'
	}
}));

export default function Layout() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);

	const toggleSideBar = () => {
		setOpen(!open);
	};
	return (
		<div>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={toggleSideBar}
						edge="start"
					>
						<MenuIcon />
					</IconButton>
					<Avatar
						alt="Remy Sharp"
						src={logo}
						style={{ marginRight: 15 }}
					/>
					<Typography
						variant="h6"
						className={classes.pageTitle}
						noWrap
					>
						Codifiq Keep
                    </Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}></div>

				<List>
					<ListItem button className={classes.menuItem}>
						<ListItemIcon>
							<LightBulbIcon />
						</ListItemIcon>
						<ListItemText primary="Notas" />
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}
