-- Create consultancy_leads table
CREATE TABLE IF NOT EXISTS consultancy_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    education VARCHAR(255),
    country_interest VARCHAR(255),
    budget_range VARCHAR(100),
    message TEXT,
    status VARCHAR(50) DEFAULT 'New' CHECK (status IN ('New', 'In-Progress', 'Contacted', 'Converted', 'Closed')),
    source VARCHAR(100) DEFAULT 'Website',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    assigned_to UUID,
    follow_up_date TIMESTAMP WITH TIME ZONE
);

-- Enable RLS (Row Level Security)
ALTER TABLE consultancy_leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads (anyone can insert)
CREATE POLICY "Anyone can insert consultancy leads" ON consultancy_leads
    FOR INSERT WITH CHECK (true);

-- Create policy for reading leads (only authenticated users)
CREATE POLICY "Authenticated users can read consultancy leads" ON consultancy_leads
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy for updating leads (only authenticated users)
CREATE POLICY "Authenticated users can update consultancy leads" ON consultancy_leads
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policy for deleting leads (only authenticated users)
CREATE POLICY "Authenticated users can delete consultancy leads" ON consultancy_leads
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_consultancy_leads_updated_at 
    BEFORE UPDATE ON consultancy_leads 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_consultancy_leads_status ON consultancy_leads(status);
CREATE INDEX idx_consultancy_leads_country_interest ON consultancy_leads(country_interest);
CREATE INDEX idx_consultancy_leads_created_at ON consultancy_leads(created_at DESC);

-- Create a table for visa categories (optional, for dynamic content)
CREATE TABLE IF NOT EXISTS visa_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    features JSONB,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for visa_categories
ALTER TABLE visa_categories ENABLE ROW LEVEL SECURITY;

-- Policy for reading visa categories (public read access)
CREATE POLICY "Anyone can read visa categories" ON visa_categories
    FOR SELECT USING (is_active = true);

-- Insert default visa categories
INSERT INTO visa_categories (name, description, icon, features, sort_order) VALUES
('Work Visa', 'Professional employment opportunities with complete documentation support and employer verification.', 'Briefcase', '["Employer Verification", "Work Permit", "Residence Permit", "Family Sponsorship"]', 1),
('Study Visa', 'Complete admission guidance and student visa processing for top international universities.', 'GraduationCap', '["University Admission", "Student Visa", "Scholarship Help", "Accommodation Support"]', 2),
('Visit Visa', 'Hassle-free tourist and business visa processing with fast track options available.', 'Plane', '["Tourist Visa", "Business Visa", "Family Visit", "Multiple Entry"]', 3),
('Immigration', 'Permanent residency and citizenship programs with comprehensive legal support.', 'Users', '["Permanent Residency", "Citizenship", "Investment Programs", "Family Reunification"]', 4);

-- Create a table for countries
CREATE TABLE IF NOT EXISTS countries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    flag_emoji VARCHAR(10),
    description TEXT,
    visa_types JSONB,
    processing_time VARCHAR(50),
    success_rate VARCHAR(10),
    highlights JSONB,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for countries
ALTER TABLE countries ENABLE ROW LEVEL SECURITY;

-- Policy for reading countries (public read access)
CREATE POLICY "Anyone can read countries" ON countries
    FOR SELECT USING (is_active = true);

-- Insert default countries
INSERT INTO countries (name, flag_emoji, description, visa_types, processing_time, success_rate, highlights, sort_order) VALUES
('Serbia', '🇷🇸', 'Fast-track work permits and business opportunities', '["Work Visa", "Business Visa", "Student Visa"]', '2-3 months', '90%', '["No IELTS Required", "Fast Processing", "Low Investment"]', 1),
('Poland', '🇵🇱', 'EU work permits with residence benefits', '["Work Visa", "Seasonal Work", "Family Reunification"]', '3-4 months', '85%', '["EU Member State", "Work Permit", "Family Sponsorship"]', 2),
('Germany', '🇩🇪', 'Skilled worker visas and job seeker permits', '["Job Seeker Visa", "Work Visa", "Study Visa"]', '4-6 months', '88%', '["Skilled Worker Focus", "High Salary", "PR Opportunities"]', 3),
('Gulf Countries', '🇸🇦', 'Premium Gulf employment opportunities', '["Employment Visa", "Business Visa", "Family Visa"]', '1-2 months', '95%', '["Tax-Free Income", "Luxury Lifestyle", "Fast Processing"]', 4);
