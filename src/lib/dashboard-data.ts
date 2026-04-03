import { StatItem, RevenueData, JobRequest, Review, JobHistory } from "@/types/dashboard";

export const STATS: StatItem[] = [
  { label: 'Monthly Earnings', value: '$1,200', icon: 'DollarSign', color: 'emerald' },
  { label: 'Completed Jobs', value: '6', icon: 'CheckCircle', color: 'purple' },
  { label: 'Active Jobs', value: '2', icon: 'Briefcase', color: 'blue' },
  { label: 'Pending Jobs', value: '1', icon: 'Clock', color: 'orange' },
];

export const REVENUE_DATA: RevenueData[] = [
  { date: '01', amount: 800 },
  { date: '02', amount: 1500 },
  { date: '03', amount: 1100 },
  { date: '04', amount: 1900 },
  { date: '05', amount: 4230 },
  { date: '06', amount: 1500 },
  { date: '07', amount: 2400 },
  { date: '08', amount: 1800 },
  { date: '09', amount: 3200 },
  { date: '10', amount: 2100 },
  { date: '11', amount: 2600 },
  { date: '12', amount: 2300 },
];

export const JOB_REQUESTS: JobRequest[] = [
  { id: '1', title: 'Plumber needed for leaking pipe', client: 'Beryl', budget: '$240', status: 'Urgent' },
  { id: '2', title: 'Electrician for house wiring', client: 'Beryl', budget: '$240', status: 'Flexible' },
  { id: '3', title: 'Carpenter: wardrobe repair', client: 'Beryl', budget: '$240', status: 'Urgent' },
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Jesse Williams', avatar: '/avatar1.png', date: 'Sept, 2025', rating: 5, comment: 'Great work - punctual and skilled. Would definitely recommend to anyone.' },
  { id: '2', author: 'Daniel M.', avatar: '/avatar2.png', date: 'Sept, 2025', rating: 5, comment: 'Fast and polite. Highly recommended.' },
  { id: '3', author: 'Joe Mike', avatar: '/avatar3.png', date: 'Aug, 2025', rating: 5, comment: 'PairProfit connected me with a reliable plumber the same day. Truly professional and easy to work with.' },
];

export const JOB_HISTORY: JobHistory[] = [
  { id: '1', title: 'Carpenter for door repair', location: 'Ikeja', date: '21st August, 2025', amount: '$100', status: 'Completed' },
  { id: '2', title: 'Painter for living room', location: 'Lekki', date: '30th June, 2025', amount: '$200', status: 'Cancelled' },
  { id: '3', title: 'Electrician - Socket fix', location: 'Victoria Island', date: '22nd July, 2025', amount: '$100', status: 'Completed' },
  { id: '4', title: 'Carpenter for door repair', location: 'Ikeja', date: '30th June, 2025', amount: '$100', status: 'Pending' },
];
