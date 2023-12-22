'use client'

import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const NavbarWrapper = styled(Box)({
    height: '15vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c0c0c0',
    position: 'fixed',
    borderBottom: '1px solid ##808080',
})

export const ContainerWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
})

export const SidebarWrapper = styled(Box)({
    height: '85vh',
    width: '15vw',
    backgroundColor: '#c0c0c0',
    position: 'fixed',
    top: '15vh',
    borderRight: '1px solid ##808080',
})

export const DashboardWrapper = styled(Box)({
    width: '85vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '15vw',
    marginTop: '15vh',
})
