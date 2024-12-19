import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs]= useState([]);

  const handleJobsFilter = filter =>{
    if(filter === 'all'){
      setDisplayJobs(appliedJobs);
    }
    else if(filter === 'remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    }
    else if(filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
      // or
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, [jobs ]);

  return (
    <div>
      <h2 className="text-3xl">Jobs Applied: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a >Remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      <ul className="bg-white text-black">
        {
          displayJobs.map(job => <li className="bg-green-200 p-3 mb-4" key={job.id}>
          <img src={job.logo} alt="" />
          <h1>{job.job_title} </h1>
          <h1>{job.company_name}</h1>
          <h1>{job.remote_or_onsite}</h1>
          </li>)
        }
      </ul>
    </div>
  );
};

export default AppliedJobs;
