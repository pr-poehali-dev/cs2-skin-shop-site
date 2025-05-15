
import React from "react";
import { Badge } from "@/components/ui/badge";

interface DiscountBadgeProps {
  discount: number;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ discount }) => {
  return (
    <Badge className="absolute top-3 right-3 z-10 bg-red-500 text-white">
      -{discount}%
    </Badge>
  );
};

export default DiscountBadge;
