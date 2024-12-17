import { MdLocationPin } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary,} = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 font-extrabold border border-red-300 rounded text-blue-500">{remote_or_onsite}</button>
        <button className="px-5 font-extrabold border border-red-300 rounded ml-4 text-blue-500" >{job_type}</button>
    </div>
    <div className="mt-4 flex gap-14">
        <h2 className="flex"><MdLocationPin className="text-2xl mr-2"></MdLocationPin> {location}</h2>
        <h2 className="flex  "><CiDollar className="text-2xl mr-2"/> Salary: {salary}</h2>

    </div>
    <div className="card-actions ">
      <Link to={`/job/${id}`}><button className="btn btn-primary font-bold">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Job;