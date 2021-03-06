import { Boostact } from "boostact";
import Header from "../../component/header/header";
import Footer from "../../component/common/footer/footer";
import MainRouter from "../../router";
/** @jsx Boostact.createElement */

const Main = () => {
    return (
        <div>
            <Header />
            <div id="body">
                <div id="ROUTING">
                    <MainRouter />
                </div>
                {/* <Navigator /> */}
            </div>
            <Footer />
        </div>
    );
};
export default Main;
