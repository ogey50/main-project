import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import ogey from "./IMAGES/companylogo.png"
import ladies from "./IMAGES/part.png"
import computer from"./IMAGES/computer.png"
import people from"./IMAGES/intro-pix.png"
import microsoft from"./IMAGES/msicons.jpg"
import amazon from"./IMAGES/amazon-icon.jpg"
import jquery from"./IMAGES/jquery-icon.jpg"
import google from"./IMAGES/google-icon.jpg"
import firstman from"./IMAGES/fisrtman.jpg"
import secondman from"./IMAGES/secondman.jpg"
import thirdman from"./IMAGES/thirdman.jpg"
import heroImage from"./IMAGES/hero1.jpg"
import logopng from"./IMAGES/companylogo.png"



function App() {
  return (
    <div className="container-fluid">
      <header className="row main">
        <div className="headertext col-5"> 
          <p>GET SUPPORT: <a href="default.asp">NO REPLY @ DOMAIN.COM</a></p>
        </div>
        <div className="headericons col-5">
           <FaFacebookF style={{margin:"18px"}} />
           <FaTwitter style={{margin:"18px"}} />
           <FaGooglePlusG style={{margin:"18px"}} />
           <FaLinkedinIn style={{margin:"18px"}} />
           <FaPinterestP style={{margin:"18px"}} />
        </div>
      </header>
      
      <div className="secondp row">
        <div className="secondcontent col-6">
          <log className="companylog">
          <img src={ogey} 
           alt="company logo"style={{width:"190px", height:"140px", objectFit:"contain", 
          paddingBottom:"40px", paddingLeft:"40px",}} />

          </log>
          
          <text className="textlink col-6 py-6">
          <a href="default.content">About</a>
          <a href="default.content">Our Process</a>
          <a href="default.content">Services</a>
          <a href="default.content">People</a>
          <a href="default.content">Testimonials</a>
          <a href="default.content">Contact</a>
          </text>
        </div>

    </div>

    <div className="planning">
      <div className="mainImage1 row">
      <img src={ladies} alt="official ladies"/>
      </div>

    </div>


    <section className="highlights row my-5 " style={{padding:"50px", color:"gray" , backgroundColor:"white" , height:"300px"}}>
        <div className= "col-4" >
          <h6>Business Planning</h6>
          <h5>Strategy and Execution</h5>
          <p>Lorem Ipsum is simply dummy text 
            of the printing <br/>and typesetting industry. 
            Lorem Ipsum has been he industry's standard dummy text ever since</p>
        </div>
        <div className="col-4">
        <h6>Extremely Analysis</h6>
          <h5>Financial Projection</h5>
          <p>Lorem Ipsum is simply dummy text 
            of the printing <br/>and typesetting industry. 
            Lorem Ipsum has been he industry's standard dummy text ever since</p>
        </div>
        <div className="col-4">
          <h6>Excellent Opportunities</h6>
          <h5>International Business</h5>
          <p>Lorem Ipsum is simply dummy text 
            of the printing <br/>and typesetting industry. 
            Lorem Ipsum has been he industry's standard dummy text ever since</p>
        </div>
        
      </section>
  
  <sectiontwo className=" computerrow row py-5"  style={{background:"whitesmoke", height:"550px"}}>

<div className="col-5" style={{marginLeft:"30px", marginRight:"15px", paddingTop:"30px"}}>
<button type="button" class="btn btn-success no-border-radius mb-3">Get Start Now</button>
<h1 style={{color:"darkblue"}}>The world's most powerful<br/> website build now.</h1>
<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   It has survived not only five centuries, 
  but also the leap into electronic typesetting,
   remaining essentially unchanged.</p>
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
   It has survived not only five centuries, 
   but also the leap into electronic typesetting, remaining essentially unchanged.</p>
   <button type="button" class="btn btn-dark rounded-pill mt-4">Read More</button>
  
</div>

<div className="col-6" style={{marginLeft:"30px",}}>
  <img src={computer} alt="computer-roll" style={{width:"650px", height:"400px", objectFit:"cover"}}/>
</div>
      </sectiontwo>

      <div className="row bizplan text-white">
      <div className=" bizplan-text col-7 mt-4 text-white ">
        <h2 class="">Looking for a first-class business plan consultant?</h2>
      </div>
      <div className="col-3">
        <button type="button" class=" buttoncube btn btn-outline-light text-white rounded-pill mt-4" >Register Today </button>
       
        </div>
    </div>

    <sectionthree className="row numbering" style={{backgroundColor:"white" ,display:"flex"}}>
            <div className="statement1 col-3 text-justify" style={{fontSize:"15px", textAlign:"justify",padding:"45px" }}>
              <h1 className="statement1" style={{fontSize:"60px"}}>01.</h1>
              <h4>Technological innovation</h4>
              <p>Lorem Ipsum is simply dummy text<br/> printing.</p>
              <p>Lorem Ipsum is simply dummy text <br/>of the printing & 
                typesetting <br/>industry. Lorem Ipsum has been the<br/> industry's standard dummy.</p>
                <hr style={{ width:"60px", height:"3px", background:"green", border:"none", opacity:"revert"}}/>
                </div>

                <div className="col-3"style={{fontSize:"15px", textAlign:"justify", padding:"45px"}}>
              <h1 className="statement1" style={{fontSize:"60px", fontFamily:"fantasy"}}>02.</h1>
              <h5>Technological innovation</h5>
              <p>Lorem Ipsum is simply dummy text <br/>printing.</p>
              <p>Lorem Ipsum is simply dummy text<br/> of the printing & 
                typesetting <br/>industry. Lorem Ipsum has been the <br/>industry's standard dummy.</p>
                <underline style={{width:"60px", height:"3px", background:"green", border:"none", opacity:"revert"}}/>
                </div>
                

                <div className="col-3" style={{fontSize:"15px", textAlign:"justify", padding:"45px"}}>
              <h1 className="statement1" style={{fontSize:"60px", fontFamily:"fantasy"}}>03.</h1>
              <h5>Technological innovation</h5>
              <p>Lorem Ipsum is simply dummy text<br/> printing.</p>
              <p>Lorem Ipsum is simply dummy text <br/>of the printing & 
                typesetting <br/>industry. Lorem Ipsum has been the <br/>industry's standard dummy.</p>
                <underline style={{width:"60px", height:"3px", background:"green", border:"none", opacity:"revert"}}/>
                </div>

                <div className="col-3"style={{fontSize:"15px", textAlign:"justify", padding:"45px"}}>
              <h1 className="statement1" style={{fontSize:"60px", fontFamily:"fantasy"}}>04.</h1>
              <h5>Technological innovation</h5>
              <p>Lorem Ipsum is simply dummy text<br/> printing.</p>
              <p>Lorem Ipsum is simply dummy text<br/> of the printing & 
                typesetting <br/>industry. Lorem Ipsum has been the <br/>industry's standard dummy.</p>
                <underline style={{width:"60px", height:"3px", background:"green", border:"none", opacity:"revert"}}/>
                </div>
            </sectionthree>

            <introduction className="row simple-pic">
              <img src={people} alt="simple pic"/>
            </introduction>

            <div className="row microsoft-icons">
          <div className="col-3">
          <img src={microsoft} alt="icon1"/>
          </div>
          <div className="col-3">
          <img src={amazon} alt="icon2"/>
          </div>
          <div className="col-3">
          <img src={jquery} alt="icon3"/>
          </div>
          <div className="col-3">
          <img src={google} alt="icon4"/>
          </div>

          </div>

      
      
<div className="row services "py-12 bg-gray-100 text-center >
      <h2 className=" our-services ?text-3xl font-bold text-gray-800">OUR SERVICES</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-align-center">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                  has been the <br/>industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type <br/>and 
                  scrambled it to make a type specimen book.
      </p>

<div className="row py-5" style={{paddingLeft:"40px", paddingRight:"40px"}}>
 <div className="col-4" >
  <div className="row div2">
  <div className="col-3" style={{fontSize:"50px", color:"green"}}/></div>
  <div className="col-7" style={{marginRight:"70px"}}><h6 class="text-black">
  <b>ONLINE EARNING</b></h6></div>
  </div>
  <p>Lorem Ipsum is simply dummy
     text of the printing and typesetting industry. 
     Lorem Ipsum has been he industry's standard dummy text ever since.</p>
</div>

<div className="col-5">
<h6 class="text-black"><b>ADVERTISEMENT</b></h6>
  <p>Lorem Ipsum is simply dummy
     text of the printing and typesetting industry. 
     Lorem Ipsum has been he industry's standard dummy text ever since.</p>
</div>
<div className="col-5">
<h6 class="text-black"><b>UNIQUE SHORTCODE</b></h6>
  <p>Lorem Ipsum is simply dummy
     text of the printing and typesetting industry. 
     Lorem Ipsum has been he industry's standard dummy text ever since.</p>
</div>
<div className="col-5 mt-3">
<h6 class="text-black"><b>MARKET PLACE</b></h6>
  <p>Lorem Ipsum is simply dummy
     text of the printing and typesetting industry. 
     Lorem Ipsum has been he industry's standard dummy text ever since.</p>
</div>
<div className="col-5 mt-3">
<h6 class="text-black"><b>SUPPORT</b></h6>
  <p>Lorem Ipsum is simply dummy
     text of the printing and typesetting industry. 
     Lorem Ipsum has been he industry's standard dummy text ever since.</p>
</div>
<div className="col-5 mt-3">
<h6 class="text-black"><b>DESIGN</b></h6>
  <p>Lorem Ipsum is simply dummy
     text of the printing and typesetting industry. 
     Lorem Ipsum has been he industry's standard dummy text ever since.</p>
</div>


<main>
        <div style={{padding:"70px" ,backgroundColor:"white"}}>
        <h1 class="text-center" style={{fontFamily:"sans-serif", fontWeight:"bold"}}>MEET OUR PEOPLE</h1>
        <p class="text-center" style={{color:"black"}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type <br/>and scrambled it
           to make a type specimen book.</p>
           </div>
<div className="row man p-2 mb-0">
           <div className="col-4" style={{paddingLeft:"50px"}}>
            <img src={firstman} alt="man1" style={{width:"80%", height:"60%", objectFit:"contain",}}/> 
            <h6 class="text-center mb-0 mt-3"><b>Sara Smith</b></h6>
            <h6 class="text-center mt-0" style={{color:"gray"}}>Founder and CEO</h6>
            <hr class="mx-auto"style={{width:"350px"}}></hr>
           
            </div>
           <div className="col-4"> 
            <img src={secondman} alt="man2" style={{width:"80%", height:"60%", objectFit:"contain"}}/>
            <h6 class="text-center mb-0 mt-3"><b>Soma Christian</b></h6>
            <h6 class="text-center mt-0" style={{color:"gray"}}>Creative Director</h6>
            <hr class="mx-auto"style={{width:"350px"}}></hr>
          
            
            </div>
           <div className="col-4" style={{paddingRight:"80px"}}>
             <img src={thirdman} alt="man3" style={{width:"80%", height:"60%", objectFit:"contain"}}/>
             <h6 class="text-center mb-0 mt-3"><b>Andrew Lupkin</b></h6>
            <h6 class="text-center mt-0" style={{color:"gray"}}>Developer Head</h6>
            <hr class="mx-auto"style={{width:"350px"}}></hr>
          
             </div>
             </div>
      </main>

      <nav className=" number1 row" style={{backgroundColor:"whitesmoke", 
        alignContent:"center", alignItems:"right",height:"200px", padding:"150px", paddingRight: "300px"}}>
     
        <div className="col-3" >
          <h1><b>1500</b></h1>
          <p>Projects Completed</p>
        </div>
        <div className="col-3" >
          <h1><b>1400</b></h1>
        <p>Happy Clients</p>
        </div>
        <div className="col-3" >
        <h1><b>1250</b></h1>
        <p>Cups of Coffee</p>
        </div>
        <div className="col-3" >
        <h1><b>1600</b></h1>
        <p>Hours Worked</p>
        </div>
      
      </nav>
      <section className="row progression" style={{padding:"90px" ,backgroundColor:"white"}}>
  <div className="col-6">
    <h1 style={{color:"darkblue", fontSize:"42px", marginBottom:"18px", fontFamily:"san-serif"}}>Set up your awesome<br/>
    business website quickly.</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has
       survived not only five centuries, but also the leap into 
       electronic typesetting, remaining essentially unchanged.</p>
  </div>

  <div className="col-6 progressbar">
  
 <div className="progbar1"> 
  <div class="progress" style={{height:"4px", width:"500px"}}>
  <div class="progress-bar" style={{width:"120%"}}></div>
  <p style={{fontSize:"12px"}}>WORKING HOURS</p>
</div>
</div>

<div className="progresebar1">
  <div class="progress" style={{height:"4px", width:"500px"}}>
  <div class="progress-bar" style={{width:"100%"}}> </div>
  <div>
    <span class="progress-label"> AWESOME PROJECT</span>
    </div>
  
</div>
</div>

<div className="progressbar2">
  <div class="progress" style={{height:"4px", width:"500px"}}>
  <div class="progress-bar" style={{width:"80%"}}></div>
<p  style={{fontSize:"24px"}}>CUPS OF COFFEE</p>
</div>
</div>
<div className="progbar">
  <div class="progress" style={{height:"4px", width:"500px", color:"darkblue"}}>
  <div class="progress-bar" style={{width:"100%"}}></div>
  <p  style={{fontSize:"24px"}}>HAPPY CUSTOMERS</p>
</div>
</div>


  </div>
</section>

<main className="row inview">
  <div className="col-6 p-0 inview-image" >
    <img src={heroImage} alt="official personnel" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
  </div>
  <div className="col-6   inview-textt">
    <div style={{padding:"80px" , backgroundColor: "blue"}}>
   <div >
    <h1 class="text-white mb-0" ><b>We're small but impressive.</b></h1>
    <h1 class="text-white mb-3">Experience the power of <br/>LeadGen.</h1>
    </div>

    <div className="row  inward text-white ">
    <h5 className="col-5" style={{fontSize:"15px", fontFamily:"san-serif",}}>COMPANY MISSION</h5>
    <h5 className="col-5" style={{fontSize:"15px", fontFamily:"san-serif",}}>WHY CHOOSE US</h5>
    <h5 className="col-5" style={{fontSize:"15px",fontFamily:"san-serif",}}>OUR PROMISE</h5>
    <hr style={{width:"70px", height:"5px", background:"white", }}/>
    <h5 className="col-4"style={{fontSize:"15px",fontFamily:"san-serif",}}>WHAT WE DO</h5>
  </div>
 <p style={{fontSize:"14px", color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been
  the standard dummy text. Lorem Ipsum is simply <br/>dummy text of the printing and typesetting industry. Lorem Ipsum is simply<br/>
  dummy text of the printing and typesetting industry. Lorem Ipsum has been the<br/> standard dummy text.</p>
  <p style={{fontSize:"14px", color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum 
    has been the<br/> standard dummy text. Lorem Ipsum is simply<br/> dummy text of the printing and typesetting 
    industry. Lorem Ipsum is simply<br/> dummy text of the printing and typesetting industry.</p>
<button type="button" class="btn btn-light rounded-pill mt-4 w-25">Read More</button>
  </div>
  </div>
</main>


<section className="highlights row my-5 " style={{padding:"300px", color:"gray" , backgroundColor:"white" , height:"100px ,"}}>
        <div className= "col-4" >
          <h5 p>Lorem Ipsum is simply dummy text 
            of the printing <br/>and typesetting industry. 
            Lorem Ipsum has been he industry's standard dummy text ever since</h5>
        </div>
        <div className="col-4">
          <h5 p>Lorem Ipsum is simply dummy text 
            of the printing <br/>and typesetting industry. 
            Lorem Ipsum has been he industry's standard dummy text ever since</h5>
        </div>
        <div className="col-4">
          <h5 p>Lorem Ipsum is simply dummy text 
            of the printing <br/>and typesetting industry. 
            Lorem Ipsum has been he industry's standard dummy text ever since</h5>
        </div>
        
      </section>

<nav className="mainform row">
  <div className="col-6  ">
  <form action="/action_page.php form-border border: 1px solid #ddd" style={{padding:"70px"}}>
  <h4>Ready to Get Started?</h4>
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Your Name:</label>
    <input type="name" class="form-control" id="name" placeholder="Enter name" name="name "/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Your Email:</label>
    <input type="email" class="form-control" id="email" placeholder="email" name="email"/>
  </div>
  <div class="form-check mb-3">
  <label for="comment">Comments:</label>
  <textarea class="form-control " rows="4" id="comment" name="text"></textarea>
  </div >
  <button type="button" class="btn btn-success text-white rounded-pill mt-3 cuswidth" >SEND MESSAGE </button>
</form>
  </div>
  <div className="col-6" style={{padding:"70px"}}>
<h3>Looking For a Excellent<br/> Business Idea?</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/>industry. 
  Lorem Ipsum has been the standard dummy text.</p>
  <button type="button" class="btn btn-outline-success text-success rounded-pill mt-4 mb-3 cuswidth" >Get Directions </button>
  <hr style={{width:"500px",  paddingBottom:"5px"}}></hr>
  <h5>Our Headquarters</h5>
  <p style={{fontSize:"14px"}}>301 The Greenhouse, Custard,<br/> Factory, London, E2 8DY.</p>
  <p style={{fontSize:"14px"}}>+44 (0) 123 456 7890<br/> no-reply@domain.com</p>
  </div>
</nav>


<footer className="row lastrow" style={{padding:"70px"}}>
  <div className="col-6">
    <img src={logopng} alt="main logo" style={{width:"30%", height:"30px", objectFit:"contain"}}/>
    <p style={{marginTop:"20px", fontSize:"14px", color:"gray"}}>We've been crafting beautiful websites, launching stunning
       brands and making clients happy for years. With our prestigious craftsmanship.</p>
  </div>
  <div className="col-6 justify-content-left ">
  <div className="row justify-content-left" >

   <div className="col-4" style={{color:"gray", fontSize:"15px", }}> <h5 style={{color:"black"}}> <b>Company</b></h5>
      <ul style={{listStyleType:"none", padding:"5px"}}>
        <li class="mb-2">About Us</li>
        <li class="mb-2">Testimonials</li>
        <li>FAQs</li>
      </ul></div>
   
      <div className="col-4" style={{color:"gray", fontSize:"15px", }}> <h5 style={{color:"black"}}><b> Useful Link</b></h5>
      <ul style={{listStyleType:"none", padding:"5px"}}>
        <li class="mb-2">Our process</li>
        <li class="mb-2">People</li>
        <li>Client</li>
      </ul></div>
    
      <div className="col-4" style={{color:"gray", fontSize:"15px", }}> <h5 style={{color:"black"}}><b>Follow Us</b></h5>
      <ul style={{listStyleType:"none", padding:"5px"}}>
        <li class="mb-2">Facebook</li>
        <li class="mb-2">Twitter</li>
        <li>Google us</li>
      </ul></div>
      
    </div>
  </div>
  <hr style={{width:"1200px", height:"3px", color:"gray" }}/>
  <div className="row">
    <div className="col-5">
  <p style={{color:"gray", fontSize:"13px"}}>© 2016 LeadGen is Proudly Powered By ThemeZaa.</p>
  </div>
  <div className="col-7 hlogo" >
  <FaFacebookF style={{margin:"18px",}}/>
  <FaTwitter style={{margin:"18px"}}/>
  <FaGooglePlusG style={{margin:"18px",  color:"red"}}/>
  <FaLinkedinIn style={{margin:"18px",  color:"red"}}/>
  <FaPinterestP style={{margin:"18px"}}/>

  </div>

  </div>
</footer>

























      </div>

      

    



    




      
      </div>


    
  );
}

export default App;
