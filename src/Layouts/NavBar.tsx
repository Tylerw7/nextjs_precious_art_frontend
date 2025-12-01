import { ShoppingCart } from "@mui/icons-material"
import { AppBar, Badge, Box, IconButton, List, Toolbar, Typography } from "@mui/material"
import Link from "next/link"


const NavBar = () => {
  

  const midLinks = [
    {title: 'Gallery', path: '/gallery'},
    {title: 'About', path: '/about'},
    {title: 'Contact', path: '/contact'}
  ]


  return (
    <AppBar position="fixed">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
          <Box>
            <Typography variant="h6">Precious Wettach Art</Typography>
          </Box> 

          <Box> 
            <List className="flex flex-row gap-4">
              {midLinks.map(({title, path}) => (
                <Link href={path} key={path}>
                  <Typography 
                    variant="h6"
                    sx={{
                      '&:hover': {
                        color: 'grey.500'
                      }
                    }}
                    >
                  {title.toUpperCase()}
                  </Typography></Link>
              ))}
            </List>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px'}}> 
            <IconButton size="large" sx={{color: 'inherit'}}>
              <Badge badgeContent="4" color="secondary">
                  <ShoppingCart />
              </Badge>
            </IconButton>

            <Link href={"/"}>
            <Typography 
              variant="h6"
              sx={{
                '&:hover': {
                  color: 'grey.500'
                }
              }}
            >
              LOGIN
              </Typography>
              </Link>
              </Box> 

        </Toolbar>
    </AppBar>
  )
}

export default NavBar