import { useEffect, useState } from "react";
import { PersonalLogo } from "../Components/Logo";
import { RedirectArrow } from "../Components/Redirect";

export const HomePage = () => {

  const [currentTitle, setCurrentTitle] = useState("");

  async function topTextAnim() {
    const titles = ["Hayden Karp", "Web Developer", "Game Developer", "3D Artist", "React", "C# && Unity", "TypeScript && JavaScript",  "Game Design"];
    let deleting = false;

    let titleIndex = 0;
    let charIndex = 0;
    let str = "";
    while (true) {
       await new Promise(resolve => setTimeout(resolve, 200));

       if (!deleting){
          let u = str + titles[titleIndex][charIndex];
          setCurrentTitle(u)
          str = u;
          
          if (charIndex + 1 == titles[titleIndex].length){
            await new Promise(resolve => setTimeout(resolve, 800));

            while (str.length > 0){
              await new Promise(resolve => setTimeout(resolve, 100));
              let u = str.substring(0, str.length - 1);
              setCurrentTitle(u)
              str = u;
            }

            if (titleIndex + 1 == titles.length){
              titleIndex = 0;
            }else{
              titleIndex += 1;
            }

            charIndex = 0;
          }else{
            charIndex += 1;
          }
       }
    }
  }

  useEffect(() => {
    topTextAnim();
  }, []);

    return (<>
    <div style={{display:'flex', marginTop:'200px', justifyContent:'center', width:'100%', minHeight:'160px', marginBottom:'0px'}}>
      <p id="titleText" style={{textAlign:'center', fontSize:48, verticalAlign:'middle'}}>{currentTitle}</p>
      <div style={{width:'20px', height:'40px', display:'inline', backgroundColor:'black', marginTop:'60px', marginLeft:'10px'}}/>
    </div>
        
        <div className="Island">
          <div className="IslandHeader">
            <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>LEARN ABOUT ME. LEARN ABOUT ME. LEARN ABOUT ME.  </span>ABOUT ME <span className="TextLight" style={{fontSize:12}}>LEARN ABOUT ME. LEARN ABOUT ME. LEARN ABOUT ME.  </span></p>
            
          </div>
          <div className="IslandItem">
            <div className='ChipGroup' style={{width:'50%'}}>
              <div className="Chip" style={{backgroundColor:'green'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>MongoDB</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#CBBF7A'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>NodeJS</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#7C98B3'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>AWS</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#006494'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>TypeScript</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#1B98E0'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>React</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#CD5D67'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Docker</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#26C485'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>C# & Unity</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#D58936'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Cloudflare</p>
              </div>
              
            </div>
            
            <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>Hi! I'm Hayden Karp, I love coffee, my pets (dogs AND cats, I don't discriminate), programming, and video games. Luckily enough for me those interests go quite well together while working as an Indie Game Developer. My skills include full-stack web development using React and TypeScript, as well as Game Development with Unity & C#. </p>
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
            


        <p className='TextLight' style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto',  lineHeight:'1.5', marginTop:'3rem'}}><i>"You can tell a lot about someone by where they get their quotes from" - Hayden Karp</i></p>

        
        {/*<div className="CardDeck">
          <div className="Card">
            <img width={145} height={200} style={{borderRadius:'20px'}} src='photo.jpg' alt='Hayden Karp'/>
          </div>
          <div className="Card">
            <img width={145} height={200} style={{borderRadius:'20px'}} src='photo.jpg' alt='Hayden Karp'/>
          </div>
          <div className="Card">
            <img width={145} height={200} style={{borderRadius:'20px'}} src='photo.jpg' alt='Hayden Karp'/>
          </div>
          <div className="Card">
            <img width={145} height={200} style={{borderRadius:'20px'}} src='photo.jpg' alt='Hayden Karp'/>
          </div>
        </div> 
        */}
            
            <div className="Island">
          <div className="IslandHeader">
            <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>WHAT I'VE CREATED. WHAT I'VE CREATED. WHAT I'VE CREATED.  </span>PROJECTS <span className="TextLight" style={{fontSize:12}}>WHAT I'VE CREATED. WHAT I'VE CREATED. WHAT I'VE CREATED.    </span></p>
            
          </div>
          <div className="IslandItem">
            <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5', fontSize:30}}>Check out what I've worked on! These projects are not organized in any specific way, but they will have skills attached.</p>
          </div>

          
        </div>


        <div style={{display:'flex'}}>
          <div className="Island" style={{maxWidth:'40%'}}>
            <div className="IslandHeader">
              <a rel='noreferrer' target='_blank' href="https://www.hugoacdec.com/">
                <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>AC-DEC PRACTICE WEBSITE.  </span><u>HUGOACDEC.COM</u> <span className="TextLight" style={{fontSize:12}}>AC-DEC PRACTICE WEBSITE.    </span></p>
              
              </a>
              
            </div>
            <div className="IslandItem">
              <div className='ChipGroup' style={{width:'50%'}}>
                <div className="Chip" style={{backgroundColor:'green'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>MongoDB</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#CBBF7A'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>NodeJS</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#7C98B3'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>AWS</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#006494'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>TypeScript</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#1B98E0'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>React</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#CD5D67'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Docker</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#D58936'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Cloudflare</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#4B3F72'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Python</p>
                </div>
                
              </div>
              
              <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>A practice platform created for Academic Decathlon competitors, users can sign up, practice thousands of questions, monitor their progress, and organize their clubs/programs using the organization and social features. </p>
            </div>

            
          </div>
          <div className="Island" style={{maxWidth:'40%'}}>
          <div className="IslandHeader">
            <a rel='noreferrer' target='_blank' href='https://store.steampowered.com/app/3037990/SCP_Site_Director/'>
              <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>MONSTER MANAGEMENT GAME.  </span><u>SCP: SITE DIRECTOR</u> <span className="TextLight" style={{fontSize:12}}>MONSTER MANAGEMENT GAME.    </span></p>
            
            </a>
          </div>
          <div className="IslandItem">
            <div className='ChipGroup' style={{width:'70%'}}>
              <div className="Chip" style={{backgroundColor:'#26C485'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>C# & Unity</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#7B9E89'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Marketing</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#3A506B'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Project Planning</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#B6174B'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Leadership & Coordination</p>
              </div>
              
            </div>
            
            <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>Sole programmer of a management game inspired by the popular SCP mythos with a unique text aesthetic. Architected a solution allowing for thousands of entities to exist efficiently with individual behaviors to simulate staff.  </p>
          </div>

          
        </div>
        </div>

        <div style={{display:'flex'}}>
          <div className="Island" style={{maxWidth:'40%'}}>
            <div className="IslandHeader">
              <a rel='noreferrer' target='_blank' href='https://www.clampdownshop.com'>
                <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>MARKETING WEBSITE. </span><u>CLAMPDOWNSHOP.COM</u> <span className="TextLight" style={{fontSize:12}}>MARKETING WEBSITE.    </span></p>
              </a>
            </div>
            <div className="IslandItem">
              <div className='ChipGroup'>
                <div className="Chip" style={{backgroundColor:'#1B98E0'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>React</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#8093F1'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Teamwork</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#7C98B3'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>AWS</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#D58936'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Cloudflare</p>
              </div>
                
              </div>
              
              <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>Created a marketing website for the product ClampDown for their marketing pitch. Iterated quickly based on feedback from the team. </p>
            </div>

            
          </div>
          <div className="Island" style={{maxWidth:'40%'}}>
          <div className="IslandHeader">
            <a rel='noreferrer' target='_blank' href='https://github.com/ParzivalPerhaps/argo-model-un-bot'>
            <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>MODEL UN BOT.  </span><u>ARGO MODEL UN BOT</u> <span className="TextLight" style={{fontSize:12}}>MODEL UN BOT.    </span></p>
            </a>
          </div>
          <div className="IslandItem">
            <div className='ChipGroup'>
              <div className="Chip" style={{backgroundColor:'green'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>JavaScript</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#CBBF7A'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>DiscordJS</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#7C98B3'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Self-Hosting</p>
              </div>
              
            </div>
            
            <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>This discord bot keeps track of nations (by default fictional) for Model UN events hosted over the chatting platform. Nations can be assigned and monitored per player and there are numerous ways to manipulate the persistent nation data. </p>
          </div>

          
        </div>
        </div>

        <div style={{display:'flex'}}>
          <div className="Island" style={{maxWidth:'40%'}}>
            <div className="IslandHeader">
              <a rel='noreferrer' target='_blank' href='/demos/h-sharp'>
                <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>INTERPRETED SCRIPTING LANGUAGE. </span><u>H#</u> <span className="TextLight" style={{fontSize:12}}>INTERPRETED SCRIPTING LANGUAGE.   </span></p>
              </a>
            </div>
            <div className="IslandItem">
              <div className='ChipGroup'>
              <div className="Chip" style={{backgroundColor:'#26C485'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>C# & Unity</p>
              </div>
              <div className="Chip" style={{backgroundColor:'green'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>WebGL</p>
              </div>
                
                
              </div>
              
              <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>Basic interpreted scripting language with variable initalization and modification, as well as branching logic and for/while loops and basic data types like ints, doubles, and strings. The syntax is inspired by C# and Java. Also created a basic editor to write and run H# code with Unity.</p>

              <div style={{marginTop:'2rem'}}>
              {true && <div className='LinkChip' style={{width:'40%', backgroundColor:'#1C7C54'}}>
                <a rel='noreferrer' target='_blank' href="/demos/h-sharp" style={{display:'flex'}}>
                    <p className='TextHeavy' style={{justifyContent:'center', margin:'auto', color:'#DEE0E7', marginRight:'5px'}}>TRY IT OUT  </p>
                    <RedirectArrow color='#FFFFFF'/>
                    </a>
                  </div> 
              }
                </div>
                
          
            </div>

            
          </div>
          <div className="Island" style={{maxWidth:'40%'}}>
          <div className="IslandHeader">
            <a rel='noreferrer' target='_blank' href='https://github.com/ParzivalPerhaps/irresponsible-adventuring'>
            <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>RETRO DUNGEON CRAWLER. </span><u>IRRESPONSIBLE ADVENTURING</u> <span className="TextLight" style={{fontSize:12}}>RETRO DUNGEON CRAWLER.    </span></p>
            </a>
          </div>
          <div className="IslandItem">
            <div className='ChipGroup'>
              <div className="Chip" style={{backgroundColor:'#26C485'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>C# & Unity</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#433A3F'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Game Design</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#CE8964'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Game Jam</p>
              </div>
              
            </div>
            
            <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>This dungeon crawler captures the aesthetic of old role playing games as you fight through skeletons and flying gargoyles to reach the end. The player has multiple attacks including a melee and ranged ability to pair well with the room based progression. </p>
          </div>

          
          <div style={{marginTop:'2rem', marginBottom:'2rem', width:'100%'}}>
              <div className='LinkChip' style={{width:'40%', backgroundColor:'#1C7C54'}}>
                <a rel='noreferrer' target='_blank' href="/demos/irresponsible-adventuring" style={{display:'flex'}}>
                    <p className='TextHeavy' style={{justifyContent:'center', margin:'auto', color:'#DEE0E7', marginRight:'5px'}}>TRY IT OUT  </p>
                    <RedirectArrow color='#FFFFFF'/>
                    </a>
                  </div>
                </div>

        </div>
        </div>

        <div style={{display:'flex'}}>
          <div className="Island" style={{maxWidth:'40%'}}>
            <div className="IslandHeader">
             
                <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>LAN-BASED FIRST PERSON SHOOTER. </span><u>DARK AND BROODING</u> <span className="TextLight" style={{fontSize:12}}>LAN-BASED FIRST PERSON SHOOTER.   </span></p>
              
            </div>
            <div className="IslandItem">
            <div className='ChipGroup'>
              <div className="Chip" style={{backgroundColor:'#26C485'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>C# & Unity</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#433A3F'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Game Design</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#CE8964'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Game Jam</p>
              </div>
              
            </div>
              
              <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>A LAN based first person shooter with a noir aesthetic, netcode built with Unity NetCode for Game Objects. The line-art noir aesthetic had to be heavily optimized to run on weak hardware along with feedback across the network (hitreg, elimination feed, leaderboard, etc), animations, etc.</p>
            </div>

            
          </div>
          <div className="Island" style={{maxWidth:'40%'}}>
          <div className="IslandHeader">
            <a rel='noreferrer' target='_blank' href='https://percival53.itch.io/motel-noir'>
              <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>TOP DOWN NOIR SHOOTER. </span><u>MOTEL NOIR</u> <span className="TextLight" style={{fontSize:12}}>TOP DOWN NOIR SHOOTER.    </span></p>
            </a>
          </div>
          <div className="IslandItem">
            <div className='ChipGroup'>
              <div className="Chip" style={{backgroundColor:'#26C485'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>C# & Unity</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#433A3F'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Game Design</p>
              </div>
              <div className="Chip" style={{backgroundColor:'#CE8964'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Game Jam</p>
              </div>
              
            </div>
            
            <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>A top down shooter where the player navigates a motel in an attempt to beat AI enemies and escape just with their trusty revolver. </p>
          </div>

          
        </div>
        </div>

        <div style={{display:'flex'}}>
          <div className="Island" style={{maxWidth:'40%'}}>
            <div className="IslandHeader">
              <a rel='noreferrer' target='_blank' href='/demos/scifi-ai-art-gallery'>
              <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>AI CONCEPT ART. </span><u>SCI-FI STABLE DIFFUSION MODEL</u> <span className="TextLight" style={{fontSize:12}}>AI CONCEPT ART.    </span></p>
              </a>
            </div>
            <div className="IslandItem">
              <div className='ChipGroup' style={{width:'35%'}}>
                <div className="Chip" style={{backgroundColor:'#CDA2AB'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>AI</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#1C7C54'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Wildcard</p>
                </div>
                <div className="Chip" style={{backgroundColor:'#4B3F72'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Python</p>
                </div>
                
              </div>

              <p style={{textAlign:'center', width:'85%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>An AI model trained to create science fiction space-ship concept art based on a text prompt. Accomplished through {">"}220k steps of training of a Stable-Diffusion 3 based model</p>
              <p className="TextHeavy" style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>Model file not published to respect copyright of training data creators, done for educational purposes only</p>
              
              <div style={{marginTop:'2rem', marginBottom:'2rem'}}>
              <div className='LinkChip' style={{width:'40%', backgroundColor:'#1C7C54'}}>
                <a rel='noreferrer' target='_blank' href="/demos/scifi-ai-art-gallery" style={{display:'flex'}}>
                    <p className='TextHeavy' style={{justifyContent:'center', margin:'auto', color:'#DEE0E7', marginRight:'5px'}}>CHECK OUT THE GALLERY  </p>
                    <RedirectArrow color='#FFFFFF'/>
                    </a>
                  </div>
                </div>

            </div>

            
          </div>
        </div>

        <div className="Island">
          <div className="IslandHeader">
            <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>EVERYTHING ELSE. EVERYTHING ELSE.  </span>OTHER STUFF <span className="TextLight" style={{fontSize:12}}>EVERYTHING ELSE. EVERYTHING ELSE.    </span></p>
            
          </div>
          <div className="IslandItem">
            <p style={{textAlign:'center', width:'70%', justifyContent:'center', margin:'auto', lineHeight:'1.5', fontSize:30}}>A few other things I've made that don't necessarily qualify as full projects, but they're still work I've done and cool!</p>
          </div>

          
        </div>

        <div style={{display:'flex'}}>
          <div className="Island" style={{maxWidth:'40%'}}>
            <div className="IslandHeader">
              <a rel='noreferrer' target='_blank' href='/demos/scifi-ai-art-gallery'>
              <p className='TextHeavy' style={{fontSize:20}}><span className="TextLight" style={{fontSize:12}}>I HAVE NO FONT BUT I MUST SCREEN. </span><u>TEXT SCREEN EFFECT</u> <span className="TextLight" style={{fontSize:12}}>I HAVE NO FONT BUT I MUST SCREEN.    </span></p>
              </a>
            </div>
            <div className="IslandItem">
              <div className='ChipGroup' style={{width:'35%'}}>
              <div className="Chip" style={{backgroundColor:'#26C485'}}>
                <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>C# & Unity</p>
              </div>
                <div className="Chip" style={{backgroundColor:'#1C7C54'}}>
                  <p style={{textAlign:'center', justifyContent:'center', margin:'auto'}}>Wildcard</p>
                </div>
                
              </div>

              <p style={{textAlign:'center', width:'85%', justifyContent:'center', margin:'auto', lineHeight:'1.5'}}>A unity effect that renders the environment in text, using the colors of the environment to assign different contextual text to certain objects.</p>
              <div style={{marginTop:'2rem', marginBottom:'2rem'}}>
              <div className='LinkChip' style={{width:'40%', backgroundColor:'#1C7C54'}}>
                <a rel='noreferrer' target='_blank' href="/demos/text-screen-effect" style={{display:'flex'}}>
                    <p className='TextHeavy' style={{justifyContent:'center', margin:'auto', color:'#DEE0E7', marginRight:'5px'}}>TRY IT OUT  </p>
                    <RedirectArrow color='#FFFFFF'/>
                    </a>
                  </div>
                </div>

            </div>

            
          </div>
        </div>
       
        </>
)};