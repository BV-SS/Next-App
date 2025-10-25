import { Contact } from "@/types/DataTypes"


const contactDetails: Contact[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "Frontend Developer",
    linkedIn: "",
    github:"",
    avatar: "/images/avatar_1.png",
    bio:"Passionate about frontend development and building delightful user experiences.",
    address:"California, USA"
  },
  {
    id: 2,
    name: "Bharti Verma",
    designation: "Team Lead | Full Stack AI Engineer",
    linkedIn: "https://www.linkedin.com/in/bharti-verma20/",
    github:"https://github.com/BV-SS",
    avatar: "/images/avatar_2.png",
    bio:"Blending AI innovation with full-stack MERN development for smarter web solutions",
    address:"Delhi, India"
  },
  {
    id: 3,
    name: "Alex Wilson",
    designation: "Backend Developer",
    linkedIn: "",
    github:"",
    avatar: "/images/avatar_3.png",
    bio:"Passionate about backend development and building delightful user experiences.",
    address:"Berlin, Germany"
  },

];

export default contactDetails;