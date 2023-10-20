// import { useEffect, useState } from "react";
// import { useAppSelector } from "../../../../redux/store";
// import SaveCancelSmall from "../Common/SaveCancelSmall"
// import axios from "axios";
// import { toast } from "react-toastify";

// const EditSOAPNote = (props: any) => {
//     const { accessToken } = useAppSelector((state) => state.auth);

//     const { setDrawerVisibility, data, appointmentId } = props

//     const [prescriptionsList, setPrescriptionList] = useState([
//         { "medication": "", "dosage": "1:0:1", "duration": "1" },
//     ])
//     const [length, setLength] = useState(1)

//     const updatePrescription = (index, value) => {
//         setPrescriptionList(prevPrescriptions => {
//             const updatedPrescriptions = prevPrescriptions.map((prescription, i) => {
//                 if (i === index) {
//                     return { ...prescription, medication: value };
//                 }
//                 return prescription;
//             });
//             return updatedPrescriptions;
//         });
//     };

//     const updateDosage = (index, value) => {
//         setPrescriptionList(prevPrescriptions => {
//             const updatedPrescriptions = prevPrescriptions.map((prescription, i) => {
//                 if (i === index) {
//                     return { ...prescription, dosage: value };
//                 }
//                 return prescription;
//             });
//             return updatedPrescriptions;
//         });
//     };

//     const updateDuration = (index, value) => {
//         setPrescriptionList(prevPrescriptions => {
//             const updatedPrescriptions = prevPrescriptions.map((prescription, i) => {
//                 if (i === index) {
//                     // return { ...prescription, duration: parseInt(String(value), 10) };
//                     return { ...prescription, duration: value };
//                 }
//                 return prescription;
//             });
//             return updatedPrescriptions;
//         });
//     };


//     useEffect(() => {
//         setSoapData(prevSoapData => ({
//             ...prevSoapData,
//             prescription: prescriptionsList
//         }));
//     }, [prescriptionsList]); 

//     const addPrescription = () => {
//         if (prescriptionsList[length - 1].medication !== "") {
//             setPrescriptionList([...prescriptionsList, { "medication": "", "dosage": "1:0:1", "duration": "1" }])
//             setLength(length + 1)
//         }
//     }
//     const [complaint, setComplaint] = useState("Complaint")
//     const [assessment, setAssessment] = useState("Assessment")
//     const [diagnosis, setDiagnosis] = useState("Diagnosis")
//     const [treatment, setTreatment] = useState("Treatment")
//     const [followup, setFollowup] = useState("Follow-Up")

//     useEffect(() => {
//         setSoapData(prevSoapData => ({
//             ...prevSoapData,
//             appointment_id: appointmentId,
//             complaint: complaint,
//             assessment: assessment,
//             diagnosis: diagnosis,
//             treatment: treatment,
//             follow_up: followup
//         }));
//     }, [complaint, assessment, diagnosis, treatment, followup]);
//     const [soapData, setSoapData] = useState({
//         "appointment_id": appointmentId,
//         "complaint": complaint,
//         "assessment": assessment,
//         "diagnosis": diagnosis,
//         "treatment": treatment,
//         "prescription": prescriptionsList,
//         "follow_up": followup

//     })


//     const editSoapNote = () => {
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`,
//                 "Content-type": "application/json"
//             },
//             // params: {
//             //     // doctor: decodedUser.sub,
                
//             //     // is_consultation:true
//             // }
//         };
//         axios
//             .post(`http://localhost:3002/api/v1/soap/create`, soapData, config)
//             .then((response) => {
//                 toast.success("Success editing SOAP Note");
//             })
//             .catch((error) => {
//                 toast.error("Error editing SOAP Note");
//             })
//     } 

//     const formatDate = (date: Date): string => {
//         const year = date.getFullYear().toString();
//         const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based, so add 1
//         const day = date.getDate().toString().padStart(2, '0');

//         return `${day}/${month}/${year}`;
//     }

    

    

    

//     const prescriptionsItems = Object.entries(prescriptionsList).map((prescription) => {
//         return (
//             <div className="flex items-center justify-between mb-[3%] gap-2">
//                 <div className="MEDICATION flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                     <div className="relative font-medium mb-[5%]">Medication</div>
//                     <input
//                         className="font-work-sans outline-none w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                         type="text"
//                         defaultValue={prescription[1].medication}
//                         onChange={(e) => updatePrescription(parseInt(prescription[0], 10), e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="DOSAGE flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                     <div className="relative font-medium mb-[5%]">Dosage</div>
//                     <div className="flex items-center justify-between">
//                         <input
//                             className="font-work-sans outline-none w-[60%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                             type="text"
//                             defaultValue={prescription[1].dosage}
//                             onChange={(e) => updateDosage(parseInt(prescription[0], 10), e.target.value)}
//                             required
//                         />
//                         <div className="flex bg-[#114ff5] rounded p-[5%] items-center justify-center w-[39%] text-[#fff] text-[.8rem] font-semibold leading-[1.2rem]">/ Day</div>
//                     </div>

