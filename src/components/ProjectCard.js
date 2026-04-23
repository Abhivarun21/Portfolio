import React from 'react';

const ProjectCard = ({ title, description, techStack, githubLink }) => {
  return (
    <div className="glass-card" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      height: '100%' 
    }}>
      <div>
        <h3 className="neon-text" style={{ marginBottom: '10px' }}>{title}</h3>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#ccc' }}>
          {description}
        </p>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px', 
          margin: '20px 0' 
        }}>
          {techStack.map((tech, index) => (
            <span key={index} style={{ 
              fontSize: '0.75rem', 
              border: '1px solid var(--neon-purple)', 
              color: 'var(--neon-purple)',
              padding: '2px 10px', 
              borderRadius: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a 
        href={githubLink} 
        target="_blank" 
        rel="noreferrer" 
        className="github-btn"
        style={{ 
          textDecoration: 'none', 
          color: '#000', 
          background: 'var(--neon-cyan)', 
          padding: '12px', 
          textAlign: 'center', 
          borderRadius: '8px', 
          fontWeight: 'bold',
          boxShadow: '0 0 10px rgba(0, 242, 255, 0.3)',
          transition: '0.3s'
        }}
      >
        VIEW SOURCE CODE
      </a>
    </div>
  );
};

export default ProjectCard;