import React, {useRef, useState} from 'react';
import Burger from "../Burger";
import Menu from "../Menu";
import {useOnClickOutside} from "../../utils/hooks/clickOutside";


function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return <>
       <div className="header container-fluid">
           <div className="row">
               <div className="col-sm">
                   <div ref={node}>
                       <Burger open={open} setOpen={setOpen} />
                       <Menu open={open} setOpen={setOpen} />
                   </div>
               </div>
           </div>
       </div>

    </>

}

export default Header;
