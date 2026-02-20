import React from 'react';
import { createRoot } from 'react-dom/client';
import { Camera, Smartphone, Server, CheckCircle2, ChevronRight, HardHat, FileText, Settings, ShieldCheck, ArrowRight, Phone, Mail, Lock, Eye, Activity, Info } from 'lucide-react';

// --- ASSETS & CONSTANTS ---
const ASSETS = {
  LOGO: "https://res.cloudinary.com/ducnj44ni/image/upload/v1771550160/PHOTO-2025-07-03-12-51-17_pjlnzz.jpg",
  PHOTO_HOODIE: "https://res.cloudinary.com/ducnj44ni/image/upload/v1771550180/WhatsApp_Image_2026-02-19_at_19.05.30_uvp58r.jpg", // Photo 1
  PHOTO_SIDE: "https://res.cloudinary.com/ducnj44ni/image/upload/v1771550173/WhatsApp_Image_2026-02-19_at_19.05.38_cesvyu.jpg", // Photo 2
  PHOTO_CAR: "https://res.cloudinary.com/ducnj44ni/image/upload/v1771550168/WhatsApp_Image_2026-01-13_at_09.59.12_apnaos.jpg", // Photo 3
};

const THEME = {
  colors: {
    bg: '#F8FAFC',
    text: '#111827',
    textMuted: '#64748B', // Slate 500
    accent: '#F97316', // Orange
    line: '#CBD5E1', // Slate 300
    white: '#FFFFFF',
  },
  spacing: {
    margin: '60px', // Approx 0.6"
  },
  fonts: {
    title: 'Montserrat, sans-serif',
    body: 'Inter, sans-serif',
  }
};

// --- SHARED COMPONENTS ---

// Footer: Text ONLY, Bottom Left, No Logo
const SlideFooter = ({ dark = false }) => (
  <div style={{
    position: 'absolute',
    bottom: '30px', // Approx 0.45"
    left: THEME.spacing.margin,
    color: dark ? 'rgba(255,255,255,0.5)' : THEME.colors.textMuted,
    fontFamily: THEME.fonts.body,
    fontSize: '11pt',
    fontWeight: 500,
    letterSpacing: '0.5px'
  }}>
    Alto Locksmith & Security • Estimate #27
  </div>
);

// Slide Number
const SlideNumber = ({ num, dark = false }) => (
  <div style={{
    position: 'absolute',
    bottom: '30px',
    right: THEME.spacing.margin,
    color: dark ? 'rgba(255,255,255,0.5)' : THEME.colors.textMuted,
    fontFamily: THEME.fonts.body,
    fontSize: '11pt',
    fontWeight: 600
  }}>
    {num}
  </div>
);

// Main Slide Canvas (16:9)
const SlideCanvas = ({ children, dark = false }) => (
  <div style={{
    width: '100%',
    maxWidth: '1280px', // Scaled for 16:9
    aspectRatio: '16/9',
    backgroundColor: dark ? '#111827' : THEME.colors.bg,
    color: dark ? THEME.colors.white : THEME.colors.text,
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 1px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '40px',
  }}>
    {children}
    <SlideFooter dark={dark} />
  </div>
);

// Typography
const SlideTitle = ({ children, color }: { children: React.ReactNode; color?: string }) => (
  <h2 style={{
    fontFamily: THEME.fonts.title,
    fontWeight: 700,
    fontSize: '48px', // ~48pt
    color: color || THEME.colors.text,
    margin: `50px ${THEME.spacing.margin} 30px ${THEME.spacing.margin}`, // 0.5" top margin
    lineHeight: 1.1,
    letterSpacing: '-1px'
  }}>
    {children}
  </h2>
);

const SlideSubTitle = ({ children }) => (
  <h3 style={{
    fontFamily: THEME.fonts.title,
    fontWeight: 600,
    fontSize: '24px',
    color: THEME.colors.accent,
    margin: '0 0 15px 0',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }}>
    {children}
  </h3>
);

