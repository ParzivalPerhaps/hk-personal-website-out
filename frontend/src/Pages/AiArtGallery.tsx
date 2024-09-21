import { PersonalLogo } from "../Components/Logo";
import { RedirectArrow } from "../Components/Redirect";
import { ImageGallery } from "../Components/ImageGallery";
import { useEffect, useState } from "react";

export const AiArtGallery = () => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
      return (
        <>
            <div className="Island" id="training" style={{marginTop:'130px'}}>
                <div className="IslandHeader">
                <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>BE PATIENT, IT'S STILL LEARNING :) </span>EARLY LEARNING GENERATIONS <span className="TextLight" style={{fontSize:12}}>BE PATIENT, IT'S STILL LEARNING :)    </span></p>
                </div>
                <ImageGallery 
                maxImageHeight={((windowDimensions.width / 1136) * 300)+ "px"}
                images={["/scifiAiTPhoto1.png", "/scifiAiTPhoto2.png", "/scifiAiTPhoto3.png", "/scifiAiTPhoto4.png", "/scifiAiTPhoto5.png", "/scifiAiTPhoto6.png"]}
                captions={["500 Training Steps\nEarly on the model attempted to generate a cockpit, making connections between real cockpits (likely given the prompts referring to 'ships/vehicles') and Sci-Fi elements.", 
                "1100 Training Steps\nThe model began to understand sci-fi visual patterns however detail and semi-visual coherency was lacking.", 
                "1800 Training Steps\nThis generation is a derelict ship drifting in space, the model's poor lighting ability actually works to its advantage in this specific image", 
                "2000 Training Steps\nThe model also began to create more coherent environments and even tried to include a person (in the form of flight crew) in this image", 
                "2900 Training Steps\nAs it trained more, the model generated more reasonable depth-based images like this one (while the interior details were still lacking)", 
                "3300 Training Steps\nA much more coherent external view of a ship with noticeably more detail than previous generations"]}/>
            </div>

            <div id="highlights" className="Island">
                <div className="IslandHeader">
                <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>SORT OF OKAY ART. </span>HIGHLIGHTS <span className="TextLight" style={{fontSize:12}}>SORT OF OKAY ART.    </span></p>
                </div>
                <ImageGallery 
                maxImageHeight={((windowDimensions.width / 1136) * 300)+ "px"}
                images={["/scifiAiHPhoto1.png", "/scifiAiHPhoto2.png", "/scifiAiHPhoto3.png", "/scifiAiHPhoto4.png", "/scifiAiHPhoto5.png", "/scifiAiHPhoto6.png", "/scifiAiHPhoto7.png", "/scifiAiHPhoto8.png", "/scifiAiHPhoto9.png", "/scifiAiHPhoto10.png", "/scifiAiHPhoto11.png", "/scifiAiHPhoto12.png", "/scifiAiHPhoto13.png"]}
                captions={[]}/>
            </div>

            <div id="defects" className="Island" style={{marginBottom:'2rem'}}>
                <div className="IslandHeader">
                <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>AI HALLUCINATIONS. </span>DEFECTS <span className="TextLight" style={{fontSize:12}}>AI HALLUCINATIONS.    </span></p>
                </div>
                <ImageGallery 
                maxImageHeight={((windowDimensions.width / 1136) * 300)+ "px"}
                images={["/scifiAiDPhoto1.png", "/scifiAiDPhoto2.png", "/scifiAiDPhoto3.png", "/scifiAiDPhoto4.png", "/scifiAiDPhoto5.png", "/scifiAiDPhoto6.png"]}
                captions={[
                "What is a sky??\nWhen generating hybrid indoor/outdoor spaces, the model would sometimes generate the sky in areas where.. well the sky shouldn't be there.", 
                "Mega-zord Space Ship\nWhen generating a ship design, the model would occasionally pull too many shapes together and create some kind of abstract statue of a ship (with armor plating).", 
                "Ghosts\nWhen creating interior spaces, people could appear partially transparent or missing limbs (like this poor guy).", 
                "Weather\nGenerating images with weather like rain sometimes resulted in odd single strains of rain that were very long and strange cloud placement.", 
                "Modern Architecture\nWhen creating interior spaces occasionally the model would generate some abstract modern architecture with few hard lines/corners creating an intelligible image.", 
                "Landing Gear\nThe model frequently struggled to understand where landing gear should go leading to images like this where the center of gravity relative to the landing gear makes no sense (the environment is pretty though)"]}/>
            </div>
            
        </>
      )
       
    };