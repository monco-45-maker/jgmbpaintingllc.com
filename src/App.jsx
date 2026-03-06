import logo from "./Logo.png";
import project1 from "./project1.jpeg"
import project2 from "./project2.jpeg"
import project3 from "./project3.jpeg"
import project4 from "./project4.jpeg"

export default function App() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', margin: 0, padding: 0}}>
      <section style={{backgroundColor: '#1f5f4a', color: 'white', padding: '80px 20px', textAlign: 'center'}}>
       <img src={logo} style={{width: '180px', marginBottom: '20px'}} alt="JGMB Logo" />
        <h1 style={{fontSize: '48px', marginBottom: '10px'}}>JG&MB Painting & Remodeling</h1>
        <a 
  href="tel:4075800112"
  style={{
    display: "inline-block",
    marginTop: "20px",
    backgroundColor: "#22c55e",
    color: "white",
    padding: "15px 30px",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "8px",
    textDecoration: "none"
  }}
>
  📞 FREE ESTIMATE – CALL NOW
</a>        <p style={{fontSize: '22px', marginBottom: '20px'}}>Interior & Exterior Painting | Epoxy Floors | Pressure Washing</p>
        <a href="tel:4075800112" style={{backgroundColor: '#f28c38', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold'}}>Call Now</a>
      </section>

      {/* ABOUT SECTION */}
      <section style={{padding: '60px 20px', textAlign: 'center'}}>
        <h2 style={{color: '#1f5f4a', fontSize: '36px'}}>About Us</h2>
        <p style={{maxWidth: '800px', margin: '20px auto', fontSize: '18px'}}>
          JG & MB Painting & Remodeling, we are a locally owned and operated company that values honesty and integrity and treats your home as if it were our own.
          We offer a variety of quality home improvement services. You will find us to be competitively priced with close attention to the details of each and every project that we are involved with. 
          We look forward to building lasting relationships and guarantee your satisfaction!        </p>
      </section>

      {/* SERVICES SECTION */}
      <section style={{backgroundColor: '#f4f4f4', padding: '60px 20px'}}>
        <h2 style={{textAlign: 'center', color: '#1f5f4a', fontSize: '36px'}}>Our Services</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '40px auto'}}>
          {[
            'Interior Painting',
            'Exterior Painting',
            'Commercial Painting',
            'Residential Painting',
            'Epoxy Floors',
            'Pressure Washing'
          ].map((service, index) => (
            <div key={index} style={{backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#f28c38'}}>{service}</h3>
              <p>High-quality workmanship using premium materials for long-lasting results.</p>
            </div>
          ))}
        </div>
      </section>

     <h2 style={{textAlign:"center", fontSize:"36px", marginTop:"40px"}}>
Recent Projects
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",
gap:"20px",
maxWidth:"1000px",
margin:"40px auto"
}}>

<img src={project1} style={{width:"100%", borderRadius:"10px"}} />

<img src={project2} style={{width:"100%", borderRadius:"10px"}} />

<img src={project3} style={{width:"100%", borderRadius:"10px"}} />

<img src={project4} style={{width:"100%", borderRadius:"10px"}} />

</div>
      
      {/* CONTACT SECTION */}
      <section style={{backgroundColor: '#1f5f4a', color: 'white', padding: '60px 20px', textAlign: 'center'}}>
        <h2 style={{fontSize: '36px'}}>Contact Us</h2>
        <p style={{fontSize: '18px'}}>Serving:  Windermere, Orlando, Winter garden, Winter park, & Surrounding Areas</p>
        <p style={{fontSize: '18px'}}>Phone: 407-580-0112</p>
        <p style={{fontSize: '18px'}}>Email: jgmb.painting@gmail.com</p>
        <a href="https://wa.me/14075800112" target="_blank" style={{backgroundColor: '#f28c38', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', display: 'inline-block', marginTop: '20px'}}>Message on WhatsApp</a>
      </section>

      {/* FOOTER */}
      <footer style={{backgroundColor: '#111', color: '#aaa', textAlign: 'center', padding: '20px'}}>
        © {new Date().getFullYear()} JGMB Painting. All Rights Reserved.
      </footer>

    </div>
  );
}
