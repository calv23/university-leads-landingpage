-- 001_create_programs.sql
CREATE TABLE programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  faculty VARCHAR(100) NOT NULL CHECK (faculty IN ('Business', 'Engineering', 'IT')),
  level VARCHAR(50) NOT NULL CHECK (level IN ('Diploma', 'Degree')),
  description TEXT NOT NULL,
  duration_months INTEGER NOT NULL,
  tuition_fee_myr DECIMAL(10,2),
  image_url TEXT,
  features JSONB DEFAULT '[]',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_programs_faculty ON programs(faculty);
CREATE INDEX idx_programs_level ON programs(level);
CREATE INDEX idx_programs_active ON programs(is_active);
