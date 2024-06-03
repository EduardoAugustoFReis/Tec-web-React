import {Route, Routes, BrowserRouter} from "react-router-dom";
import { Home } from "../pages/home";
import { Contacts } from "../pages/contacts";
import { NotFoundPage } from "../pages/notFound";

export function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}