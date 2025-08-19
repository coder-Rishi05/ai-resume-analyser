import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume App" },
    { name: "description", content: "Smart Feedback for you dream Job." },
  ];
}

export default function Home() {
  return <main>

  </main>
  
  ;
}
