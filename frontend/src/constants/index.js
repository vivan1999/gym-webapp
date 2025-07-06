import student_pass from '../assets/student_pass.png';
import months1gym from '../assets/1_month_gym.jpg'
import months3gym from '../assets/3_months_gym.jpg'
import months6gym from '../assets/6_months_gym.jpg'
import months12gym from '../assets/12_months_gym.jpg'

export const navLinks = [
    {name:"Join Now", href:"/buy-membership"},
    {name:"About Us", href:"/about"},
    {name:"Contact Us", href:"/contact"},
    {name:"Opening Hours", href:"/timings"},
    {name:"Personal Training", href:"/training"},,
    {name:"Membership Options", href:"/memberships"}
]

export const memberships=[
    {index:0,title:"Student", subTitle: "Avail Student Offers & Get extra 10% OFF on any membership.", image:student_pass},
    {index:1,title:"1 Month", subTitle:"Avail 1 Month membership offer at just 2000 Rs.", image: months1gym},
    {index:2,title:"3 Months", subTitle: "Avail 3 months membership offer at just 5000 Rs.", image: months3gym},
    {index:3,title:"6 Months", subTitle: "Avail 6 months membership offer at just 8000 Rs.", image:months6gym},
    {index:4,title:"1 Year", subTitle: "Avail 1 Year membership offer at just 14000 Rs.", image:months12gym}
]