
import React from "react";
import { Button } from "@/components/ui/button";

const SkinsFooter: React.FC = () => {
  return (
    <div className="mt-8 text-center">
      <Button className="bg-cs-purple hover:bg-cs-purple/90 px-8 button-glow">
        Смотреть все скины
      </Button>
    </div>
  );
};

export default SkinsFooter;
