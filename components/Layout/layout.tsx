import Header from "./header";
import { useState, useRef, useContext} from "react";
import MyContext from "../../store/context";
const Layout = ({children})=>{
    const [title, setTitle] = useState('main');
    const subTitleRef = useRef(null);
    const data=useContext(MyContext);
    return <>
        <Header list={data} title={title} setTitle={setTitle} subTitleRef={subTitleRef}/>
        <main className="allwrap">{children}</main>
    </>
};
export default Layout;