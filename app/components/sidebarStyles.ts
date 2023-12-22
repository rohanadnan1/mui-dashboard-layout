'use client'

import {styled} from "@mui/system";
import {Box, Button} from "@mui/material";

export const MainSideBox = styled(Box)({
    width: '80%',
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#c0c0c0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
})

export const InnerSideBox = styled(Button)({
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#2E2E2E',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#5A5A5A'
    }
})