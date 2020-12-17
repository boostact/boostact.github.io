import { Boostact } from "boostact";
/** @jsx Boostact.createElement */

const Content = (props) => {
    const { img, name } = props;
    return (
        <div>
            <img src={img}></img>
        </div>
    );
};

export default Content;
