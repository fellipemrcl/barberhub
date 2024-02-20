import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0 relative">
        <div className="absolute top-2 left-2 z-50">
          <Badge variant="secondary" className="flex gap-1 opacity-90 items-center top-3 left-3">
            <StarIcon size={12} className="fill-primary text-primary" />
            <span className="text-xs">5,0</span>
          </Badge>
        </div>
        <div className="relative h-[159px] w-full">
          <Image
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 truncate">{barbershop.name}</h2>
          <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
          <Button variant="secondary" className="w-full mt-3">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
