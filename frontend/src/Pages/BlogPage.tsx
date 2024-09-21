import { useState } from "react";
import { PersonalLogo } from "../Components/Logo";
import { RedirectArrow } from "../Components/Redirect";

export const BlogPage = () => {

    const chipColors: string[] = ["#26C485", "#433A3F"];
    const chipHoverColors: string[] = ["#24B67C", "#3E363A"];
    const chipNames: string[] = ["ISM", "Other"];
    const [chipStates, setChipStates] = useState<boolean[]>([true, true]);
    const [chipHoverStates, setChipHoverStates] = useState<boolean[]>([false, false]);

return (<>
    <div className="Dock" style={{marginTop:'150px'}}>
        <div className='ChipGroup'>
            {
                chipStates.map((v:boolean, index: number) => {
                    if (v === true){
                        return <div onClick={() => {
                            let arr = [...chipStates];
                            arr[index] = false;

                            setChipStates(arr);
                        }}
                        onMouseEnter={() => {
                            let arr = [...chipHoverStates];
                            arr[index] = true;

                            setChipHoverStates(arr);
                        }}
                        onMouseLeave ={() => {
                            let arr = [...chipHoverStates];
                            arr[index] = false;

                            setChipHoverStates(arr);
                        }}
                        className="Chip" style={{backgroundColor:chipHoverStates[index] ? chipHoverColors[index] : chipColors[index], cursor:'pointer'}}>
                            <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>{chipNames[index]}</p>
                        </div>
                    }else{
                        return <div onClick={() => {
                            let arr = [...chipStates];
                            arr[index] = true;

                            setChipStates(arr);
                        }}
                        onMouseEnter={() => {
                            let arr = [...chipHoverStates];
                            arr[index] = true;

                            setChipHoverStates(arr);
                        }}
                        onMouseLeave ={() => {
                            let arr = [...chipHoverStates];
                            arr[index] = false;

                            setChipHoverStates(arr);
                        }}
                         className="Chip" style={{backgroundColor:chipHoverStates[index] ? '#7E8980' : '#8E9A91', cursor:'pointer'}}>
                            <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>{chipNames[index]}</p>
                        </div>
                    }
                })
            }  
        </div>
    </div>

    {false && <div style={{display:'flex'}}>
        <div className="Island" style={{width:'40%', maxHeight:'200px', minHeight:'200px', paddingBottom:'35px'}}>
            <div className="IslandHeader">
                <p className="TextLight">Aug. 29 - What is a cube?</p>
                <div className="Chip" style={{backgroundColor:"#26C485", marginBottom:'10px'}}>
                    <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>ISM</p>
                </div>
            </div>

            <p style={{textAlign:'center'}}>Game engines do a lot more than show fancy graphics on the screen, but that part is hard too..</p>
            <div className='LinkChip' style={{width:'40%', backgroundColor:'#1C7C54', marginTop:'10px'}}>
                <div style={{display:'flex'}}>
                <p className='TextHeavy' style={{justifyContent:'center', margin:'auto', color:'#DEE0E7', marginRight:'5px'}}>READ THE POST HERE  </p>
                <RedirectArrow color='#FFFFFF'/>
                </div>
                    
            </div>
            
        </div>
    </div>}

    <p style={{textAlign:'center', marginTop:'10rem'}}>Nothing here just yet.. Come back a little later</p>


</>
)};