//                 </div>

//                 <div className="DURATION flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                     <div className="relative font-medium mb-[5%]">Duration</div>
//                     <div className="flex items-center justify-between">
//                         <input
//                             className="font-work-sans outline-none w-[60%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                             type="text"
//                             defaultValue={prescription[1].duration}
//                             onChange={(e) => updateDuration(parseInt(prescription[0], 10), e.target.value)}
//                             required
//                         />
//                         <div className="flex bg-[#114ff5] rounded p-[5%] items-center justify-center w-[39%] text-[#fff] text-[.8rem] font-semibold leading-[1.2rem]">Days</div>

//                     </div>

//                 </div>
//             </div>
//         )
//     })





//     return (
//         <div className="w-full bg-whitesmoke-100 p-[1rem] shadow h-[100vh] overflow-scroll no-scrollbar">
//             <div className="flex items-center justify-between mb-[10%]">
//                 <span className="text-[1.5rem] text-light-black font-semibold">Edit SOAP Note</span>
//                 <img src="/icons/vectorX.svg" className="cursor-pointer" alt="" onClick={setDrawerVisibility} />
//             </div>

//             <div className="MAIN text-base">
//                 <div className="FIRSTROW flex gap-[5%] items-center mb-[3%]">
//                     <div className="flex w-[100%] md:w-[50%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                         <div className="relative font-medium mb-[5%]">Full Name</div>
//                         <input
//                             className="font-work-sans w-[100%] bg-whites-plain rounded-6xs outline-none box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                             type="text"
//                             defaultValue={`${data.user.first_name} ${data.user.last_name}`}
//                             required
//                             readOnly
//                         />
//                     </div>
//                     <div className="flex w-[100%] md:w-[50%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                         <div className="relative font-medium mb-[5%]">Gender</div>
//                         <input
//                             className="font-work-sans outline-none w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                             type="text"
//                             defaultValue={data.user.gender}
//                             required
//                             readOnly
//                         />
//                     </div>

//                 </div>

//                 <div className="SECONDROW flex gap-[5%] items-center mb-[3%]">
//                     <div className="flex w-[100%] md:w-[50%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                         <div className="relative font-medium mb-[5%]">Date of Birth</div>

//                         <div className="rounded-6xs w-[100%] bg-whites-plain box-border flex flex-row py-[5%] pr-2 pl-[6%] items-center justify-between gap-[10px] text-base text-others-grey2 border-[1px] border-solid border-greys-etherium">
//                             <div className="relative inline-block shrink-0">
//                                 {data.user.date_of_birth ? formatDate(new Date(data.user.date_of_birth)) : "-/-/-"}
//                             </div>
//                             <img
//                                 className="relative overflow-hidden shrink-0"
//                                 alt=""
//                                 src="/icons/icrounddaterange1.svg"
//                             />

//                         </div>
//                     </div>
//                     <div className="flex w-[100%] md:w-[50%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                         <div className="relative font-medium mb-[5%]">Consultation Date & Time</div>
//                         <input
//                             className="font-work-sans outline-none w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                             type="text"
//                             required
//                             defaultValue={`${formatDate(new Date(data.schedule_date))} | ${data.schedule_time}`}
//                             readOnly
//                         />
//                     </div>
//                 </div>

//                 <div className="COMPLAINT flex flex-col w-full h-[15vh] mb-[10%]">
//                     <span className="text-[#14171f] font-medium leading-[1.3rem] mb-[3%]">Complaint</span>
//                     <textarea name="complaint" id="" className="min-h-[7rem] text-base outline-none px-[3%] py-[1%] border rounded-6xs border-greys-etherium"
//                         defaultValue={complaint} 
//                         onChange={(e) => setComplaint(e.target.value)}
//                     >
//                     </textarea>
//                 </div>

//                 <div className="ASSESSMENT flex flex-col w-full h-[15vh] mb-[10%]">
//                     <span className="text-[#14171f] font-medium leading-[1.3rem] mb-[3%]">Assessment</span>
//                     <textarea name="assessment" id="" className="min-h-[7rem] text-base outline-none px-[3%] py-[1%] border rounded-6xs border-greys-etherium"
//                         defaultValue={assessment} onChange={(e) => setAssessment(e.target.value)}>
//                     </textarea>
//                 </div>

