import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume App" },
    { name: "description", content: "Smart Feedback for you dream Job." },
  ];
}

export default function Home() {
  return (
    <main className=" bg-[url('/images/bg-main.svg')] bg-cover  ">
      <Navbar />

      <section className="main-section ">
        <div className="page-heading py-16 ">
          <h1>Track You applications & resume Rating</h1>
          <h2>Review your submission and check AI-powered Feedback.</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section   ">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>

      {/* {[
        {
          title:"Resume",
          thumbnail:"..."
        },
      ]} */}
    </main>
  );
}
