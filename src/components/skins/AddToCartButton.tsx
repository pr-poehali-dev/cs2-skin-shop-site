
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const AddToCartButton: React.FC = () => {
  return (
    <Button size="sm" className="bg-cs-purple hover:bg-cs-purple/90">
      <ShoppingCart className="h-4 w-4" />
    </Button>
  );
};

export default AddToCartButton;
