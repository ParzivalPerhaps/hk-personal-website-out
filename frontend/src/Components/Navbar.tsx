import { Outlet } from "react-router-dom";
import { PersonalLogo } from "./Logo";

export const Navbar = () => (
    <div className="App">

    
    <div className="Navbar">
        
    <a href="/">
        <div className="NavbarBrand">
        <PersonalLogo height='67' width='69'/>
        </div>
    </a>
    
    <div className="NavbarItem">
      {
        window.location.href.substring(window.location.href.lastIndexOf("/"), window.location.href.length) === "/" && !window.location.href.includes("3d-art") ?
            <p className="TextHeavy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              HOME
            </p>

          :
          <a href="/">
              <p className="TextHeavy">
              HOME
              </p>
          </a>
      }
          
      </div>
    <div className="NavbarItem">
      {window.location.href.substring(window.location.href.lastIndexOf("/"), window.location.href.length) === "/3d-art" ?
            <p className="TextHeavy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              3D ART
            </p>

          :
          <a href="/3d-art">
              <p className="TextHeavy">
                3D ART
              </p>
          </a>}
          
      </div>

      <div className="NavbarItem">
          <a href="/contact">
              <p className="TextHeavy">
                CONTACT
              </p>
          </a>
      </div>

      {
      window.location.href.substring(window.location.href.lastIndexOf("/"), window.location.href.length) === "/" && <>
      <div className="NavbarItem" onClick={() => window.scrollTo({ top: 1150, behavior: "smooth" })}>
      <p className="TextHeavy" style={{backgroundColor:'#2E3744', color:'#F1F1F1', padding:'5px', borderRadius:'4px'}}>
                  PROJECTS
              </p>
        </div>
        </>
      }

      {
      window.location.href.includes("scifi-ai-art-gallery") && <>
      <div className="NavbarItem" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <p className="TextHeavy" style={{backgroundColor:'#2E3744', color:'#F1F1F1', padding:'5px', borderRadius:'4px'}}>
                  LEARNING
              </p>
      </div>
    
      <div className="NavbarItem" onClick={() => window.scrollTo({ top: ((document.getElementById('highlights')?.getBoundingClientRect().top || 10000) - 150) + document.documentElement.scrollTop, behavior: "smooth" })}>
      <p className="TextHeavy" style={{backgroundColor:'#2E3744', color:'#F1F1F1', padding:'5px', borderRadius:'4px'}}>
                  HIGLIGHTS
              </p>
        </div>

        <div className="NavbarItem" onClick={() => window.scrollTo({ top: ((document.getElementById('defects')?.getBoundingClientRect().top || 10000) - 150) + document.documentElement.scrollTop, behavior: "smooth" })}>
      <p className="TextHeavy" style={{backgroundColor:'#2E3744', color:'#F1F1F1', padding:'5px', borderRadius:'4px'}}>
                  DEFECTS
              </p>
        </div>
        </>
      }
    
    
    
  </div>
  <Outlet/>

  {!window.location.href.includes("demos") && !window.location.href.includes("blog") && <div className="Footer">
  <p>Hayden Karp && HaydenNinja@hotmail.com && <span><a style={{color:'#F1F1F1'}} target="_blank" rel="noreferrer" href="https://github.com/ParzivalPerhaps"><u>My GitHub</u></a></span></p>
      
  </div>}
  </div>

);