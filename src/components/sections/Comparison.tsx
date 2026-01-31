import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  {
    feature: "Upfront Cost",
    solo: "₹0",
    agency: "₹5-20L+",
    ecstasy: "₹0",
  },
  {
    feature: "Speed to Launch",
    solo: "12-18 months",
    agency: "6-9 months",
    ecstasy: "6-8 weeks",
  },
  {
    feature: "Expertise Level",
    solo: "Learning curve",
    agency: "Consultants",
    ecstasy: "Co-founders",
  },
  {
    feature: "Long-term Commitment",
    solo: "You alone",
    agency: "Project-based",
    ecstasy: "Equity partnership",
  },
  {
    feature: "Alignment",
    solo: "100%",
    agency: "Misaligned",
    ecstasy: "100% aligned",
  },
  {
    feature: "Success Rate",
    solo: "22%",
    agency: "35%",
    ecstasy: "68%+",
  },
];

const Comparison = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Venture Studio vs. Agencies vs.{" "}
            <span className="text-primary">Going Solo</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            See why partnering with Ecstasy Venture gives you the best shot at success.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-4 text-muted-foreground font-medium">
                  Feature
                </th>
                <th className="p-4 text-center text-muted-foreground font-medium">
                  Going Solo
                </th>
                <th className="p-4 text-center text-muted-foreground font-medium">
                  Agencies
                </th>
                <th className="p-4 text-center">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold">
                    Ecstasy Venture
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={row.feature}
                  className={`border-t border-border ${
                    index % 2 === 0 ? "bg-secondary/20" : ""
                  }`}
                >
                  <td className="p-4 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center text-muted-foreground">
                    {row.solo}
                  </td>
                  <td className="p-4 text-center text-muted-foreground">
                    {row.agency}
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-semibold text-primary">
                      {row.ecstasy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
