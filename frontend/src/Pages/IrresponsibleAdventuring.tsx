import { Unity, useUnityContext } from "react-unity-webgl";
import { PersonalLogo } from "../Components/Logo";
import { RedirectArrow } from "../Components/Redirect";

export const IrresponsibleAdventuringPage = () => {
    
    const { unityProvider } = useUnityContext({
        loaderUrl: "/irresponsibleAdventuring/TemplateData.loader.js",
        dataUrl: "/irresponsibleAdventuring/TemplateData.data",
        frameworkUrl: "/irresponsibleAdventuring/TemplateData.framework.js",
        codeUrl: "/irresponsibleAdventuring/TemplateData.wasm",
      });
    
      

      return (<div className="Island" style={{height:'900px', width:'70%'}}>
            <div className="IslandHeader">
                <p>Irresponsible Adventuring Demo (Refresh The Page To Restart)</p>
            </div>
            <Unity style={{justifySelf:'center', alignSelf:'center', margin:'auto', position:'absolute', height:'750px', width:'55%', left:'22%', top:'15rem', borderRadius:'4px'}} unityProvider={unityProvider} />
        </div>)
        
        /*
        return (
            <p>H# Demo Currently Under Maintenance</p>
        )
        */
       
    };