//                 <div className="FIFTHROW flex gap-[5%] items-center mb-[3%]">
//                     <div className="flex w-[100%] md:w-[50%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                         <div className="relative font-medium mb-[5%]">Diagnosis</div>
//                         <input
//                             className="outline-none font-work-sans w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                             type="text"
//                             required
//                             defaultValue={diagnosis}
//                             onChange={(e) => setDiagnosis(e.target.value)}
//                         />
//                     </div>
//                     <div className="flex w-[100%] md:w-[50%] mb-[5%] md:mb-0 flex-col items-start justify-start">
//                         <div className="relative font-medium mb-[5%]">Treatment</div>
//                         <input
//                             className="font-work-sans outline-none w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                             type="text"
//                             required
//                             defaultValue={treatment}
//                             onChange={(e) => setTreatment(e.target.value)}
//                         />
//                     </div>

//                 </div>
//             </div>

//             <div className="REST text-base">
//                 <div className="PRESCRIPTION flex flex-col mb-[5%]">
//                     <span className="text-[#114ff5] text-[1.125rem] font-medium mb-[3%]">Prescription</span>
//                     {prescriptionsItems}



//                     <div className="ADDPRESCRIPTION w-fit hover:bg-crimson-100 cursor-pointer" onClick={addPrescription}>
//                         <a className="[text-decoration:none] flex flex-row items-center justify-start gap-[4px] text-primary-red">
//                             <img className="relative w-6 h-6" alt="" src="/icons/add.svg" />
//                             <div className="relative font-semibold">Add Prescription</div>
//                         </a>
//                     </div>
//                 </div>


//                 <div className="flex items-center justify-between mb-[10%]">
//                     <div className="FOLLOWUP flex w-[100%] md:w-[50%] mb-[5%] flex-col items-start justify-start">
//                         <div className="relative font-medium mb-[5%]">Follow Up</div>
//                         <div className="flex items-center justify-between">
//                             <input
//                                 className="font-work-sans outline-none w-[60%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
//                                 type="text"
//                                 required
//                                 defaultValue={followup}
//                                 onChange={(e) => setFollowup(e.target.value)}
//                             />
//                             <div className="flex bg-[#114ff5] rounded p-[5%] items-center justify-center w-[39%] text-[#fff] text-[.8rem] font-semibold leading-[1.2rem]">Days</div>
//                             {/* <select name="duration" id="" className="rounded bg-[#114ff5] text-[#fff] p-[5.5%] text-[.8rem] font-semibold leading-[1.2rem] outline-none border-none w-[39%]">
//                                 <option defaultValue="days">Days</option>
//                                 <option defaultValue="weeks">Weeks</option>
//                                 <option defaultValue="months">Months</option>
//                                 <option defaultValue="years">Years</option>
//                             </select> */}
//                         </div>

//                     </div>

//                     <div className="DOCUMENTS flex flex-col w-[50%] mb-[5%]">
//                         <span className="text-light-black font-semibold text-base mb-[5%]">Linked Documents</span>
//                         <div className="flex items-center justify-between border rounded-lg border-greys-etherium p-[.6rem]">
//                             <div className="flex flex-row items-center justify-between w-[50%]">
//                                 <img
//                                     className="relative w-6 h-6 overflow-hidden shrink-0"
//                                     alt=""
//                                     src="/icons/filetype3.svg"
//                                 />
//                                 <div className="flex flex-col items-start justify-start">
//                                     <span className="font-medium text-[.9rem]">Blood Test.pdf</span>
//                                     <span className="text-[.75rem]">100KB</span>
//                                 </div>
//                             </div>
//                             <div className="flex items-center justify-between w-[20%]">
//                                 <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
//                                     <img
//                                         className="relative w-6 h-6 overflow-hidden shrink-0"
//                                         alt=""
//                                         src="/icons/fluentshare48regular.svg"
//                                     />
//                                 </button>
//                                 <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
//                                     <img
//                                         className="relative w-6 h-6 overflow-hidden shrink-0"
//                                         alt=""
//                                         src="/icons/antdesigndownloadoutlined.svg"
//                                     />
//                                 </button>
//                             </div>

//                         </div>

//                     </div>
//                 </div>

//                 <SaveCancelSmall button1="Cancel" button2="Save" onCancel={setDrawerVisibility} onSubmit={editSoapNote}/>
//             </div>







//         </div>
//     )
// }

// export default EditSOAPNote