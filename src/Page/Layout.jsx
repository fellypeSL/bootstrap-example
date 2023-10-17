import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Card from "../Components/Card";

export default function Layout(){
    return (
        <>
            <div>
                <Nav/>
                <Banner/>
                <Card/>
            </div>
        </>
    );
}