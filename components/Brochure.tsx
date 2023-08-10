import React from 'react';
import { Button } from "@/components/ui/button"

interface BrochureProps {
  link: string;
}

const Brochure: React.FC<BrochureProps> = ({ link }) => {

  const openBrochure = () => {
    window.open(link, '_blank');
  }

  return (
    <div className="mt-4 flex">
      <Button
        type="button"
        onClick={openBrochure}
        className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
      >
        Download Brochure
      </Button>
    </div>
  );
};

export default Brochure;