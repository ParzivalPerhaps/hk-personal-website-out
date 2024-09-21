import { RedirectArrow } from "../Components/Redirect";
import { Document, Page, pdfjs } from 'react-pdf'

export const ContactPage = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString();
      
    return (<>
    <div style={{display:'flex'}}>
        <div className="Island" style={{width:'40%'}}>
            <div className="IslandHeader">
                <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>CONTACT ME HERE.  </span>CONTACT INFO <span className="TextLight" style={{fontSize:12}}>CONTACT ME HERE.  </span></p>
                
            </div>
            <div className="IslandItem" style={{width:'80%'}}>
                <p style={{textAlign:'center', width:'100%', justifyContent:'center', margin:'auto', lineHeight:'1.5', maxWidth:'100%', fontSize:30}}>Email: HaydenNinja@hotmail.com<br/>Phone: 972-536-3119</p>
            </div>    
        </div>

            
    </div>

    <div style={{display:'flex', marginTop:'3rem'}}>
              
              <div className='LinkChip'>
              <a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/hayden-karp" style={{display:'flex'}}>
                  <p className='TextHeavy' style={{justifyContent:'center', margin:'auto', color:'#DEE0E7', marginRight:'5px'}}>CONNECT WITH ME ON LINKEDIN  </p>
                  <RedirectArrow color='#FFFFFF'/>
                  </a>
                </div>
              
          </div>

    <div className="Island" style={{width:'40%', paddingBottom:'20px'}}>
                <div className="IslandHeader">
                    <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>PROFILE BREAKDOWN.  </span>RESUME <span className="TextLight" style={{fontSize:12}}>PROFILE BREAKDOWN.  </span></p>
                    
                </div>
               
                    <div style={{maskClip: 'view-box', overflow:'hidden', height:'770px', margin:'20px', borderRadius:'10px'}}>
                        <Document file="Hayden-Karp-Resume.pdf">
                            <Page pageIndex={0} pageNumber={1} width={600}/>
                        </Document>
                    </div>
                   
                
                    <div className='LinkChip' style={{width:'30%', backgroundColor:'#433A3F'}}>
                        <a download={true} href="Hayden-Karp-Resume.pdf" style={{display:'flex'}}>
                            <p className='TextHeavy' style={{justifyContent:'center', margin:'auto', color:'#DEE0E7', marginRight:'5px'}}>DOWNLOAD RESUME  </p>
                            <RedirectArrow color='#FFFFFF'/>
                        </a>
                    </div>
              


            
            </div>
        


            
        </>
)};