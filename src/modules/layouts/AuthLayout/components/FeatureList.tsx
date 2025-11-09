const features = [
  "Comprehensive financial dashboard",
  "Smart transaction tracking",
  "Goal setting and progress tracking",
];

export function FeatureList() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
  );
}
