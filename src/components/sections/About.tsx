import { personal, strengths, interests } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";
import BentoAbout from "../ui/BentoAbout";

export default function About() {
  const { ref, inView } = useInView() as { 
    ref: React.RefObject<HTMLDivElement>; 
    inView: boolean 
  };

  return (
    <section id="about" style={{ padding: "100px 24px" }}>
      <div ref={ref}>
        <BentoAbout strengths={strengths} interests={interests} />
      </div>
    </section>
  );
}