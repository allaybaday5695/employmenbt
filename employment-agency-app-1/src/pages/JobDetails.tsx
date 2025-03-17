import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobDetails } from '../services/api';

const JobDetails: React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const [job, setJob] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const data = await fetchJobDetails(jobId);
                setJob(data);
            } catch (err) {
                setError('Failed to fetch job details');
            } finally {
                setLoading(false);
            }
        };

        getJobDetails();
    }, [jobId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
        </div>
    );
};

export default JobDetails;