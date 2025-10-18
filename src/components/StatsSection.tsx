const stats = [
  { value: "200+", label: "AI Services" },
  { value: "3M+", label: "Insights" },
  { value: "98%", label: "Accuracy" },
  { value: "24/7", label: "Support" },
  { value: "AES-256", label: "Encryption" },
  { value: "Zero-Trust", label: "Architecture" },
  { value: "HIPAA", label: "Compliant" },
  { value: "SOC 2", label: "Certified" },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;