const Body = ({ children, bold = false, style = {} }) => (
  <p style={{
    fontFamily: THEME.fonts.body,
    fontSize: '22px', // ~20-22pt
    lineHeight: 1.5,
    color: THEME.colors.text,
    fontWeight: bold ? 600 : 400,
    margin: '0 0 12px 0',
    maxWidth: '95%',
    ...style
  }}>
    {children}
  </p>
);

const Bullet = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '25px' }}>
    <div style={{ minWidth: '10px', height: '10px', borderRadius: '50%', backgroundColor: THEME.colors.accent, marginTop: '12px' }} />
    <p style={{
      fontFamily: THEME.fonts.body,
      fontSize: '22px', // ~20-22pt
      lineHeight: 1.5,
      color: THEME.colors.text,
      margin: 0
    }}>
      {children}
    </p>
  </div>
);

const Divider = () => (
  <div style={{ width: '80px', height: '4px', backgroundColor: THEME.colors.accent, marginBottom: '30px', marginLeft: THEME.spacing.margin }} />
);

// --- SLIDE DEFINITIONS ---

// Slide 1: Cover
const Slide1 = () => (
  <SlideCanvas dark>
    <img 
      src={ASSETS.PHOTO_HOODIE} 
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
    />
    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)' }} />
    
    <div style={{ position: 'absolute', top: '50px', left: '60px', width: '140px' }}>
      <img src={ASSETS.LOGO} style={{ width: '100%', display: 'block' }} alt="Alto Logo" />
    </div>

    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '60px' }}>
      <div style={{ width: '100px', height: '6px', backgroundColor: THEME.colors.accent, marginBottom: '40px' }} />
      <h1 style={{ 
        fontFamily: THEME.fonts.title, 
        fontSize: '64px', 
        fontWeight: 800, 
        color: 'white', 
        lineHeight: 1.1, 
        marginBottom: '20px',
        maxWidth: '800px'
      }}>
        CCTV SECURITY<br/>SYSTEM PROPOSAL
      </h1>
      <p style={{ fontFamily: THEME.fonts.body, fontSize: '24px', color: '#E2E8F0', fontWeight: 500 }}>
        Prepared for: Winn Residential Management
      </p>
      <p style={{ fontFamily: THEME.fonts.body, fontSize: '18px', color: '#94A3B8', marginTop: '10px' }}>
        February 19, 2026
      </p>
    </div>
    <SlideNumber num="1" dark />
  </SlideCanvas>
);

// Slide 2: Executive Summary
const Slide2 = () => (
  <SlideCanvas>
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ width: '40%', height: '100%', position: 'relative' }}>
        <img src={ASSETS.PHOTO_CAR} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ width: '60%', padding: '0 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <SlideTitle>EXECUTIVE SUMMARY</SlideTitle>
        <div style={{ paddingLeft: '60px' }}>
           <Bullet><strong>Enhanced Visibility:</strong> Comprehensive monitoring of property assets and common areas.</Bullet>
           <Bullet><strong>High-Resolution Evidence:</strong> 8MP clarity for incident review and liability protection.</Bullet>
           <Bullet><strong>Remote Accessibility:</strong> Secure mobile viewing for management from anywhere.</Bullet>
           <Bullet><strong>Deterrence:</strong> Visible cameras discourage vandalism and unauthorized entry.</Bullet>
           <Bullet><strong>Turnkey Delivery:</strong> Full supply, installation, and configuration included.</Bullet>
        </div>
      </div>
    </div>
    <SlideNumber num="2" />
  </SlideCanvas>
);

