import { Schema, model } from 'mongoose';
import { Job } from '../types';

const jobSchema = new Schema<Job>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const JobModel = model<Job>('Job', jobSchema);

export default JobModel;