import React from 'react';

const Componew = ({
  // Hero Section Props
  heroTitle = "Modern Design System",
  heroSubtitle = "Create stunning websites with our beautiful components. Fast, responsive, and accessible by default.",
  heroPrimaryButton = "Get Started",
  heroSecondaryButton = "Learn More",
  
  // Features Section Props
  featuresTitle = "Why Choose Us?",
  featuresSubtitle = "We provide the best tools and features to help you build amazing products.",
  features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Optimized performance ensures your website loads in milliseconds, keeping users engaged."
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Carefully crafted components that look stunning out of the box with minimal customization."
    },
    {
      icon: "🔧",
      title: "Easy to Customize",
      description: "Flexible architecture allows you to modify any aspect to match your brand perfectly."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Every component adapts seamlessly to any screen size, from mobile to desktop."
    },
    {
      icon: "♿",
      title: "Accessible",
      description: "Built with accessibility in mind, ensuring everyone can use your website effectively."
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Security best practices baked in to protect your users and their data."
    }
  ],
  
  // Stats Section Props
  stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "50M+", label: "Downloads" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ],
  
  // Testimonials Section Props
  testimonialsTitle = "What Our Customers Say",
  testimonialsSubtitle = "Don't just take our word for it - hear from some of our satisfied customers.",
  testimonials = [
    {
      text: "This design system has completely transformed how we build products. The components are intuitive and the documentation is excellent.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      avatar: "SJ"
    },
    {
      text: "I've tried many UI libraries, but this one stands out for its attention to detail and performance. Highly recommended!",
      author: "Michael Chen",
      role: "Senior Developer at StartupXYZ",
      avatar: "MC"
    },
    {
      text: "The accessibility features are top-notch. It's refreshing to see a design system that takes inclusivity seriously.",
      author: "Emily Rodriguez",
      role: "UX Designer at DesignHub",
      avatar: "ER"
    }
  ],
  
  // Pricing Section Props
  pricingTitle = "Simple, Transparent Pricing",
  pricingSubtitle = "Choose the plan that's right for you. All plans include a 30-day money-back guarantee.",
  pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: ["5 Projects", "Basic Components", "Email Support", "1GB Storage"],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Best for growing teams and businesses",
      features: ["Unlimited Projects", "All Components", "Priority Support", "10GB Storage", "Custom Themes", "Analytics Dashboard"],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: ["Everything in Pro", "Dedicated Support", "Unlimited Storage", "Custom Development", "SLA Guarantee", "On-premise Option"],
      buttonText: "Contact Sales",
      popular: false
    }
  ],
  
  // CTA Section Props
  ctaTitle = "Ready to Get Started?",
  ctaSubtitle = "Join thousands of developers and designers who are already building amazing products with our design system.",
  ctaButtonText = "Start Building Today",
  ctaSecondaryText = "No credit card required",
  
  // Footer Props
  footerBrand = "DesignSystem",
  footerDescription = "Building the future of web design, one component at a time.",
  footerLinks = {
    product: ["Features", "Pricing", "Documentation", "Changelog"],
    company: ["About", "Blog", "Careers", "Press"],
    resources: ["Community", "Help Center", "Partners", "Status"],
    legal: ["Privacy", "Terms", "Cookie Policy", "Licenses"]
  },
  footerCopyright = "© 2024 DesignSystem. All rights reserved.",
  
  // Navigation Props
  navBrand = "DesignSystem",
  navLinks = ["Features", "Pricing", "About", "Contact"],
  navButtonText = "Sign Up",
  
  // Event Handlers
  onPrimaryButtonClick = () => {},
  onSecondaryButtonClick = () => {},
  onNavButtonClick = () => {},
  onCtaButtonClick = () => {},
  onPricingButtonClick = () => {}
}) => {
  
  const styles = {
    // Reset and base styles
    container: {
      margin: 0,
      padding: 0,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: 1.6,
      color: '#1a1a2e',
      overflowX: 'hidden'
    },
    
    // Navigation
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '1rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
    },
    navBrand: {
      fontSize: '1.5rem',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#4a4a6a',
      fontWeight: 500,
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    navButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.6rem 1.5rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontWeight: 600,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },
    
    // Hero Section
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      padding: '6rem 5% 4rem',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      textAlign: 'center',
      zIndex: 2,
      maxWidth: '800px'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: 800,
      color: 'white',
      marginBottom: '1.5rem',
      lineHeight: 1.1,
      textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '2.5rem',
      maxWidth: '600px',
      margin: '0 auto 2.5rem'
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    btnPrimary: {
      background: 'white',
      color: '#667eea',
      padding: '1rem 2.5rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      border: 'none',
      cursor: 'pointer'
    },
    btnSecondary: {
      background: 'transparent',
      color: 'white',
      padding: '1rem 2.5rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '1.1rem',
      border: '2px solid white',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    heroBlob1: {
      position: 'absolute',
      width: '600px',
      height: '600px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      top: '-200px',
      right: '-200px',
      animation: 'float 8s ease-in-out infinite'
    },
    heroBlob2: {
      position: 'absolute',
      width: '400px',
      height: '400px',
      background: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '50%',
      bottom: '-100px',
      left: '-100px',
      animation: 'float 6s ease-in-out infinite reverse'
    },
    
    // Features Section
    features: {
      padding: '6rem 5%',
      background: '#f8f9ff'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 700,
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '1.1rem',
      maxWidth: '600px',
      margin: '0 auto 4rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    featureCard: {
      background: 'white',
      padding: '2.5rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(102, 126, 234, 0.1)'
    },
    featureIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      marginBottom: '1.5rem'
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.75rem',
      color: '#1a1a2e'
    },
    featureDescription: {
      color: '#6b7280',
      lineHeight: 1.7
    },
    
    // Stats Section
    stats: {
      padding: '4rem 5%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center'
    },
    statItem: {
      color: 'white'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 800,
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '1.1rem',
      opacity: 0.9
    },
    
    // Testimonials Section
    testimonials: {
      padding: '6rem 5%',
      background: 'white'
    },
    testimonialsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    testimonialCard: {
      background: 'linear-gradient(135deg, #f8f9ff 0%, #fff 100%)',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(102, 126, 234, 0.1)'
    },
    testimonialText: {
      fontSize: '1.1rem',
      color: '#4a4a6a',
      marginBottom: '1.5rem',
      lineHeight: 1.8,
      fontStyle: 'italic'
    },
    testimonialAuthor: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    authorAvatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 600
    },
    authorName: {
      fontWeight: 600,
      color: '#1a1a2e',
      marginBottom: '0.25rem'
    },
    authorRole: {
      fontSize: '0.9rem',
      color: '#6b7280'
    },
    
    // Pricing Section
    pricing: {
      padding: '6rem 5%',
      background: '#f8f9ff'
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    pricingCard: {
      background: 'white',
      padding: '2.5rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      position: 'relative'
    },
    pricingCardPopular: {
      background: 'white',
      padding: '2.5rem',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '2px solid #667eea',
      transform: 'scale(1.05)',
      position: 'relative'
    },
    popularBadge: {
      position: 'absolute',
      top: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 600
    },
    pricingName: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#1a1a2e'
    },
    pricingPrice: {
      fontSize: '3.5rem',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    pricingPeriod: {
      color: '#6b7280'
    },
    pricingDescription: {
      color: '#6b7280',
      marginBottom: '2rem'
    },
    pricingFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 2rem',
      textAlign: 'left'
    },
    pricingFeature: {
      padding: '0.75rem 0',
      color: '#4a4a6a',
      borderBottom: '1px solid #f0f0f5',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    checkmark: {
      color: '#667eea'
    },
    pricingButton: {
      display: 'block',
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '10px',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    
    // CTA Section
    cta: {
      padding: '6rem 5%',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 700,
      color: 'white',
      marginBottom: '1rem'
    },
    ctaSubtitle: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '1.1rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '1.25rem 3rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '1.1rem',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
      border: 'none',
      cursor: 'pointer'
    },
    ctaNote: {
      marginTop: '1rem',
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '0.9rem'
    },
    
    // Footer
    footer: {
      background: '#1a1a2e',
      color: 'white',
      padding: '4rem 5% 2rem'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '3rem',
      maxWidth: '1200px',
      margin: '0 auto 3rem'
    },
    footerBrand: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    footerDescription: {
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: 1.7
    },
    footerTitle: {
      fontWeight: 600,
      marginBottom: '1.5rem',
      fontSize: '1.1rem'
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      display: 'block',
      padding: '0.5rem 0',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    footerBottom: {
      textAlign: 'center',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.5)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Keyframe animations - inject into head */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @media (max-width: 768px) {
            .nav-links { display: none !important; }
          }
        `}
      </style>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navBrand}>{navBrand}</div>
        <ul style={styles.navLinks} className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <span style={styles.navLink}>{link}</span>
            </li>
          ))}
        </ul>
        <button style={styles.navButton} onClick={onNavButtonClick}>
          {navButtonText}
        </button>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBlob1}></div>
        <div style={styles.heroBlob2}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{heroTitle}</h1>
          <p style={styles.heroSubtitle}>{heroSubtitle}</p>
          <div style={styles.heroButtons}>
            <button style={styles.btnPrimary} onClick={onPrimaryButtonClick}>
              {heroPrimaryButton}
            </button>
            <button style={styles.btnSecondary} onClick={onSecondaryButtonClick}>
              {heroSecondaryButton}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>{featuresTitle}</h2>
        <p style={styles.sectionSubtitle}>{featuresSubtitle}</p>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div style={styles.featureCard} key={index}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.stats}>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div style={styles.statItem} key={index}>
              <div style={styles.statNumber}>{stat.value}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <h2 style={styles.sectionTitle}>{testimonialsTitle}</h2>
        <p style={styles.sectionSubtitle}>{testimonialsSubtitle}</p>
        <div style={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div style={styles.testimonialCard} key={index}>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>{testimonial.avatar}</div>
                <div>
                  <div style={styles.authorName}>{testimonial.author}</div>
                  <div style={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={styles.pricing}>
        <h2 style={styles.sectionTitle}>{pricingTitle}</h2>
        <p style={styles.sectionSubtitle}>{pricingSubtitle}</p>
        <div style={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <div 
              style={plan.popular ? styles.pricingCardPopular : styles.pricingCard} 
              key={index}
            >
              {plan.popular && <span style={styles.popularBadge}>Most Popular</span>}
              <h3 style={styles.pricingName}>{plan.name}</h3>
              <div>
                <span style={styles.pricingPrice}>{plan.price}</span>
                <span style={styles.pricingPeriod}>{plan.period}</span>
              </div>
              <p style={styles.pricingDescription}>{plan.description}</p>
              <ul style={styles.pricingFeatures}>
                {plan.features.map((feature, fIndex) => (
                  <li style={styles.pricingFeature} key={fIndex}>
                    <span style={styles.checkmark}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button 
                style={styles.pricingButton} 
                onClick={() => onPricingButtonClick(plan)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>{ctaTitle}</h2>
        <p style={styles.ctaSubtitle}>{ctaSubtitle}</p>
        <button style={styles.ctaButton} onClick={onCtaButtonClick}>
          {ctaButtonText}
        </button>
        <p style={styles.ctaNote}>{ctaSecondaryText}</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <div style={styles.footerBrand}>{footerBrand}</div>
            <p style={styles.footerDescription}>{footerDescription}</p>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Product</h4>
            <ul style={styles.footerLinks}>
              {footerLinks.product.map((link, index) => (
                <li key={index}><span style={styles.footerLink}>{link}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Company</h4>
            <ul style={styles.footerLinks}>
              {footerLinks.company.map((link, index) => (
                <li key={index}><span style={styles.footerLink}>{link}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Resources</h4>
            <ul style={styles.footerLinks}>
              {footerLinks.resources.map((link, index) => (
                <li key={index}><span style={styles.footerLink}>{link}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Legal</h4>
            <ul style={styles.footerLinks}>
              {footerLinks.legal.map((link, index) => (
                <li key={index}><span style={styles.footerLink}>{link}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>{footerCopyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default Componew;