import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuBox from '../MenuBox';

function RightDrawer({open, setOpen}) {
    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={() => setOpen(false)}
            className='drawer'
        >
            {<MenuBox className={'mobile-menus'} />}
        </Drawer>
    );
}

export default RightDrawer;