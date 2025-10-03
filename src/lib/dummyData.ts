// Dummy data for the entire application

export interface Village {
  id: string;
  name: string;
  population: number;
  electrification: number;
  sanitation: number;
  healthcare: number;
  education: number;
  latitude: number;
  longitude: number;
}

export interface Project {
  id: string;
  name: string;
  villageId: string;
  category: 'sanitation' | 'electrification' | 'healthcare' | 'education';
  budget: number;
  startDate: string;
  endDate: string;
  progress: number;
  status: 'pending' | 'approved' | 'in_progress' | 'completed';
  assignedOfficer?: string;
}

export interface Feedback {
  id: string;
  citizenName: string;
  villageId: string;
  message: string;
  timestamp: string;
  rating: number;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'event' | 'notice' | 'achievement';
}

export const villages: Village[] = [
  { id: 'v1', name: 'Gram Sundaram', population: 5420, electrification: 85, sanitation: 72, healthcare: 68, education: 75, latitude: 28.6139, longitude: 77.2090 },
  { id: 'v2', name: 'Harit Nagar', population: 3890, electrification: 92, sanitation: 80, healthcare: 70, education: 82, latitude: 28.7041, longitude: 77.1025 },
  { id: 'v3', name: 'Swachh Gaon', population: 4210, electrification: 78, sanitation: 88, healthcare: 65, education: 70, latitude: 28.5355, longitude: 77.3910 },
  { id: 'v4', name: 'Vikas Pur', population: 6100, electrification: 88, sanitation: 65, healthcare: 55, education: 68, latitude: 28.4595, longitude: 77.0266 },
  { id: 'v5', name: 'Pragati Nagar', population: 2980, electrification: 95, sanitation: 70, healthcare: 60, education: 78, latitude: 28.8386, longitude: 77.0930 },
  { id: 'v6', name: 'Samriddhi Gaon', population: 5650, electrification: 70, sanitation: 58, healthcare: 48, education: 65, latitude: 28.3670, longitude: 77.3170 },
  { id: 'v7', name: 'Navjeevan Pur', population: 4450, electrification: 82, sanitation: 75, healthcare: 62, education: 72, latitude: 28.6692, longitude: 77.4538 },
  { id: 'v8', name: 'Unnati Nagar', population: 3720, electrification: 90, sanitation: 68, healthcare: 58, education: 69, latitude: 28.4089, longitude: 77.3178 },
  { id: 'v9', name: 'Khushhal Gaon', population: 5280, electrification: 75, sanitation: 62, healthcare: 52, education: 64, latitude: 28.5494, longitude: 77.2501 },
  { id: 'v10', name: 'Shakti Pur', population: 4890, electrification: 80, sanitation: 55, healthcare: 50, education: 60, latitude: 28.7230, longitude: 77.3890 },
];

