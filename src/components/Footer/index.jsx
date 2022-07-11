import React from "react";
import "./style.scss";
import aboutPic from "./pics/icons8-about-100.png";
import visionPic from "./pics/icons8-vision-64.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="card">
            <div id="motto-color" className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                    <p>Motto</p>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#motto-modal">Read More</a>      
                </div>
            </div>
        </div>
        <div className="card">
            <div id="vision-color" className="face face1">
                <div className="content">
                    <img src={visionPic} />
                    <p>Vision</p>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>KLE Technological University will be a national leader in Higher Education.</p>
                        <a href="#vision-modal">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div id="mission-color" className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                    <p>Mission</p>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>KLE Technological University is dedicated to teaching that meets highest standards of excellence, generation and application of new knowledge through research and creative endeavours.</p>
                        <a href="#mission-modal">Read More</a>
                </div>
            </div>
        </div>
      <div className="card">
              <div id="about-color" className="face face1">
                  <div className="content">
                      <img src={aboutPic} />
                      <p>About</p>
                  </div>
              </div>
              <div className="face face2">
                  <div className="content">
                      <p>KLE Technological University has its roots in one of the premier engineering institutions of Karnataka, B. V. Bhoomaraddi College of Engineering and Technology (BVB), a prestigious engineering college in Hubli.</p>
                          <a href="#about-modal">Read More</a>
                  </div>
              </div>
          </div>
      
      </div>
    <div className="wrapper">
    <div id="motto-modal" className="modal">
      <div className="modal__content">
        <h1>Motto</h1>

        <p>
          You can use the :target pseudo-className to create a modals with Zero JavaScript. Enjoy!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia autem voluptatum quibusdam quos! Culpa fugiat temporibus alias exercitationem, quo delectus, dolor beatae saepe odio deleniti, laudantium quod ad! Nostrum, repellendus!
        </p>

        <a href="#" className="modal__close">&times;</a>
      </div>
    </div>
  </div>
  <div className="wrapper">
    <div id="vision-modal" className="modal">
      <div className="modal__content">
        <h1>Vision</h1>
    
        <p>
          KLE Technological University will be a national leader in Higher Education –recognized globally for innovative culture, outstanding student experience, research excellence and social impact.
        </p>
    
        <a href="#" className="modal__close">&times;</a>
      </div>
    </div>
    </div>
      <div className="wrapper">
        <div id="mission-modal" className="modal">
          <div className="modal__content">
            <h1>Mission</h1>
        
            <p>
              The three-fold mission of the University is:<br></br>
              •	To offer undergraduate and post-graduate programs with engaged and experiential learning environment, enriched by high quality instruction, that prepares students to succeed in their lives and professional. <br></br>
              •	To enable and grow disciplinary and inter-disciplinary areas of research, that build on present strengths and future opportunities, aligning with areas of national strategic importance and priority.<br></br>
              •	To actively engage in Socio-economic development of the region, by contributing our expertise, experience and leadership, to enhance competitiveness and quality of life.<br></br>
              As a unified community of faculty, staff and students, we work together with the spirit of collaboration and partnership to accomplish our mission.
            </p>
        
            <a href="#" className="modal__close">&times;</a>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div id="about-modal" className="modal">
          <div className="modal__content">
            <h1>About</h1>
        
            <p>
              The founding organization KLE Society, Belgaum, established BVB college in 1947 with an aspiration of creating an institution that would lay the foundation of modern engineering education in northern region of Karnataka. Over the years, it evolved to reach and hold a unique position of pride in the technical education system of India. As we entered into the 21st century, the college undertook comprehensive reform process to adapt to the challenging global engineering education scenario. In pursuit of academic excellence, the college attained academic autonomy from University Grant Commission (UGC) in the year 2007. As an autonomous the college, BVB established its distinctive character in the academic space through its curriculum and outstanding student experience.<br></br>
              Over the time it gained tremendous credibility with the industries and employers and emerged as a brand to reckon with.  The Alumni of the Institute have done exceedingly well in all spheres of life at both national and international levels and brought name and fame for themselves as well as to their Alma Mater.
            </p>
        
            <a href="#" className="modal__close">&times;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
