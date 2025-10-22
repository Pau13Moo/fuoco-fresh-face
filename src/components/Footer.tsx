import logoImage from "@/assets/logo-burgundy-hexagon.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="MCF Logo" 
              className="w-10 h-10"
            />
            <span className="font-semibold">Management Consulting Fuoco</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} Management Consulting Fuoco. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
