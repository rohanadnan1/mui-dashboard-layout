'use client'

import {  styled } from "@mui/system";
import { Typography, Box, Container, Button } from "@mui/material";

export const NavbarMainBox = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#c0c0c0',
})

export const InputArea = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const SearchButton = styled(Button)({
    backgroundColor: '#2E2E2E',
    color: '#FFFDD0',
    '&:hover': {
        backgroundColor: '#5A5A5A',
        color: '#FFFDD0',
    },
    borderRadius: '0 5px 5px 0'
})

export const Heading = styled(Typography)({
    color: '#2E2E2E',
    fontWeight: 'bold',
    fontSize: '1.9rem',
    textAlign: 'center',
    letterSpacing: '-2px',
})