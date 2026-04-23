import React from 'react';
import profileImg from '../assests/profile.png';

const Home = () => {
  const skills = {
    Programming: ["Java", "JavaScript"],
    Frontend: ["HTML", "CSS", "React.js"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB", "MySQL", "Postgre"]
  };

  return (
    <div className="home-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section className="hero glass-card" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          border: '3px solid var(--neon-cyan)', 
          margin: '0 auto 1rem', 
          overflow: 'hidden', 
          boxShadow: '0 0 15px var(--neon-cyan)' 
        }}>
        <img 
    src={profileImg}  // Use the imported variable here
    alt="Abhi Varun" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />        </div>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>Abhi Varun</h1>
        <h3 className="neon-text typing-animation">Full Stack Developer | SDE Aspirant</h3>
        <p>Building Scalable Web Applications & Modern User Experiences</p>
      </section>

      {/* Info Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <section className="glass-card">
          <h2 className="neon-text">About Me</h2>
          <p>Passionate web developer focused on building scalable, user-friendly applications. Interested in full-stack development and modern web technologies.</p>
          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '20px 0' }} />
          <p><strong>Name:</strong> Abhi Varun</p>
          <p><strong>Phone:</strong> 7207435223</p>
          <p><strong>Personal:</strong> chikotiabhivarun05@gmail.com</p>
          <p><strong>College:</strong> se23uari026@mahindrauniversity.edu.in</p>
        </section>

        <section className="glass-card">
          <h2 className="neon-text">Research Interests</h2>
          <ul style={{ lineHeight: '2' }}>
            <li>Web Development</li>
            <li>Data structures and Algorithms</li>
            <li>Scalable Backend Architectures</li>
            <li>Modern Frontend Frameworks</li>
          </ul>
        </section>
      </div>

      {/* Skills Section */}
      <section className="glass-card" style={{ marginTop: '2rem' }}>
        <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '30px' }}>Technical Arsenal</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' }}>
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h4 style={{ color: 'var(--neon-purple)', borderBottom: '1px solid rgba(188, 19, 254, 0.3)', paddingBottom: '5px' }}>
                {category}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                {list.map((skill) => (
                  <span key={skill} style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '5px 12px', 
                    borderRadius: '4px', 
                    fontSize: '0.85rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;