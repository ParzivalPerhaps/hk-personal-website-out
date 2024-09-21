import { useState } from "react";
import { PrevIcon } from "./PrevIcon";
import { NextIcon } from "./NextIcon";

interface ImageGalleryProps {
    images: string[],
    captions: string[],
    maxImageHeight: string
}

export const ImageGallery = (props: ImageGalleryProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

      return (
        <>
        <div className="Gallery">
            {currentImageIndex > 0 && <div className="Shadow" style={{backgroundColor:'#F1F1F1', marginRight:'7px', borderRadius:'4px', justifyContent:'center', alignItems:'center'}}>
                <div style={{margin:'auto'}}>
                    <PrevIcon color={"#2E3744"} padding="7px" onClick={() => {
                        setCurrentImageIndex(Math.max(0, currentImageIndex - 1))
                    }}/>
                </div>
                
            </div>}
            
                <img src={props.images[currentImageIndex]} className="Shadow" style={{height:'530px', borderRadius:'9px', maxHeight:props.maxImageHeight}} alt="gallery"/>
               {currentImageIndex + 1 < props.images.length && <div className="Shadow" style={{backgroundColor:'#F1F1F1', marginLeft:'7px', borderRadius:'4px', justifyContent:'center', alignItems:'center'}}>
                    <div style={{margin:'auto'}}>
                        <NextIcon color={"#2E3744"} padding={'7px'} onClick={() => {
                        setCurrentImageIndex(Math.min(props.images.length - 1, currentImageIndex + 1))
                    }}/>
                    </div>
                </div>}
            
        </div>

        {props.images.length === props.captions.length && props.captions[currentImageIndex].includes("\n") ? 
        <>
            <p style={{width:'60%', textAlign:'center'}} className="TextLight"><i>{props.captions[currentImageIndex].split("\n")[0]}</i></p>
            <p style={{width:'60%', textAlign:'center', marginTop:'5px'}} className="TextLight"><i>{props.captions[currentImageIndex].split("\n")[1]}</i></p>
        </>
        :
        <>
        <p style={{width:'60%', textAlign:'center'}} className="TextLight"><i>{props.captions[currentImageIndex]}</i></p>
        </>
        }
        </>
        )
       
    };