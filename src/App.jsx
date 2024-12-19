import './App.css'
import RouterApp from './routers'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from './theme/themeprovider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    
    <ThemeProvider theme={lightTheme}>
      <RouterApp/>
    </ThemeProvider>
   

  )
}

export default App;