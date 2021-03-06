import { Boostact } from "boostact";
import Button from "../../component/common/header/button/button.jsx";
import classes from "./style";

/** @jsx Boostact.createElement */

const Banner = () => {
    return (
        <div className={classes.banner}>
            <h1 className={classes.Boostact}>Boostact</h1>
            <p className={classes.description}>
                사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
            </p>
            <div className={classes.startButton}>
                <div className={classes.leftButton}>
                    <Button href="./docs" name="시작하기"></Button>
                </div>
                <Button href="./bugReport" name="버전관리"></Button>
            </div>
        </div>
    );
};

export default Banner;
