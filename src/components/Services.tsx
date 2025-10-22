import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  TrendingUp,
  Users,
  RefreshCw,
  GraduationCap,
  Briefcase,
  Code,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Leadership Help Desk",
    description: "On-demand support for business leaders facing complex challenges and decisions",
  },
  {
    icon: TrendingUp,
    title: "Market Analyses",
    description: "Comprehensive market research and competitive landscape assessments",
  },
  {
    icon: Users,
    title: "Mentoring",
    description: "One-on-one guidance for business leaders to enhance their strategic thinking",
  },
  {
    icon: RefreshCw,
    title: "Change Projects",
    description: "Structured transformation programs for teams and departments",
  },
  {
    icon: GraduationCap,
    title: "Leadership Development",
    description: "Workshops and coaching programs to build leadership capabilities",
  },
  {
    icon: Briefcase,
    title: "Interim Leadership",
    description: "Targeted executive support including CEO, COO, Chief of Staff, and strategic projects",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive consulting solutions tailored to your organization's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-smooth hover:-translate-y-1 border-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 lg:p-8 rounded-2xl bg-card border-2 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fuoco's network includes experienced business professionals with varying roles and
                  strengths. Looking for a new or replacement contributor? Check with us first to see
                  current availability in our network.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl bg-card border-2 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Software Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In partnership with a European software development company, Kibit Solutions, Fuoco offers software services from audits to integrated tech solutions, digital transformation and custom software builds.{" "}
                  <a 
                    href="https://www.kibitsolutions.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 underline transition-smooth"
                  >
                    www.kibitsolutions.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
