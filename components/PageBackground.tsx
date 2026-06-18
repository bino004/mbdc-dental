import DentalParticles from "./DentalParticles";

export default function PageBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen bg-[#06111f]">
      {/* particles */}
      <div className="absolute inset-0">
        <DentalParticles />
      </div>

      {/* content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
