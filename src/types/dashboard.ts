import { ReactNode } from "react";

export type JobStatus = 'Completed' | 'Cancelled' | 'Pending' | 'Active' | 'Urgent' | 'Flexible';

export interface StatItem {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

export interface RevenueData {
  date: string;
  amount: number;
}

export interface JobRequest {
  id: string;
  title: string;
  client: string;
  budget: string;
  status: JobStatus;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
}

export interface JobHistory {
  id: string;
  title: string;
  location: string;
  date: string;
  amount: string;
  status: JobStatus;
}
