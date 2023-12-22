'use client'

import {InnerSideBox,MainSideBox } from './sidebarStyles'
import {Email, Phone, Drafts,NightlightRound} from '@mui/icons-material'
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { myContext } from '../page';
import { SidebarWrapper } from '../stylesheets';

const SideBar = () => {

    const context = useContext(myContext)

    if(!context) return null

    const {themeMode,toggleTheme} = context

    const elements = [
        {
            name: 'Contacts',
            icon: <Phone/>
        },{
            name: 'Emails',
            icon: <Email/>
        },{
            name: 'Drafts',
            icon: <Drafts/>
        },{
            name: 'Contacts',
            icon: <Phone/>
        },{
            name: 'Emails',
            icon: <Email/>
        },
    ]

    return (
        <SidebarWrapper>
            <MainSideBox>
          {
            elements.map((item, index)=>(
                <InnerSideBox startIcon={item.icon} key={index}>
                    {item.name}
                </InnerSideBox>
            ))
          }
            <InnerSideBox>
                <NightlightRound/>
                <Switch checked={themeMode} onChange={toggleTheme}/>
            </InnerSideBox>
        </MainSideBox>
        </SidebarWrapper>
    );
}

export default SideBar;