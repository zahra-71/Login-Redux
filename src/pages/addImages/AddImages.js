import useStyles from "./styles";
import { Outlet } from '@mui/icons-material';

function AddImages () {

    var classes = useStyles();
    console.log("addImages")
    
    return(
        <div className={classes.container}>
            add image
            <Outlet />
        </div>
    )
}
export default AddImages;