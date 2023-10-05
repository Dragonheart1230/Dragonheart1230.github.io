import ReactDOM from 'react-dom/client'

import './index.css'
// import { App } from './components/App.tsx.yeolde'
import { App } from './components/App.tsx'
import { HashRouter } from 'react-router-dom'
// import { NextUIProvider } from '@nextui-org/react'
// import { createTheme, styled } from '@nextui-org/react';

// const darkTheme = createTheme({
//   type: "dark",
//   theme: {
//     colors: {}
//   }
// });

// const StyledApp = styled("div", {
//   backgroundColor: "red"
// })

console.log(process.env.NODE_ENV)
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <NextUIProvider >
  //   {/* <App /> */}
  //   <StyledApp className="App">

  //   </StyledApp>
  // </NextUIProvider>
  <HashRouter>
    <App />
  </HashRouter>

)
