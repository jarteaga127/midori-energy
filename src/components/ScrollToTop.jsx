import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

const {pathname} = useLocation(0);

 useEffect(() => {
window.scrollTo(0, 0); // This will bring you to the top-left corner
 }, [pathname]);

    return null;
}
 
export default ScrollToTop;