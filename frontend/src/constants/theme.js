import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary: {main:"#c9e121",contrastText: '#253b4f',dark:"#0f1923"},
        secondary:{main: '#253b4f',contrastText: "#c9e121"},
        text:{primary:"#c9e121",secondary:'#253b4f',disabled:"gray"}
    },
    typography:{
        body1:{
            fontSize:16,
            '@media (max-width:350px)':{
                fontSize:12
            },
            '@media (min-width:350px)':{
                fontSize:14
            },
            '@media (min-width:768px)':{
                fontSize:16
            }
        },
        h4:{
            fontSize:28,
            '@media (max-width:350px)':{
                fontSize:18
            },
            '@media (min-width:350px)':{
                fontSize:22
            },
            '@media (min-width:768px)':{
                fontSize:25
            },
            '@media (min-width:1024px)':{
                fontSize:28
            }
        },
        fontFamily:["Paralucent Slab", "Inter"].join(',')
    }
})

export default theme;