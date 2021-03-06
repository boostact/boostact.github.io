import { Boostact } from "boostact";
import classes from "./style";

/** @jsx Boostact.createElement */

const A = (props) => {
    const { link, name } = props;
    return (
        <a
            className={classes.hoverA}
            href={link}
            // onMouseOver={(e) => (e.target.style.color = "#61dafb")}
            // onMouseOut={(e) => (e.target.style.color = "white")}
        >
            {name}
        </a>
    );
};
export default A;
