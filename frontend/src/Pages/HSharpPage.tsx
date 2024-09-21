import { Unity, useUnityContext } from "react-unity-webgl";
import { PersonalLogo } from "../Components/Logo";
import { RedirectArrow } from "../Components/Redirect";

export const HSharpPage = () => {
    
    
    const { unityProvider } = useUnityContext({
        loaderUrl: "/build/TemplateData.loader.js",
        dataUrl: "/build/TemplateData.data",
        frameworkUrl: "/build/TemplateData.framework.js",
        codeUrl: "/build/TemplateData.wasm",
      });
    
      

      return (<div className="Island" style={{height:'750px', width:'70%'}}>
            <div className="IslandHeader">
                <p>H# Demo (Refresh The Page To Restart)</p>
            </div>
            <Unity style={{justifySelf:'center', alignSelf:'center', margin:'auto', position:'absolute', height:'650px', width:'60%', left:'20%', top:'15rem', borderRadius:'4px'}} unityProvider={unityProvider} />
        </div>)
        
        /*
        return (
            <p>H# Demo Currently Under Maintenance</p>
        )
        */
       
    };