import { getUser } from "../../storage/Storage";
import useStyles from "./styles";

function Dashboard () {
    var classes = useStyles();

    const user = getUser('user');
    // const user = loadState()
    console.log("dashboard")
    
    return(
        <div className={classes.container}>
            HI {user}
        </div>
    )
}
export default Dashboard;