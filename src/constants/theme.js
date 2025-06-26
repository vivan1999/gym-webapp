import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary: {main:"#c9e121",contrastText: '#253b4f',dark:"#0f1923"},
        secondary:{main: '#253b4f',contrastText: "#c9e121"},
        text:{primary:"#c9e121",secondary:'#253b4f',disabled:"gray"}
    },
    typography:{
        fontFamily:["Paralucent Slab", "Inter"].join(',')
    }
})

export default theme;