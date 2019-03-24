import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const SideDrawer = (props) => {
    return (
        <Drawer 
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
            >

            <List component="nav">
                <ListItem button onClick={() => console.log('features')}>
                        Event Starts In
                </ListItem>        
                <ListItem button onClick={() => console.log('features')}>
                        Venue Info
                </ListItem>        
                <ListItem button onClick={() => console.log('features')}>
                        Highlights
                </ListItem>        
                <ListItem button onClick={() => console.log('features')}>
                        Pricing
                </ListItem>        
                <ListItem button onClick={() => console.log('features')}>
                        Location
                </ListItem>        
            </List>
            
        </Drawer>  
    );
};

export default SideDrawer;