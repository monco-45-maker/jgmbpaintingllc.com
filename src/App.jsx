export default function App() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', margin: 0, padding: 0}}>

      {/* HERO SECTION */}
      <section style={{backgroundColor: '#1f5f4a', color: 'white', padding: '80px 20px', textAlign: 'center'}}>
        <img src="/logo.png" alt="JGMB Logo" style={{width: '180px', marginBottom: '20px'}} />
        <h1 style={{fontSize: '48px', marginBottom: '10px'}}>JGMB Painting & Remodeling</h1>
        <p style={{fontSize: '22px', marginBottom: '20px'}}>Interior & Exterior Painting | Epoxy Floors | Pressure Washing</p>
        <a href="tel:4075800112" style={{backgroundColor: '#f28c38', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold'}}>Call Now</a>
      </section>

      {/* ABOUT SECTION */}
      <section style={{padding: '60px 20px', textAlign: 'center'}}>
        <h2 style={{color: '#1f5f4a', fontSize: '36px'}}>About Us</h2>
        <p style={{maxWidth: '800px', margin: '20px auto', fontSize: '18px'}}>
          My name is Javier Garcia, owner of JGMB Painting. With over 10 years of experience,
          we proudly serve Ocoee, Orlando, and surrounding areas. Our mission is simple:
          integrity and professionalism make clients happy.
        </p>
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

      {/* GALLERY SECTION */}
      <section style={{padding: '60px 20px', textAlign: 'center'}}>
        <h2 style={{color: '#1f5f4a', fontSize: '36px'}}>Recent Projects</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '40px auto'}}>
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} style={{backgroundColor: '#ddd', height: '250px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span>Add Project Photo</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{backgroundColor: '#1f5f4a', color: 'white', padding: '60px 20px', textAlign: 'center'}}>
        <h2 style={{fontSize: '36px'}}>Contact Us</h2>
        <p style={{fontSize: '18px'}}>Serving Ocoee, Orlando & Surrounding Areas</p>
        <p style={{fontSize: '18px'}}>Phone: 407-580-0112</p>
        <p style={{fontSize: '18px'}}>Email: jamb.painting@gmail.com</p>
        <a href="https://wa.me/14075800112" target="_blank" style={{backgroundColor: '#f28c38', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', display: 'inline-block', marginTop: '20px'}}>Message on WhatsApp</a>
      </section>

      {/* FOOTER */}
      <footer style={{backgroundColor: '#111', color: '#aaa', textAlign: 'center', padding: '20px'}}>
        © {new Date().getFullYear()} JGMB Painting. All Rights Reserved.
      </footer>

    </div>
  );
}
