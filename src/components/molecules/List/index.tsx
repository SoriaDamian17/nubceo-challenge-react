import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { IMember } from '../../../interface';

export default function ListMember({
    members,
}: {
    members: IMember[],
}) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {members.map((member: IMember) =>   
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                <ImageIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={member.name} secondary="Category" />
        </ListItem>
        )}
    </List>
  );
}
