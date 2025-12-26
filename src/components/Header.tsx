import KioskLogo from '../assets/logo_kiosk.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {darkGreenColor} from '../utils';

export default function ButtonAppBar() {
  return (
      <AppBar sx={{ backgroundColor: darkGreenColor }}>
        <Toolbar>
            <img src={KioskLogo} alt="Kiosk Logo" style={{ height: 40 }} />
        </Toolbar>
      </AppBar>
   
  );
}
