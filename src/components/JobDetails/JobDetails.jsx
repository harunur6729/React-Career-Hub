import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localstorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job =>job.id === idInt);
    const { job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information} =job;

    const handleApplyJob = () =>{
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }
    return (
        <div>
            <h2 className="font-bold text-center mb-3 text-4xl  text-black bg-white py-4">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 px-2 bg-white text-black">
                    <p className="mt-4"><span className="font-bold "> Job Description:</span>  {job_description}</p>
                    <p className="mt-4"><span className="font-bold "> Job Responsibility: </span>{job_responsibility}</p>
                    <p className="mt-4"><span className="font-bold "> Educational Requirements:</span> {educational_requirements}</p>
                    <p className="mt-4"><span className="font-bold ">Experience:</span>  {experiences}</p>
                </div>
                <div className="border text-black">
                    <div className="bg-white pl-2 px-2">
                        <h2 className="font-bold text-center">Job Details</h2>
                        <h2 className="flex  "><CiDollar className="text-2xl mr-2"/> <span className="font-bold">Salary:</span> {salary}</h2>
                        <h2 className="flex"> <MdOutlineSubtitles className="text-2xl mr-2"/> <span className="font-bold">Job Title:</span> {job_title}</h2>

                        <h2 className="font-bold mt-6">Contact Information</h2>
                        <hr className="mb-2" />
                        <h1 className="flex"> <FaPhoneAlt className="text-2xl" /><span className="font-bold">Phone:</span>{contact_information.phone}</h1>
                        <h1 className="flex"> <AiOutlineMail className="text-2xl" /><span className="font-bold">Email:</span>{contact_information.email}</h1>
                        <h1 className="flex"> <MdLocationPin className="text-3xl mr-2 ml-1"/><span className="font-bold"> Address: </span>{contact_information.address}</h1>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary mt-2 w-full">Apply Now</button>
                </div>
                
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;