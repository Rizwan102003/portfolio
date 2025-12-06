import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email',
      value: 'skmdrizwan2003@gmail.com',
      link: 'mailto:skmdrizwan2003@gmail.com',
      description: 'Best for detailed discussions'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'Professional Network',
      link: 'https://www.linkedin.com/in/skmdrizwan/',
      description: 'Connect professionally'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'Source Code & Projects',
      link: 'https://github.com/Rizwan102003',
      description: 'View my technical work'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: 'Schedule Call',
      value: 'Video Meeting',
      link: 'https://calendly.com/skmdrizwan',
      description: 'Book a 30-min discussion'
    }
  ];

  return (
    <div>
      <main id="main-content">
        {/* Header */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-xl">
              <h1 className="mb-md">Get In Touch</h1>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                I'm actively seeking full-time opportunities in backend development, data science, 
                and cloud engineering. Let's discuss how we can work together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: 0 }}>
          <div className="container">
            <div className="text-center mb-xl">
              <h2 className="mb-md">How to Reach Me</h2>
              <p className="text-muted">
                Choose the method that works best for you
              </p>
            </div>
            
            <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="flex items-center gap-md mb-md">
                    <div style={{ 
                      padding: 'var(--space-sm)', 
                      backgroundColor: 'var(--color-surface)', 
                      borderRadius: 'var(--border-radius)', 
                      color: 'var(--color-primary)',
                      border: '1px solid var(--color-border)'
                    }}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="mb-xs">{method.title}</h3>
                      <p className="text-muted text-small">{method.value}</p>
                    </div>
                  </div>
                  <p className="text-muted text-small">{method.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div>
                <h2 className="mb-xl">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="card">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell me about the opportunity, project, or just say hello!"
                      rows="5"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div style={{ 
                          width: '16px', 
                          height: '16px', 
                          border: '2px solid currentColor', 
                          borderTop: '2px solid transparent', 
                          borderRadius: '50%', 
                          animation: 'spin 1s linear infinite' 
                        }}></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div style={{ 
                      marginTop: 'var(--space-md)', 
                      padding: 'var(--space-md)', 
                      backgroundColor: 'rgba(11, 163, 138, 0.1)', 
                      border: '1px solid rgba(11, 163, 138, 0.2)', 
                      borderRadius: 'var(--border-radius)', 
                      color: 'var(--color-secondary)',
                      textAlign: 'center'
                    }}>
                      <p className="font-medium mb-xs">Message sent successfully! 🎉</p>
                      <p className="text-small">I'll get back to you within 24 hours.</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="mb-xl">Let's Connect</h2>
                
                <div className="contact-info">
                  <div className="mb-xl">
                    <h3 className="mb-md">Current Status</h3>
                    <div className="flex items-center gap-sm mb-sm">
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        backgroundColor: 'var(--color-secondary)', 
                        borderRadius: '50%' 
                      }}></div>
                      <span className="font-medium">Actively Job Seeking</span>
                    </div>
                    <p className="text-muted text-small mb-md">
                      Available for full-time positions starting immediately
                    </p>
                    
                    <div className="grid gap-sm">
                      <div className="text-small">
                        <strong>Interests:</strong> Backend Development, Data Science, Cloud Engineering
                      </div>
                      <div className="text-small">
                        <strong>Location:</strong> Kolkata, India (Open to relocation)
                      </div>
                      <div className="text-small">
                        <strong>Work Type:</strong> Full-time, Remote, Hybrid
                      </div>
                    </div>
                  </div>

                  <div className="mb-xl">
                    <h3 className="mb-md">Response Time</h3>
                    <div className="grid gap-sm text-small">
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="text-muted">Within 6 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>LinkedIn:</span>
                        <span className="text-muted">Within 12 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Scheduled calls:</span>
                        <span className="text-muted">Same day</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-md">Quick Actions</h3>
                    <div className="grid gap-sm">
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ width: '100%' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7,10 12,15 17,10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Download Resume
                      </a>
                      <a
                        href="https://calendly.com/skmdrizwan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                        style={{ width: '100%' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        Schedule Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container">
            <div className="text-center mb-xl">
              <h2 className="mb-md">Frequently Asked Questions</h2>
              <p className="text-muted">
                Quick answers to common questions
              </p>
            </div>
            
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="grid gap-lg">
                <div className="card">
                  <h3 className="mb-sm">What type of roles are you seeking?</h3>
                  <p className="text-muted">
                    I'm looking for full-time positions in backend development, data engineering, 
                    or cloud engineering roles. I'm particularly interested in companies working 
                    on large-scale distributed systems and data-driven products.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="mb-sm">Are you open to relocation?</h3>
                  <p className="text-muted">
                    Yes, I'm open to relocating for the right opportunity. I'm currently based 
                    in Kolkata, India, but willing to move anywhere for a great role.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="mb-sm">What's your expected timeline?</h3>
                  <p className="text-muted">
                    I'm graduating in May 2025 and available to start immediately after graduation. 
                    I'm currently available for interviews and can begin the process right away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;