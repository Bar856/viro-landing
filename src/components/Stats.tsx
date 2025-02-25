import { stats } from "@/data/stats";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-10 lg:py-20">
      <h1 className="text-5xl font-bold mb-10 text-primary text-center">
        מטרת הכנס
      </h1>
      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center sm:text-right max-w-md sm:max-w-full mx-auto">
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
              {stat.icon}
              {stat.title}
            </h3>
            <p className="text-foreground-accent text-center md:text-right">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
