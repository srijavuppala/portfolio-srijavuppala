import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary to-background">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
        <div className="space-y-4">
          <Button 
            variant="default"
            size="lg"
            onClick={() => navigate('/')}
            className="w-full max-w-xs"
          >
            Return to Home
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => navigate(-1)}
            className="w-full max-w-xs"
          >
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