export const projects: Project[] = [
  { id: 'p1', name: 'Solar Street Lighting Phase 1', villageId: 'v1', category: 'electrification', budget: 450000, startDate: '2024-01-15', endDate: '2024-06-30', progress: 85, status: 'in_progress', assignedOfficer: '2' },
  { id: 'p2', name: 'Community Health Center Upgrade', villageId: 'v1', category: 'healthcare', budget: 1200000, startDate: '2024-02-01', endDate: '2024-09-30', progress: 45, status: 'in_progress', assignedOfficer: '2' },
  { id: 'p3', name: 'Toilet Construction Drive', villageId: 'v2', category: 'sanitation', budget: 800000, startDate: '2023-11-01', endDate: '2024-05-31', progress: 92, status: 'in_progress', assignedOfficer: '2' },
  { id: 'p4', name: 'Primary School Digital Library', villageId: 'v2', category: 'education', budget: 350000, startDate: '2024-03-01', endDate: '2024-08-31', progress: 60, status: 'in_progress', assignedOfficer: '2' },
  { id: 'p5', name: 'Waste Management System', villageId: 'v3', category: 'sanitation', budget: 950000, startDate: '2024-01-01', endDate: '2024-07-31', progress: 78, status: 'in_progress', assignedOfficer: '2' },
  { id: 'p6', name: 'Grid Power Extension', villageId: 'v4', category: 'electrification', budget: 1500000, startDate: '2023-12-01', endDate: '2024-11-30', progress: 55, status: 'in_progress', assignedOfficer: '2' },
  { id: 'p7', name: 'Mobile Health Unit', villageId: 'v4', category: 'healthcare', budget: 650000, startDate: '2024-02-15', endDate: '2024-08-15', progress: 40, status: 'in_progress' },
  { id: 'p8', name: 'Adult Literacy Program', villageId: 'v5', category: 'education', budget: 280000, startDate: '2024-01-10', endDate: '2024-12-31', progress: 70, status: 'in_progress' },
  { id: 'p9', name: 'Solar Water Pumps', villageId: 'v5', category: 'electrification', budget: 520000, startDate: '2024-03-01', endDate: '2024-09-30', progress: 35, status: 'in_progress' },
  { id: 'p10', name: 'Water Purification Plant', villageId: 'v6', category: 'sanitation', budget: 1100000, startDate: '2024-02-01', endDate: '2024-10-31', progress: 25, status: 'pending' },
  { id: 'p11', name: 'Anganwadi Upgrade', villageId: 'v6', category: 'education', budget: 420000, startDate: '2024-04-01', endDate: '2024-10-31', progress: 15, status: 'pending' },
  { id: 'p12', name: 'Vaccination Drive Infrastructure', villageId: 'v7', category: 'healthcare', budget: 380000, startDate: '2024-01-20', endDate: '2024-06-20', progress: 88, status: 'in_progress' },
  { id: 'p13', name: 'Street Electrification Phase 2', villageId: 'v7', category: 'electrification', budget: 680000, startDate: '2024-02-10', endDate: '2024-08-31', progress: 65, status: 'in_progress' },
  { id: 'p14', name: 'Drainage System Upgrade', villageId: 'v8', category: 'sanitation', budget: 920000, startDate: '2024-03-15', endDate: '2024-11-30', progress: 30, status: 'approved' },
  { id: 'p15', name: 'Computer Lab for School', villageId: 'v8', category: 'education', budget: 550000, startDate: '2024-05-01', endDate: '2024-11-30', progress: 10, status: 'approved' },
  { id: 'p16', name: 'Ayurvedic Dispensary', villageId: 'v9', category: 'healthcare', budget: 480000, startDate: '2024-02-20', endDate: '2024-09-20', progress: 50, status: 'in_progress' },
  { id: 'p17', name: 'LED Bulb Distribution', villageId: 'v9', category: 'electrification', budget: 180000, startDate: '2024-01-05', endDate: '2024-04-30', progress: 95, status: 'in_progress' },
  { id: 'p18', name: 'Public Toilet Blocks', villageId: 'v10', category: 'sanitation', budget: 720000, startDate: '2024-03-10', endDate: '2024-10-10', progress: 42, status: 'in_progress' },
  { id: 'p19', name: 'Teacher Training Program', villageId: 'v10', category: 'education', budget: 320000, startDate: '2024-04-15', endDate: '2024-12-31', progress: 20, status: 'approved' },
  { id: 'p20', name: 'Community Hall Solar Panels', villageId: 'v1', category: 'electrification', budget: 390000, startDate: '2024-05-01', endDate: '2024-10-31', progress: 5, status: 'pending' },
  // Additional 30 projects for variety
  { id: 'p21', name: 'Road Lighting Extension', villageId: 'v3', category: 'electrification', budget: 420000, startDate: '2024-01-12', endDate: '2024-07-12', progress: 72, status: 'in_progress' },
  { id: 'p22', name: 'Maternal Health Camp', villageId: 'v2', category: 'healthcare', budget: 280000, startDate: '2024-02-05', endDate: '2024-08-05', progress: 82, status: 'in_progress' },
  { id: 'p23', name: 'Solid Waste Collection', villageId: 'v4', category: 'sanitation', budget: 580000, startDate: '2024-01-18', endDate: '2024-06-30', progress: 68, status: 'in_progress' },
  { id: 'p24', name: 'Scholarship Distribution', villageId: 'v6', category: 'education', budget: 450000, startDate: '2024-04-01', endDate: '2024-12-31', progress: 12, status: 'approved' },
  { id: 'p25', name: 'Inverter Installation', villageId: 'v7', category: 'electrification', budget: 620000, startDate: '2024-03-20', endDate: '2024-09-20', progress: 48, status: 'in_progress' },
  { id: 'p26', name: 'Eye Care Camp Infrastructure', villageId: 'v5', category: 'healthcare', budget: 340000, startDate: '2024-02-28', endDate: '2024-08-28', progress: 55, status: 'in_progress' },
  { id: 'p27', name: 'Biogas Plant Installation', villageId: 'v8', category: 'sanitation', budget: 780000, startDate: '2024-04-10', endDate: '2024-11-10', progress: 22, status: 'approved' },
  { id: 'p28', name: 'Skill Development Center', villageId: 'v9', category: 'education', budget: 890000, startDate: '2024-05-15', endDate: '2025-02-28', progress: 8, status: 'pending' },
  { id: 'p29', name: 'Transformer Upgrade', villageId: 'v10', category: 'electrification', budget: 720000, startDate: '2024-03-05', endDate: '2024-09-05', progress: 62, status: 'in_progress' },
  { id: 'p30', name: 'Pharmacy Setup', villageId: 'v3', category: 'healthcare', budget: 420000, startDate: '2024-01-25', endDate: '2024-07-25', progress: 75, status: 'in_progress' },
  { id: 'p31', name: 'Rainwater Harvesting', villageId: 'v1', category: 'sanitation', budget: 650000, startDate: '2024-02-18', endDate: '2024-08-18', progress: 58, status: 'in_progress' },
  { id: 'p32', name: 'Science Lab Equipment', villageId: 'v4', category: 'education', budget: 480000, startDate: '2024-05-20', endDate: '2024-11-20', progress: 5, status: 'pending' },
  { id: 'p33', name: 'Mini Grid Setup', villageId: 'v2', category: 'electrification', budget: 950000, startDate: '2024-04-05', endDate: '2024-12-05', progress: 18, status: 'approved' },
  { id: 'p34', name: 'Dental Clinic', villageId: 'v6', category: 'healthcare', budget: 520000, startDate: '2024-03-12', endDate: '2024-09-12', progress: 38, status: 'in_progress' },
  { id: 'p35', name: 'Sewage Treatment Plant', villageId: 'v7', category: 'sanitation', budget: 1350000, startDate: '2024-05-01', endDate: '2025-03-31', progress: 15, status: 'pending' },
  { id: 'p36', name: 'Playground Development', villageId: 'v5', category: 'education', budget: 380000, startDate: '2024-02-22', endDate: '2024-08-22', progress: 65, status: 'in_progress' },
  { id: 'p37', name: 'Electric Vehicle Charging', villageId: 'v8', category: 'electrification', budget: 580000, startDate: '2024-04-18', endDate: '2024-10-18', progress: 28, status: 'approved' },
  { id: 'p38', name: 'Ambulance Service', villageId: 'v9', category: 'healthcare', budget: 750000, startDate: '2024-01-30', endDate: '2024-07-30', progress: 80, status: 'in_progress' },
  { id: 'p39', name: 'Composting Units', villageId: 'v10', category: 'sanitation', budget: 420000, startDate: '2024-03-25', endDate: '2024-09-25', progress: 45, status: 'in_progress' },
  { id: 'p40', name: 'Library Expansion', villageId: 'v3', category: 'education', budget: 360000, startDate: '2024-05-10', endDate: '2024-11-10', progress: 10, status: 'approved' },
  { id: 'p41', name: 'Solar Rooftop Program', villageId: 'v1', category: 'electrification', budget: 820000, startDate: '2024-06-01', endDate: '2024-12-31', progress: 3, status: 'pending' },
  { id: 'p42', name: 'Physiotherapy Center', villageId: 'v4', category: 'healthcare', budget: 490000, startDate: '2024-02-12', endDate: '2024-08-12', progress: 52, status: 'in_progress' },
  { id: 'p43', name: 'Garbage Segregation Units', villageId: 'v2', category: 'sanitation', budget: 380000, startDate: '2024-01-08', endDate: '2024-06-08', progress: 88, status: 'in_progress' },
  { id: 'p44', name: 'Vocational Training', villageId: 'v7', category: 'education', budget: 620000, startDate: '2024-04-22', endDate: '2024-12-22', progress: 18, status: 'approved' },
  { id: 'p45', name: 'Backup Generator', villageId: 'v6', category: 'electrification', budget: 680000, startDate: '2024-03-28', endDate: '2024-09-28', progress: 42, status: 'in_progress' },
  { id: 'p46', name: 'Mental Health Helpline', villageId: 'v5', category: 'healthcare', budget: 280000, startDate: '2024-05-05', endDate: '2024-11-05', progress: 12, status: 'pending' },
  { id: 'p47', name: 'Plastic Ban Campaign', villageId: 'v9', category: 'sanitation', budget: 180000, startDate: '2024-01-15', endDate: '2024-05-15', progress: 92, status: 'in_progress' },
  { id: 'p48', name: 'Smart Classroom', villageId: 'v8', category: 'education', budget: 720000, startDate: '2024-06-10', endDate: '2024-12-10', progress: 5, status: 'pending' },
  { id: 'p49', name: 'Power Quality Improvement', villageId: 'v10', category: 'electrification', budget: 540000, startDate: '2024-02-08', endDate: '2024-08-08', progress: 68, status: 'in_progress' },
  { id: 'p50', name: 'Telemedicine Setup', villageId: 'v3', category: 'healthcare', budget: 620000, startDate: '2024-04-12', endDate: '2024-10-12', progress: 32, status: 'approved' },
];

