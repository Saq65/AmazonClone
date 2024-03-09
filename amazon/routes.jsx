import { Route,BrowserRouter,Routes } from "react-router-dom";
import { App } from "./app";
import { Cart } from "./cart";
import { SignIn } from "./sign";
import { NewAccount } from "./newAccount";

export function Routing(){
    
    return(
        <div>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/newAccount" element={<NewAccount/>} />
         </Routes>
         </BrowserRouter>
        </div>
    )
}