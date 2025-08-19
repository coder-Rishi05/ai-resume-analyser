import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume App" },
    { name: "description", content: "Smart Feedback for you dream Job." },
  ];
}

export default function Home() {
  return (
    <main className=" bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />



      <section className="main-section ">
        <div className="page-heading">
          <h1>Track You applications & resume Rating</h1>
          <h2>Review your submission and check AI-powered Feedback.</h2>
        </div>
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
