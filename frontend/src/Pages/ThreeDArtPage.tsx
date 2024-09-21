import { RedirectArrow } from "../Components/Redirect";

export const ThreeDArtPage = () => {
      
    return (<>
    <div style={{display:'flex', flexWrap:'wrap', marginTop:'100px'}}>
        {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((v:number) => {
                return (
                    <img src={v > 18 ? `/3d-art/${v.toString()}.png` : `/3d-art/${v.toString()}.jpeg`} alt={v.toString()} style={{maxWidth:'500px', maxHeight:'200px', justifyContent:'center', margin:'2px', marginLeft:'auto', marginRight:'auto'}}/>
                )
            })
        }
    </div>


            
        </>
)};