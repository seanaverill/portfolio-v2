import { AccordionExperience } from "@/components/experience"
import * as motion from "motion/react-client"
import { AccordionProjects } from "@/components/projectslist";
import { sections } from "@/lib/config";
import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled } from "@tabler/icons-react";
// import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-screen-xl p-6 mx-auto" id="about">


<div className="flex flex-col md:flex-row justify-between">

<div id="Left Column" className="md:w-[30%]">

<section id="Title Block" className="mb-6">
<div className="font-bold text-4xl">Sean Averill</div>
<div className="text-xl">Mechanical Engineer</div>
<div className="flex flex-nowrap gap-2 opacity-60 py-2">
  <motion.div 
  whileHover={{ rotate: 20, scale: 1.1, y: 2 }}
  >
  <Link href="https://www.linkedin.com/in/sean-averill/" className="hover:text-blue-300"><IconBrandLinkedinFilled size={24} /></Link>
  </motion.div>
  <motion.div 
  whileHover={{ rotate: 20, scale: 1.1, y: 2 }}
  >
  <Link href="https://github.com/seanaverill" className="hover:text-blue-300"><IconBrandGithubFilled size={24} /></Link>
  </motion.div>

  <motion.div 
  whileHover={{ rotate: 20, scale: 1.1, y: 2 }}
  >
  <Link href="https://www.instagram.com/sean.averill/" className="hover:text-blue-300"><IconBrandInstagramFilled size={24} /></Link>
  </motion.div>

</div>
</section>

<section className="hidden md:block mt-24 sticky top-6">
  <div className="flex flex-col gap-4 font-bold">
    {sections.map((section) => (
      
      
      <motion.div
      key={section.title} 
      whileHover={{ scale: 1.1, x: 30 }}
      >
        <Link  href={'#'+`${section.title}`}>
        <li className="list-none hover:text-blue-300 hover:cursor-pointer capitalize">{section.title}
        </li>
        </Link>
        </motion.div>
    ))}
  </div>
</section>

</div>

<div id="Right Column" className="md:w-[70%]">
  <section>
    <div className="flex flex-col gap-8">
      <div>Mechanical Engineer and Product Development Leader blending technical expertise with business acumen. I manage strategic projects, mentor engineering teams, and drive innovation across mechanical systems and software solutions. My experience spans custom engineering design, data automation, and algorithm development—consistently delivering results that balance innovation with reliability. I thrive at the intersection of technical problem-solving and strategic leadership.
      <br />
      <br />
      When I am not designing and developing new products in the mechanical space, I turn to the digital world to create and develop software solutions. I have experience in full-stack development, data analysis and application design. I am always looking for new opportunities to learn and grow in the digital space.
      </div>

    <div id="experience">
      <div className="font-bold text-2xl">Experience</div>
      <AccordionExperience />
    </div>

    <div id="projects">
      <div className="font-bold text-2xl mb-4">Projects</div>
      <AccordionProjects />
    </div> 

   </div>
  </section>
</div>


</div>



    </div>
  );
}
