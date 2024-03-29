
"use client"
import  React from 'react';
import Box from '@mui/material/Box';
// import { useHistory } from 'react-router-dom'

import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';

// import {useRouter} from 'next/router';
import { usePathname ,useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter();
const pathName =usePathname();

  const { push } = useRouter();

  const redirectPath=(path)=>{

    push(path)
  }

  const MenuItems=[
    {
      label:"Home",
      path:"/"
    },
    {
      label:"About Us",
      path:"/aboutus"
    }
  ]

  return (
    <React.Fragment>
      <Box className="main-menu" sx={{ display: 'flex', justifyContent:"center", textAlign: 'center',m:"2rem" }}>
        {
          MenuItems && MenuItems.length ?
          MenuItems.map((obj,i)=>{

            return(  <Link key={i} className={`${pathName == obj.path ? "active":""}`} onClick={()=>redirectPath(obj.path)}>
            <Typography  sx={{ minWidth: 100 }}>{obj.label}</Typography>
            </Link>

            )

          })
          :null
        }
    
        
      </Box>

    </React.Fragment>
  );
}