export const feedbacks: Feedback[] = [
  { id: 'f1', citizenName: 'Rajesh Kumar', villageId: 'v1', message: 'The new street lights have made our village much safer at night. Thank you!', timestamp: '2024-05-15T10:30:00', rating: 5 },
  { id: 'f2', citizenName: 'Priya Singh', villageId: 'v2', message: 'Toilet construction is progressing well. We appreciate the efforts.', timestamp: '2024-05-14T14:20:00', rating: 4 },
  { id: 'f3', citizenName: 'Amit Patel', villageId: 'v3', message: 'Waste management system has improved our village cleanliness significantly.', timestamp: '2024-05-13T09:15:00', rating: 5 },
  { id: 'f4', citizenName: 'Sunita Devi', villageId: 'v1', message: 'Health center upgrade is taking too long. Please expedite the work.', timestamp: '2024-05-12T16:45:00', rating: 3 },
  { id: 'f5', citizenName: 'Vikram Sharma', villageId: 'v4', message: 'Grid power extension will solve our electricity problems. Great initiative!', timestamp: '2024-05-11T11:00:00', rating: 5 },
  { id: 'f6', citizenName: 'Kavita Verma', villageId: 'v5', message: 'Adult literacy program has helped many villagers. Excellent work!', timestamp: '2024-05-10T13:30:00', rating: 5 },
  { id: 'f7', citizenName: 'Ramesh Yadav', villageId: 'v2', message: 'Digital library for school is a game changer for our children.', timestamp: '2024-05-09T15:20:00', rating: 5 },
  { id: 'f8', citizenName: 'Deepa Gupta', villageId: 'v6', message: 'Water purification plant is urgently needed. Hope it starts soon.', timestamp: '2024-05-08T10:10:00', rating: 4 },
  { id: 'f9', citizenName: 'Suresh Tiwari', villageId: 'v7', message: 'Vaccination infrastructure has made health camps more effective.', timestamp: '2024-05-07T12:40:00', rating: 5 },
  { id: 'f10', citizenName: 'Anjali Mehta', villageId: 'v3', message: 'Road lighting has reduced accidents. Very satisfied with the project.', timestamp: '2024-05-06T14:55:00', rating: 5 },
  { id: 'f11', citizenName: 'Manoj Singh', villageId: 'v8', message: 'Drainage system upgrade is needed badly. Glad it is approved.', timestamp: '2024-05-05T09:25:00', rating: 4 },
  { id: 'f12', citizenName: 'Rekha Joshi', villageId: 'v4', message: 'Mobile health unit has helped many elderly people in our village.', timestamp: '2024-05-04T16:10:00', rating: 5 },
  { id: 'f13', citizenName: 'Sanjay Dubey', villageId: 'v9', message: 'LED bulb distribution was very helpful. Almost complete now!', timestamp: '2024-05-03T11:35:00', rating: 5 },
  { id: 'f14', citizenName: 'Pooja Reddy', villageId: 'v10', message: 'Public toilet blocks will improve sanitation. Looking forward to completion.', timestamp: '2024-05-02T13:15:00', rating: 4 },
  { id: 'f15', citizenName: 'Arun Kumar', villageId: 'v5', message: 'Solar water pumps are excellent for irrigation. Very innovative!', timestamp: '2024-05-01T10:50:00', rating: 5 },
  { id: 'f16', citizenName: 'Meena Sharma', villageId: 'v6', message: 'Anganwadi upgrade is important for child development. Please start soon.', timestamp: '2024-04-30T15:30:00', rating: 4 },
  { id: 'f17', citizenName: 'Gopal Rao', villageId: 'v7', message: 'Street electrification phase 2 is progressing nicely. Keep it up!', timestamp: '2024-04-29T12:20:00', rating: 5 },
  { id: 'f18', citizenName: 'Nisha Kapoor', villageId: 'v8', message: 'Computer lab will help students learn modern skills. Great project!', timestamp: '2024-04-28T14:40:00', rating: 5 },
  { id: 'f19', citizenName: 'Harish Pandey', villageId: 'v9', message: 'Ayurvedic dispensary is a welcome addition to healthcare facilities.', timestamp: '2024-04-27T09:55:00', rating: 4 },
  { id: 'f20', citizenName: 'Lakshmi Iyer', villageId: 'v10', message: 'Teacher training will improve education quality. Very good initiative!', timestamp: '2024-04-26T11:25:00', rating: 5 },
];

