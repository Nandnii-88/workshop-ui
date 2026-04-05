import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  const workshops = [
    { 
      id: 1, 
      title: 'Coding Workshops', 
      icon: '💻', 
      desc: 'Master React, Node, and Python.',
      details: 'Is 4-week intensive coding bootcamp mein hum zero se hero tak ka safar tai karenge. Hum MERN Stack par focus karenge aur end mein ek real-world app banayenge jo aapke portfolio ke liye best hogi.',
      curriculum: ['React Hooks & Context API', 'NodeJS & Express Backend', 'Database with MongoDB', 'Deploying to Vercel/Render'],
      duration: '30 Days (Mon-Fri)',
      mentor: 'Rahul Sharma (Senior Dev)',
      price: '₹2,999',
      rating: '⭐ 4.9/5'
    },
    { 
      id: 2, 
      title: 'Design Workshops', 
      icon: '🎨', 
      desc: 'UI/UX secrets and Figma tricks.',
      details: 'Design sirf sundar dikhna nahi hota. Is workshop mein hum Figma pro tools, Auto-layout, aur Design Systems ke baare mein seekhenge jo badi companies use karti hain.',
      curriculum: ['Figma Pro Components', 'Color Theory & Typography', 'Wireframing & Prototyping', 'UX Research Methods'],
      duration: '15 Days (Weekend Only)',
      mentor: 'Priya Verma (Product Designer)',
      price: '₹1,499',
      rating: '⭐ 4.8/5'
    },
    { 
      id: 3, 
      title: 'AI Workshops', 
      icon: '🤖', 
      desc: 'Build the future with LLMs & ML.',
      details: 'Artificial Intelligence ki duniya mein kadam rakhein. Hum OpenAI APIs ka use karke chatbot banana seekhenge aur Machine Learning ke models ko train karna seekhenge.',
      curriculum: ['Prompt Engineering 101', 'Integrating ChatGPT API', 'Basic Machine Learning Models', 'AI Image Generation Tools'],
      duration: '21 Days (Daily)',
      mentor: 'Dr. Amit AI (Data Scientist)',
      price: '₹4,999',
      rating: '⭐ 5.0/5'
    }
  ];

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo" onClick={() => setActiveTab('home')}>WORKSHOP<span>.UI</span></div>
        <div className="nav-links">
          <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</button>
          <button className={activeTab === 'explore' ? 'active' : ''} onClick={() => setActiveTab('explore')}>Workshops</button>
          <button className="btn-login">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <header className="hero-section">
          <h1>Level Up Your <span className="gradient-text">Skills</span> 🚀</h1>
          <p>Join the most interactive workshops of 2026. Learn from industry leaders and build real-world projects.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setActiveTab('explore')}>Explore Now</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </header>
      )}

      {/* Workshop Grid */}
      {activeTab === 'explore' && (
        <section className="workshop-grid-container">
          <h2 className="section-title">Pick Your Track</h2>
          <div className="cards-grid">
            {workshops.map((w) => (
              <div key={w.id} className="glass-card">
                <div className="card-badge">{w.rating}</div>
                <div className="card-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <button className="btn-details" onClick={() => setSelectedWorkshop(w)}>View Details</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Detail Modal */}
      {selectedWorkshop && (
        <div className="modal-overlay" onClick={() => setSelectedWorkshop(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedWorkshop(null)}>&times;</button>
            <div className="modal-header">
              <span className="modal-big-icon">{selectedWorkshop.icon}</span>
              <h2>{selectedWorkshop.title}</h2>
            </div>
            <div className="modal-body">
              <p className="main-desc">{selectedWorkshop.details}</p>
              <div className="curriculum-box">
                <h4>What's Included:</h4>
                <ul>
                  {selectedWorkshop.curriculum.map((item, i) => <li key={i}>✨ {item}</li>)}
                </ul>
              </div>
              <div className="price-info-grid">
                <div className="info-box"><strong>Mentor</strong><br/>{selectedWorkshop.mentor}</div>
                <div className="info-box"><strong>Duration</strong><br/>{selectedWorkshop.duration}</div>
                <div className="info-box price-highlight"><strong>Price</strong><br/>{selectedWorkshop.price}</div>
              </div>
              <button className="btn-primary full-width" onClick={() => alert("Redirecting to Enrollment...")}>Enroll Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;