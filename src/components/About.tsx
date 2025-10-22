import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import satuImage from "@/assets/satu-palosaari.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Sometimes an Organization Needs External Support
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Organizations face challenges when they're not functioning optimally, when key
              individuals leave, or when competitive landscapes change dramatically. The transition
              to a digitally and AI-assisted organization can be particularly challenging.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              An external expert can more easily assess your organization's current state, identify
              untapped resources, and reimagine how those assets can be leveraged for success. Fresh
              perspectives often reveal opportunities that are difficult to see from within.
            </p>

            <Card className="border-2 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why External Consulting?</h3>
                <ul className="space-y-3">
                  {[
                    "Objective assessment of your organization",
                    "Identification of hidden opportunities",
                    "Strategic resource optimization",
                    "Proven change management expertise",
                    "Accelerated digital transformation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up [animation-delay:200ms]">
            <Card className="border-2 shadow-elegant">
              <CardContent className="p-8 lg:p-10 gradient-subtle">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-4">
                    <span className="text-primary-foreground font-bold text-2xl">MCF</span>
                  </div>
                  <h3 className="text-2xl font-bold">Management Consulting Fuoco</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img 
                      src={satuImage} 
                      alt="Satu M. Palosaari" 
                      className="w-32 h-32 rounded-full object-cover shadow-md flex-shrink-0"
                    />
                    <div className="text-left">
                      <p className="text-muted-foreground leading-relaxed">
                        Owner and Founder of Management Consulting Fuoco, Satu M. Palosaari, 
                        is a senior strategist and operational leader with extensive experience in technology-driven organizations, including two decades at Nokia in various leadership roles. She specializes in turning complex strategies into actionable programs, guiding teams through growth and change, and building cross-sector partnerships. Her background includes mentoring senior professionals and serving in interim management roles across industries. Her approach is pragmatic, collaborative, and focused on delivering results that last.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        She also works closely with a trusted network of professionals covering a wide range of expert and C-level roles. Many of them are available for interim assignments - just check with Satu to explore possibilities.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold">Helsinki, Finland</p>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <p className="text-lg font-medium mb-4">Ready to Transform Your Organization?</p>
                    <p className="text-muted-foreground">
                      Let's discuss your challenges over coffee and explore how we can help you
                      achieve your goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
