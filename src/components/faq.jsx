import Accordion from "./Accordion";
import Arrow from "../assets/arrow.svg";

export default function FAQs() {
    return (
        <div className="flex justify-center">
            <div className="bg-[#E8EEE7] p-10 rounded-3xl w-11/12 mt-20 flex">
                <div className="w-1/2 mt-20">
                    <h2 className=" ml-24 font-grace font-normal text-4xl text-[#9E9D9D] gap-5">
                        What&apos;s on your mind
                    </h2>
                    <h2 className="ml-24 font-semibold text-6xl mt-2 font-manrope">
                        Ask Questions
                    </h2>
                    <img className="mt-24" src={Arrow} alt="" />
                </div>
                <div className="w-1/2 space-y-4 mt-32 ">
                    <Accordion
                        question="Do you offer freelancers?"
                        answer="
                        Yes, we do offer freelancers. Our platform connects you with skilled freelancers for various projects, providing flexibility and expertise tailored to your needs."
                    />
                    <Accordion
                        question="What’s the guarantee that I will be satisfied with the hired talent?"
                        answer="Our satisfaction guarantee ensures that you'll be pleased with the talent you hire. We meticulously vet our professionals to match your needs, ensuring high-quality results and your utmost satisfaction."
                    />
                    <Accordion
                        question="Can I hire multiple talents at once?"
                        answer="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
                    />
                    <Accordion
                        question="Why should I not go to an agency directly?"
                        answer="Directly engaging with an agency may limit your options and increase costs. By choosing us, you gain access to a diverse pool of talent, personalized service, and cost-effective solutions tailored to your specific needs."
                    />
                    <Accordion
                        question="Who can help me pick a right skillset and duration for me?"
                        answer="Our team of experts is dedicated to assisting you in selecting the ideal skillset and duration based on your project requirements and goals. With their extensive knowledge and experience, they ensure that you receive tailored guidance for optimal results."
                    />
                </div>
            </div>
        </div>
    );
}
