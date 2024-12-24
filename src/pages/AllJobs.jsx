// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
// export default function Alljobs() {
//   return (
//     <div>
//       {" "}
//       <header>
//         <SignedOut>
//           <SignInButton />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </header>
//     </div>
//   );
// }
// --------------------------------------
// import { Link } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Briefcase, Building2, MapPin, Search } from "lucide-react";

// export default function AllJobs() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold text-primary">
//             Jobrex Jobs
//           </Link>
//           <nav>
//             <ul className="flex space-x-4">
//               <li>
//                 <Link to="#" className="text-gray-600 hover:text-primary">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#" className="text-gray-600 hover:text-primary">
//                   Jobs
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#" className="text-gray-600 hover:text-primary">
//                   Companies
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#" className="text-gray-600 hover:text-primary">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#" className="text-gray-600 hover:text-primary">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       <main className="flex-grow">
//         <HeroSection />
//         <AboutSection />
//         <ListingSection />
//         <ContactSection />
//       </main>

//       <footer className="bg-gray-100 py-6">
//         <div className="container mx-auto px-4 text-center text-gray-600">
//           © 2023 Jobrex Jobs. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// function HeroSection() {
//   return (
//     <section className="bg-primary text-primary-foreground py-20">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Find Your Dream Job Today
//         </h1>
//         <p className="text-xl mb-8">
//           Discover thousands of job opportunities with top employers
//         </p>
//         <div className="max-w-3xl mx-auto flex">
//           <Input
//             type="text"
//             placeholder="Job title, keywords, or company"
//             className="flex-grow mr-2"
//           />
//           <Button type="submit">
//             <Search className="mr-2 h-4 w-4" /> Search
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function AboutSection() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Why Choose Jobrex Jobs?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="text-center">
//             <Briefcase className="mx-auto h-12 w-12 text-primary mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Vast Job Database</h3>
//             <p className="text-gray-600">
//               Access thousands of job listings from top companies across various
//               industries.
//             </p>
//           </div>
//           <div className="text-center">
//             <Building2 className="mx-auto h-12 w-12 text-primary mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Top Employers</h3>
//             <p className="text-gray-600">
//               Connect with leading companies looking for talented professionals
//               like you.
//             </p>
//           </div>
//           <div className="text-center">
//             <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Location Flexibility</h3>
//             <p className="text-gray-600">
//               Find jobs that match your preferred location, including remote
//               opportunities.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ListingSection() {
//   const jobs = [
//     {
//       title: "Software Engineer",
//       company: "TechCorp",
//       location: "San Francisco, CA",
//       type: "Full-time",
//     },
//     {
//       title: "Marketing Manager",
//       company: "BrandBoost",
//       location: "New York, NY",
//       type: "Full-time",
//     },
//     {
//       title: "UX Designer",
//       company: "DesignHub",
//       location: "Remote",
//       type: "Contract",
//     },
//     {
//       title: "Data Analyst",
//       company: "DataDrive",
//       location: "Chicago, IL",
//       type: "Full-time",
//     },
//     {
//       title: "Sales Representative",
//       company: "SalesPro",
//       location: "Miami, FL",
//       type: "Part-time",
//     },
//     {
//       title: "Customer Support Specialist",
//       company: "HelpDesk",
//       location: "Remote",
//       type: "Full-time",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Featured Job Listings
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobs.map((job, index) => (
//             <Card key={index}>
//               <CardHeader>
//                 <CardTitle>{job.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600">{job.company}</p>
//                 <p className="text-gray-600">{job.location}</p>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <span className="text-sm text-primary">{job.type}</span>
//                 <Button variant="outline">Apply Now</Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//         <div className="text-center mt-12">
//           <Button variant="outline" size="lg">
//             View All Jobs
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ContactSection() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
//         <div className="max-w-2xl mx-auto">
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input type="text" placeholder="First Name" required />
//               <Input type="text" placeholder="Last Name" required />
//             </div>
//             <Input type="email" placeholder="Email Address" required />
//             <Input type="text" placeholder="Subject" required />
//             <textarea
//               className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
//               rows={4}
//               placeholder="Your Message"
//               required
//             ></textarea>
//             <Button type="submit" className="w-full">
//               Send Message
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
// ---------------------------------------------
export default function Alljobs() {
  return <div>Alljobs</div>;
}
