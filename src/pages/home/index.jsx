import About from "./About";
import Banner from "./Banner";
import Chef from "./Chef";
import Menu from "./Menu";
import Specialty from "./Specialty";

function HomePage() {
    return (
        <>
            <Banner />
            <Specialty />
            <About />
            <Menu />
            <Chef />
        </>
    );
}

export default HomePage;