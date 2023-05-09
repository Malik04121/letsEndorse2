import { Route, Routes } from "react-router-dom";
import { Home } from "../page/home";
import { SingleOffer } from "../page/singleOffer";
import { AllOffer } from "../page/allOffer";


function MainRoute(){


    return(
        <>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/singleOffer" element={<SingleOffer/>}/>
            <Route path="/allOffer" element={<AllOffer/>}/>

          </Routes>
        </>
    )
}
export {MainRoute}