// Slide 3: System Overview
const Slide3 = () => (
  <SlideCanvas>
    <SlideTitle>SYSTEM OVERVIEW</SlideTitle>
    <div style={{ padding: '0 60px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '60px', marginTop: '40px' }}>
        <div>
           <Server size={48} color={THEME.colors.accent} strokeWidth={1.5} style={{ marginBottom: '20px' }} />
           <h3 style={{ fontFamily: THEME.fonts.title, fontWeight: 700, fontSize: '20px', marginBottom: '15px' }}>CORE HUB</h3>
           <Body>32-Channel Commercial DVR</Body>
           <Body>High-capacity storage (4TB) ensuring 30+ days retention.</Body>
        </div>
        <div>
           <Camera size={48} color={THEME.colors.accent} strokeWidth={1.5} style={{ marginBottom: '20px' }} />
           <h3 style={{ fontFamily: THEME.fonts.title, fontWeight: 700, fontSize: '20px', marginBottom: '15px' }}>VISUALS</h3>
           <Body>25 High-Definition 8MP Analog Cameras.</Body>
           <Body>Crystal clear color imaging in low-light conditions.</Body>
        </div>
        <div>
           <Smartphone size={48} color={THEME.colors.accent} strokeWidth={1.5} style={{ marginBottom: '20px' }} />
           <h3 style={{ fontFamily: THEME.fonts.title, fontWeight: 700, fontSize: '20px', marginBottom: '15px' }}>CONNECTIVITY</h3>
           <Body>Remote viewing configured for approved devices.</Body>
           <Body>Complete hardware supply, wiring, and programming.</Body>
        </div>
      </div>
    </div>
    <SlideNumber num="3" />
  </SlideCanvas>
);

// Slide 4: Scope of Work - Updated
const Slide4 = () => (
  <SlideCanvas>
    <SlideTitle>SCOPE OF WORK</SlideTitle>
    <div style={{ padding: `0 ${THEME.spacing.margin}` }}>
      <div style={{ marginTop: '20px' }}>
        <Bullet><strong>Item 1:</strong> Supply & Install 32-Channel CCTV DVR System.</Bullet>
        <Bullet><strong>Item 2:</strong> Supply & Install 25 High-Resolution Cameras.</Bullet>
        <Bullet><strong>Item 3:</strong> System Programming & Network Configuration.</Bullet>
        <Bullet><strong>Objective:</strong> Deliver a fully functional, tested security ecosystem.</Bullet>
        <Bullet><strong>Note:</strong> Turnkey installation requiring no prior equipment.</Bullet>
      </div>
    </div>
    <SlideNumber num="4" />
  </SlideCanvas>
);

// Slide 5: What's Included - Updated
const Slide5 = () => (
  <SlideCanvas>
    <SlideTitle>WHAT'S INCLUDED</SlideTitle>
    <div style={{ padding: `0 ${THEME.spacing.margin}` }}>
      <Body style={{ marginBottom: '40px' }}>Line item breakdown of the proposed solution.</Body>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0px' }}>
         <Bullet>Commercial-grade 32-Channel DVR with 4TB storage.</Bullet>
         <Bullet>25 High-Definition 8MP cameras (Day/Night operation).</Bullet>
         <Bullet>Complete cabling, wiring, and hardware mounting.</Bullet>
         <Bullet>Motion detection and recording schedule configuration.</Bullet>
         <Bullet>Full system testing and mobile app setup.</Bullet>
      </div>
    </div>
    <SlideNumber num="5" />
  </SlideCanvas>
);

// Slide 6: Camera Coverage Plan - Updated
const Slide6 = () => (
  <SlideCanvas>
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Left Panel: Photo 2 */}
      <div style={{ width: '40%', height: '100%', position: 'relative' }}>
         <img src={ASSETS.PHOTO_SIDE} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      {/* Right Panel: Text */}
      <div style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
        <SlideTitle>CAMERA COVERAGE PLAN</SlideTitle>
        <div style={{ padding: `0 ${THEME.spacing.margin}` }}>
          <Bullet><strong>Entry Points:</strong> Monitoring of main entrances and exits.</Bullet>
          <Bullet><strong>Common Areas:</strong> Coverage of lobbies, hallways, and gathering spots.</Bullet>
          <Bullet><strong>Perimeter:</strong> Exterior views to monitor building approach.</Bullet>
          <Bullet><strong>Service Areas:</strong> Coverage of maintenance or delivery access points.</Bullet>
          <p style={{ marginTop: '40px', fontFamily: THEME.fonts.body, fontSize: '18px', fontStyle: 'italic', color: THEME.colors.textMuted }}>
             * Final locations confirmed during site walkthrough.
          </p>
        </div>
      </div>
    </div>
    <SlideNumber num="6" />
  </SlideCanvas>
);

// Slide 7: Installation
const Slide7 = () => (
  <SlideCanvas>
    <div style={{ height: '25%', width: '100%', overflow: 'hidden' }}>
      <img src={ASSETS.PHOTO_SIDE} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
    </div>
    
    <div style={{ padding: '0 60px', height: '75%', display: 'flex', flexDirection: 'column' }}>
      <SlideTitle>INSTALLATION & COORDINATION</SlideTitle>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
         <div>
            <SlideSubTitle>EXECUTION</SlideSubTitle>
            <Bullet><strong>Professional Standards:</strong> Licensed technicians familiar with commercial environments.</Bullet>
            <Bullet><strong>Clean Execution:</strong> Professional wiring and hardware mounting.</Bullet>
         </div>
         <div>
            <SlideSubTitle>LOGISTICS</SlideSubTitle>
            <Bullet><strong>Minimal Disruption:</strong> Work scheduled to respect tenant comfort.</Bullet>
            <Bullet><strong>Coordination:</strong> Close alignment with Winn Residential management team.</Bullet>
         </div>
      </div>
    </div>
    <SlideNumber num="7" />
  </SlideCanvas>
);

// Slide 8: Testing & Handover
const Slide8 = () => (
  <SlideCanvas>
    <SlideTitle>TESTING, HANDOVER & TRAINING</SlideTitle>
    <div style={{ padding: '0 60px' }}>
      
      <div style={{ display: 'flex', gap: '60px', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
           <div style={{ borderTop: `2px solid ${THEME.colors.accent}`, paddingTop: '20px' }}>
             <h3 style={{ fontFamily: THEME.fonts.title, fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>1. SYSTEM TESTING</h3>
             <Body>Verification of camera angles, focus, and motion zones.</Body>
             <Body>Night vision IR testing and storage stress tests.</Body>
           </div>
        </div>
        
        <div style={{ flex: 1 }}>
           <div style={{ borderTop: `2px solid ${THEME.colors.accent}`, paddingTop: '20px' }}>
             <h3 style={{ fontFamily: THEME.fonts.title, fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>2. MOBILE SETUP</h3>
             <Body>App configuration on management devices (iOS/Android).</Body>
             <Body>Secure user credential creation.</Body>
           </div>
        </div>

        <div style={{ flex: 1 }}>
           <div style={{ borderTop: `2px solid ${THEME.colors.accent}`, paddingTop: '20px' }}>
             <h3 style={{ fontFamily: THEME.fonts.title, fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>3. USER TRAINING</h3>
             <Body>Instruction on playback and incident export.</Body>
             <Body>Delivery of system documentation.</Body>
           </div>
        </div>
      </div>
    </div>
    <SlideNumber num="8" />
  </SlideCanvas>
);

// Slide 9: Pricing
const Slide9 = () => (
  <SlideCanvas>
    <div style={{ padding: '0 60px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
      <SlideTitle>PRICING SUMMARY</SlideTitle>
      
      <div style={{ width: '100%', maxWidth: '900px', borderTop: `1px solid ${THEME.colors.line}`, borderBottom: `1px solid ${THEME.colors.line}`, marginLeft: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px 0', borderBottom: `1px solid ${THEME.colors.line}` }}>
           <span style={{ fontFamily: THEME.fonts.body, fontSize: '24px' }}>Subtotal</span>
           <span style={{ fontFamily: THEME.fonts.title, fontSize: '24px', fontWeight: 600 }}>$17,470.00</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px 0', borderBottom: `1px solid ${THEME.colors.line}` }}>
           <span style={{ fontFamily: THEME.fonts.body, fontSize: '24px' }}>Tax (8.875%)</span>
           <span style={{ fontFamily: THEME.fonts.title, fontSize: '24px', fontWeight: 600 }}>$1,550.46</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px 0', alignItems: 'center' }}>
           <span style={{ fontFamily: THEME.fonts.title, fontSize: '32px', fontWeight: 800, color: THEME.colors.text }}>GRAND TOTAL</span>
           <span style={{ fontFamily: THEME.fonts.title, fontSize: '48px', fontWeight: 800, color: THEME.colors.accent }}>$19,020.46</span>
        </div>
      </div>
      
      <p style={{ marginTop: '30px', color: THEME.colors.textMuted, fontSize: '16px', fontFamily: THEME.fonts.body, marginLeft: '60px' }}>
        Includes all labor, equipment, and configuration listed in the scope.
      </p>
    </div>
    <SlideNumber num="9" />
  </SlideCanvas>
);

// Slide 10: Partnership - Updated
const Slide10 = () => (
  <SlideCanvas>
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Left Panel: Text */}
      <div style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
        <SlideTitle>LONG-TERM PARTNERSHIP</SlideTitle>
        <div style={{ padding: `0 ${THEME.spacing.margin}` }}>
          <Bullet>Reliable support from a dedicated local provider.</Bullet>
          <Bullet>Scalable solution allowing future camera additions.</Bullet>
          <Bullet>Professional installation with minimal tenant disruption.</Bullet>
          <Bullet>Comprehensive system training and handover.</Bullet>
          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#F1F5F9', borderLeft: `4px solid ${THEME.colors.accent}` }}>
            <Body bold>Goal: A single reliable partner for your security needs.</Body>
          </div>
        </div>
      </div>
      
      {/* Right Panel: Photo 3 */}
      <div style={{ width: '40%', height: '100%', position: 'relative' }}>
         <img src={ASSETS.PHOTO_CAR} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
    <SlideNumber num="10" />
  </SlideCanvas>
);

// Slide 11: Next Steps
const Slide11 = () => (
  <SlideCanvas>
    <div style={{ padding: '0 60px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <SlideTitle>NEXT STEPS</SlideTitle>
      
      <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', gap: '30px', flex: 1 }}>
        {[
          'Approve Estimate #27 to lock in pricing.',
          'Schedule site walkthrough to finalize camera placements.',
          'Confirm building access for installation team.',
          'Execute installation and training window (Timeline TBD).'
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <span style={{ fontFamily: THEME.fonts.title, fontSize: '48px', fontWeight: 700, color: '#E2E8F0', lineHeight: 1 }}>{i + 1}</span>
            <span style={{ fontFamily: THEME.fonts.body, fontSize: '22px', fontWeight: 500, color: THEME.colors.text }}>{step}</span>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: 'auto', borderTop: `1px solid ${THEME.colors.line}`, paddingTop: '40px' }}>
         <h3 style={{ fontFamily: THEME.fonts.title, fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Contact us to proceed:</h3>
         <div style={{ display: 'flex', gap: '60px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
               <Phone size={24} color={THEME.colors.accent} />
               <span style={{ fontSize: '20px', fontFamily: THEME.fonts.body }}>(917) 525-3926</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
               <Mail size={24} color={THEME.colors.accent} />
               <span style={{ fontSize: '20px', fontFamily: THEME.fonts.body }}>altolocksmith@gmail.com</span>
            </div>
         </div>
      </div>
    </div>
    <SlideNumber num="11" />
  </SlideCanvas>
);

const App = () => {
  return (
    <div style={{ 
      padding: '40px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '40px', 
      alignItems: 'center', 
      maxWidth: '1400px', 
      margin: '0 auto', 
      backgroundColor: '#E2E8F0',
      minHeight: '100vh'
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Inter' }}>
        <h1 style={{ fontWeight: 800, color: '#111827' }}>Alto Security - Proposal Deck</h1>
        <p style={{ color: '#64748B' }}>Corporate Clean Theme • 11 Slides</p>
      </div>

      <div style={{ width: '100%' }}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;