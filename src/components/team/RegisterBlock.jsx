
import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import { BranchSelect } from './BranchSelect';

import '../styles/transition.css';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,

} from "../ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

const RegisterBlock = ({ member, saveMemberDetails, index }) => {
    const options = [{ label: "Main Campus", options: [{ label: "CSE", value: "CSE" }, { label: "CSDS", value: "CSDS" }, { label: "CSAI", value: "CSAI" }, { label: "IT", value: "IT" }, { label: "ITNS", value: "ITNS" }, { label: "MAC", value: "MAC" }, { label: "ECE", value: "ECE" }, { label: "EIOT", value: "EIOT" }, { label: "EE", value: "EE" }, { label: "ICE", value: "ICE" }, { label: "ME", value: "ME" }, { label: "BT", value: "BT" }, { label: "B.Design", value: "B.Design" }, { label: "B.FTech", value: "B.FTech" },] }, { label: "East Campus", options: [{ label: "CSDA", value: "CSDA" }, { label: "CIOT", value: "CIOT" }, { label: "ECAM", value: "ECAM" },] }, { label: "West Campus", options: [{ label: "MEEV", value: "MEEV" }, { label: "CE", value: "CE" }, { label: "GI", value: "GI" }, { label: "B.Arch", value: "B.Arch" },] },];
    const [isOpen, setIsOpen] = useState(false);
    const [isLeader, setIsLeader] = useState(false);
    const [name, setName] = useState(member.name || '');
    const [email, setEmail] = useState(member.email || '');
    const [phone, setPhone] = useState(member.phone || '');
    const [branch, setBranch] = useState(member.branch || undefined);
    const [rollno, setRollno] = useState(member.rollno || '');

    useEffect(() => {
        saveMemberDetails({
            name,
            email,
            phone,
            branch,
            rollno
        });
    }, [name, email, phone, branch, rollno]);

    return (
        

        <div className="flex flex-col my-5  rounded-md p-5 border  space-x-4 " >

            <div className='flex w-full'>
                <button
                    className={`rounded-full flex-none text-3xl  h-11 w-11 md:h-12 md:w-12 bg-black  dark:bg-white  transition-transform transform ${isOpen ? 'rotate-45' : ''
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-white dark:text-black text-3xl   ">+</span>
                </button>
                <div className="flex w-full font-mont items-center  ">
                    <input
                        type="text"
                        placeholder={`TEAM MEMBER ${index}`}
                        onClick={() => setIsOpen(true)}
                        value={name}
                        required
                        maxLength="30" 
                        onChange={e => setName(e.target.value.toUpperCase())}
                        className=" outline-none font-mont w-full bg-transparent  ml-2 md:ml-6 p-1 font-bold text-lg md:text-xl "
                    />
                    {/* <button
                        className={`w-36     rounded-lg  h-10 ${isLeader ? 'bg-black text-white dark:bg-white  dark:text-black' : ' dark:border-white border border-black'} flex items-center justify-center`}
                        onClick={() => setIsLeader(!isLeader)}
                    >
                        <span className="">LEADER</span>
                    </button> */}
                </div>
            </div>

            <CSSTransition in={isOpen} timeout={300} classNames="expand" unmountOnExit>


                {(
                    <div className='flex '>
                        <div className="w-full  space-y-2 md:mt-2 md:space-y-4 ">
                            <input
                                required
                                type="email"
                                maxLength="40" 
                                placeholder="EMAIL"
                                className="outline-none font-mont bg-transparent p-1 mt-2 ml-9 md:ml-14 font-bold text-lg md:text-xl w-full"
                                value={email}
                                onChange={e => setEmail(e.target.value.toUpperCase())} // Convert to uppercase
                            />

                            <input
                                type="tel"
                                maxLength="12" 
                                placeholder="PHONE NO"
                                className="outline-none bg-transparent p-1 ml-9 md:ml-14 font-bold w-full text-lg md:text-xl"
                                value={phone}
                                onChange={e => setPhone(e.target.value.replace(/\D/g, ''))} // Remove non-numeric characters
                                required
                            />


                            <Select  onValueChange={setBranch} value={branch}   >
                            <SelectTrigger className="w-[180px] ml-9 md:ml-14">
                            <h1 className="font-bold  text-lg  dark:text-slate-100 text-black md:text-xl">
                            <SelectValue placeholder={<h1 className=" text-slate-400 ">{'BRANCH'}</h1>} /> </h1>
                            </SelectTrigger>
                            <SelectContent >
                            <ScrollArea className="h-56 md:h-72 ">
                            {options.map((group) => (
                                <React.Fragment key={group.label}>
                                <SelectGroup>
                                    <SelectLabel>{group.label}</SelectLabel>
                                    {group.options.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                    ))}
                                </SelectGroup>
                                </React.Fragment>
                            ))}
                             </ScrollArea>
                            </SelectContent>
                        </Select>

                            {/* <BranchSelect /> */}
                            <input
                                type="text"
                                placeholder="ROLL NO"
                                value={rollno}
                                required
                                maxLength="15" 
                                onChange={e => setRollno(e.target.value.toUpperCase())}
                                className="outline-none bg-transparent p-1 ml-9 md:ml-14  font-bold w-full  text-lg md:text-xl"

                            />
                        </div>
                    </div>
                )}

            </CSSTransition>

        </div> 
        
       

    )
}
export default RegisterBlock