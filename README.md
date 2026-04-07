# Fast Global Consultancy - Visa Portal

A premium visa consultancy portal built with React, Tailwind CSS, and Supabase. Features a luxury Navy & Gold theme with comprehensive visa services and WhatsApp integration.

## 🚀 Features

- **Luxury Design**: Navy Blue (#001F3F) & Gold (#D4AF37) theme
- **Hero Section**: Compelling headline with CTAs
- **Visa Categories**: 4 premium cards (Work, Study, Visit, Immigration)
- **Country Focus**: Serbia, Poland, Germany, and Gulf countries with flags
- **Assessment Form**: Complete form with WhatsApp redirect
- **Supabase Integration**: Secure database for consultancy leads
- **Mobile Responsive**: 100% perfect mobile view
- **WhatsApp Integration**: Direct messaging with user data
- **Animations**: Smooth Framer Motion animations

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Ready for visaconsultant.fastjobcareer.com

## 📋 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env` and configure:
```env
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
REACT_APP_WHATSAPP_NUMBER=923001234567
```

### 3. Database Setup
Run the `supabase-schema.sql` file in your Supabase project to create:
- `consultancy_leads` table with RLS
- `visa_categories` table (optional)
- `countries` table (optional)

### 4. Start Development Server
```bash
npm start
```

## 📱 Mobile Optimization

The portal is fully optimized for mobile devices:
- Responsive navigation with hamburger menu
- Touch-friendly buttons and forms
- Optimized images and animations
- Perfect layout for Pakistani mobile users

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Header.js           # Navigation with dropdowns
│   ├── HeroSection.js      # Hero with CTAs
│   ├── VisaCategories.js   # 4 premium service cards
│   ├── CountryFocus.js     # Country showcase
│   ├── AssessmentForm.js   # Form with WhatsApp redirect
│   └── Footer.js           # Footer with social links
├── supabase.js             # Database functions
├── App.js                  # Main app component
├── index.js                # Entry point
└── index.css               # Global styles
```

## 🔧 Configuration

### Tailwind CSS
Custom theme colors defined in `tailwind.config.js`:
- `navy`: #001F3F
- `gold`: #D4AF37
- Custom animations and components

### Supabase Tables
- **consultancy_leads**: Main lead collection
- **visa_categories**: Dynamic content
- **countries**: Country information
- **RLS**: Row Level Security enabled

## 📊 Features Breakdown

### Hero Section
- Professional headline: "Your Trusted Visa Consultant in Pakistan"
- Sub-headline focusing on Serbia & Europe
- Dual CTAs: Assessment and WhatsApp
- Trust indicators and statistics

### Visa Categories
- Work Visa: Employment opportunities
- Study Visa: University admissions
- Visit Visa: Tourist/business visas
- Immigration: Permanent residency

### Country Focus
- Serbia: Fast-track work permits
- Poland: EU work permits
- Germany: Skilled worker visas
- Gulf Countries: Premium employment

### Assessment Form
- Complete user information collection
- WhatsApp auto-redirect with data
- Supabase database integration
- Form validation and error handling

## 🎨 Design System

### Colors
- Primary Navy: #001F3F
- Primary Gold: #D4AF37
- Gold Light: #F4E5C2
- Navy Dark: #001529

### Typography
- Headings: Georgia (serif)
- Body: Inter (sans-serif)
- Luxury gradient effects

### Animations
- Fade-in effects
- Slide-up animations
- Hover states
- Gold shimmer effects

## 📈 WhatsApp Integration

The form automatically redirects to WhatsApp with:
- User's complete information
- Selected country and visa type
- Pre-formatted message
- Direct contact to consultants

## 🔐 Security Features

- Row Level Security (RLS) in Supabase
- Input validation and sanitization
- Secure form submissions
- GDPR compliant data handling

## 🚀 Deployment

Ready for deployment on `visaconsultant.fastjobcareer.com`:
1. Build the project: `npm run build`
2. Deploy to hosting service
3. Configure environment variables
4. Set up custom domain

## 📞 Contact Information

- **Office**: 6th Road, Rawalpindi
- **Phone**: +92 300 1234567
- **Email**: info@fastglobalconsultancy.com
- **WhatsApp**: Direct integration

## ⚖️ Legal Compliance

Includes comprehensive legal disclaimer:
- Private consultancy firm status
- No recruitment agency claims
- No visa guarantees
- Embassy decision dependency

## 🎯 Target Audience

Optimized for Pakistani clients:
- Mobile-first design
- Local contact information
- Relevant country options
- Urdu-friendly interface elements

---

**Fast Global Consultancy (Pvt) Ltd** - Your trusted partner for international visa services.
