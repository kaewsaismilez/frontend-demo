import React from "react";
import { Link } from "react-navi";
import Button from "@material-ui/core/Button";
import {
  AppBar,
  Box,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Theme,
  Typography,
} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 500,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const HomePageUser: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="My Account" {...a11yProps(0)} />
          <Tab label="View" {...a11yProps(1)} />
          <Tab label="Setting" {...a11yProps(2)} />
          <Tab label="Other" {...a11yProps(3)} />
          <Button color="default" href="/">
            Logout
          </Button>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        My Account
      </TabPanel>
      <TabPanel value={value} index={1}>
        Add Users
      </TabPanel>
      <TabPanel value={value} index={2}>
        Setting
      </TabPanel>
      <TabPanel value={value} index={3}>
        Other
      </TabPanel>
    </div>
  );
};

export default HomePageUser;
