import { Boostact, Link } from "boostact";
import Style from "./style";
/** @jsx Boostact.createElement */

const TextLink = (props) => {
    const { href, text, size, bold } = props;
    let styledClassName = Style.base;
    if (size === "small") styledClassName += ` ${Style.textSmall}`;
    else if (size === "large") styledClassName += ` ${Style.textLarge}`;
    if (bold) styledClassName += ` ${Style.textBold}`;
    return (
        <div>
            <Link to={href}>
                <span className={styledClassName}>{text}</span>
            </Link>
        </div>
    );
};
export default TextLink;
