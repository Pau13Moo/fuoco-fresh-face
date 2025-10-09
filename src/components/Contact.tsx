import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Time for Coffee?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Let's talk about how we can help your organization thrive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:office@managementconsultingfuoco.fi"
                className="text-muted-foreground hover:text-accent transition-smooth break-all"
              >
                office@managementconsultingfuoco.fi
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+358503391429"
                className="text-muted-foreground hover:text-accent transition-smooth"
              >
                +358 50 3391429
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-elegant transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Helsinki, Finland</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block border-2 shadow-elegant">
            <CardContent className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Book a discovery call today and let's explore how we can support your organization's
                growth and transformation.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md text-lg h-14 px-8"
                onClick={() => window.location.href = "mailto:office@managementconsultingfuoco.fi"}
              >
                Book a Discovery Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
