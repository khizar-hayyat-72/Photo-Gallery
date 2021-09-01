import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( () => ({
    container: {
        marginTop : '50px'
    },
    icon: {
        marginRight : '20px'
    },
    button: {
        marginTop: '40px'
    },
    GridContainer:{
        marginTop: '100px'
    },
    CardGrid:{
        padding : '20px 0'
    },
    Card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    },
    CardMedia: {
        paddingTop : '56.25%'
    },
    CardContent: {
        flexGrow: 1
    },
    footer:{
        background: 'primary',
        padding : '50px 0'
    }

}));
 
export default useStyles;