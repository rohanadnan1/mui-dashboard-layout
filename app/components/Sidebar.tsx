'use client'

import {InnerSideBox,MainSideBox } from './sidebarStyles'
import {Email, Phone, Drafts,NightlightRound} from '@mui/icons-material'
import Switch from '@mui/material/Switch';
import { SidebarWrapper } from '../stylesheets';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const SideBar = () => {

    const state = useSelector((state: any)=>state.theme)
    console.log('state',state)
    const dispatch = useDispatch()


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
                <Switch checked={state} onChange={()=>dispatch(toggleTheme())}/>
            </InnerSideBox>
        </MainSideBox>
        </SidebarWrapper>
    );
}

export default SideBar;