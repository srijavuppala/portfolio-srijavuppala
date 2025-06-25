import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Button 
        onClick={() => navigate('/')}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      {/* Add your projects content here */}
    </div>
  );
};

export default ProjectsPage;