export const announcements: Announcement[] = [
  {
    id: 'a1',
    title: 'PM-AJAY Annual Review Meeting',
    description: 'State-level review meeting for PM Adarsh Gram Yojana achievements scheduled for June 15, 2024. All officers and village heads are requested to attend.',
    date: '2024-06-01',
    type: 'event'
  },
  {
    id: 'a2',
    title: 'New Project Approval Guidelines',
    description: 'Updated guidelines for project proposal submissions have been released. All officers must review the new requirements before submitting proposals. Focus on sustainable development and community participation.',
    date: '2024-05-20',
    type: 'notice'
  },
  {
    id: 'a3',
    title: 'Gram Sundaram Achieves 85% Electrification',
    description: 'Congratulations to Gram Sundaram for achieving 85% electrification coverage! This milestone was reached through the successful implementation of Solar Street Lighting Phase 1 project.',
    date: '2024-05-10',
    type: 'achievement'
  }
];

export const getAllVillages = () => villages;
export const getVillageById = (id: string) => villages.find(v => v.id === id);
export const getProjectsByVillage = (villageId: string) => projects.filter(p => p.villageId === villageId);
export const getProjectsByOfficer = (officerId: string) => projects.filter(p => p.assignedOfficer === officerId);
export const getFeedbacksByVillage = (villageId: string) => feedbacks.filter(f => f.villageId === villageId);
export const getPendingProjects = () => projects.filter(p => p.status === 'pending');
export const getAllProjects = () => projects;
export const getAllFeedbacks = () => feedbacks;
export const getAllAnnouncements = () => announcements;
