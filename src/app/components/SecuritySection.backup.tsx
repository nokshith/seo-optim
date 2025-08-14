 "use client";
 
 import Image from "next/image";
 
 export default function SecuritySection() {
   const points = [
     "AES-256 Encryption + TLS 1.3",
     "Field-level data masking",
     "Full audit logs with rollback and replay options",
     "ISO 27001, SOC 2, and GDPR-aligned",
     "ERP outage fallback + retry queues",
   ];
 
   return (
     <section className="w-full flex justify-center px-4 py-20 bg-white">
       <div className="w-[1200px] flex flex-row justify-between items-start gap-[50px]">
         {/* Left Image */}
         <div className="w-[490px] h-[446px] overflow-hidden">
           <Image
             src="/images/security.png"
             alt="Security Shield"
             width={490}
             height={446}
             className="object-cover w-full h-full"
           />
         </div>
 
         {/* Right Content */}
         <div className="flex flex-col gap-6 w-[592px]">
           {/* Heading */}
           <h2 className="text-[#05284C] font-segoe text-[32px] font-semibold leading-[100%]">
             Enterprise-Grade Security. Finance Grade Trust.
           </h2>
 
           {/* Subheading */}
           <p className="text-[#FE7A3E] font-segoe text-[28px] font-semibold leading-[100%]">
             Ipsum is simply dummy text of the printing and typesetting industry.
           </p>
 
           {/* Bullet Points */}
           <ul className="flex flex-col gap-4 text-[16px] font-semibold font-segoe text-[#4F4F4F] leading-[300%] text-justify w-[511px]">
             {points.map((point, idx) => (
               <li key={idx} className="flex items-center gap-3">
                 {/* Updated Figma-based Tick Icon */}
                 <div className="w-[21px] h-[21px] flex items-center justify-center">
                   <svg
                     width="14.43"
                     height="10.5"
                     viewBox="0 0 14.43 10.5"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M1 5.25L5.5 9.5L13.43 1"
                       stroke="#FE7A3E"
                       strokeWidth="2.8"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     />
                   </svg>
                 </div>
                 <span>{point}</span>
               </li>
             ))}
           </ul>
         </div>
       </div>
     </section>
   );
 }
 