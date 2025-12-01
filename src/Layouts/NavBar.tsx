import { AppBar, List, Toolbar, Typography } from "@mui/material"
import Link from "next/link"


const NavBar = () => {
  

  const midLinks = [
    {title: 'Gallery', path: '/gallery'},
    {title: 'About', path: '/about'},
    {title: 'Contact', path: '/contact'}
  ]


  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">Precious Wettach Art</Typography>
            <List className="flex flex-row gap-4">
              {midLinks.map(({title, path}) => (
                <Link href={path} key={path}><h3>{title}</h3></Link>
              ))}
            </List>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar