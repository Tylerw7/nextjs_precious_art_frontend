import { ShoppingCart } from "@mui/icons-material"
import { AppBar, Badge, IconButton, List, Toolbar, Typography } from "@mui/material"
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

            <IconButton size="large">
              <Badge badgeContent="4" color="secondary">
                  <ShoppingCart />
              </Badge>
            </IconButton>

            <Link href={"/"}><h3>Login</h3></Link>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar