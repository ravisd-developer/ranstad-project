import { JsxElement } from "typescript";
import Footer from "./footer";
import Header from "./header";

function Layout(props: any): JSX.Element {
    return (<>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </>);
}

export default Layout;