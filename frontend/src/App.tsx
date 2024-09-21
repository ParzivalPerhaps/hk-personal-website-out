import './App.css';
import { BackgroundCircut } from './Components/BackgroundOne';
import { PersonalLogo } from './Components/Logo';
import { RedirectArrow } from './Components/Redirect';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './Pages/HomePage'; 
import { BlogPage } from './Pages/BlogPage';
import { DemoPage } from './Pages/DemoPage';
import { Navbar } from './Components/Navbar';
import { HSharpPage } from './Pages/HSharpPage';
import { AiArtGallery } from './Pages/AiArtGallery';
import { ContactPage } from './Pages/ContactPage';
import { IrresponsibleAdventuringPage } from './Pages/IrresponsibleAdventuring';
import { TextScreenEffectPage } from './Pages/TextScreenEffectPage';
import { ThreeDArtPage } from './Pages/ThreeDArtPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        
          <Route index element={<HomePage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="3d-art" element={<ThreeDArtPage/>}/>
          <Route path="demos" element={<DemoPage />}/>
          <Route path='demos/h-sharp' element={<HSharpPage/>}/>
          <Route path='demos/scifi-ai-art-gallery' element={<AiArtGallery/>}/>
          <Route path='demos/irresponsible-adventuring' element={<IrresponsibleAdventuringPage/>}/>
          <Route path='demos/text-screen-effect' element={<TextScreenEffectPage/>}/>
          {/*
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );

  /*
  <div style={{top:'6rem', position:'absolute'}}>
        <BackgroundCircut/>
        </div>
  */
}

export default App;
