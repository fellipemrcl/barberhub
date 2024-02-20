import { ptBR } from "date-fns/locale";
import Header from "../_components/header";

import { format } from "date-fns";
import BookingItem from "../_components/bookingItem";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershopItem";
import Search from "./_components/search";

export default async function Home() {
  const barbershops = await db.barbershop.findMany();

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Fellipe!</h2>
        <p className="text-sm capitalize">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      <div className="mt-6 px-5">
        <Search />
      </div>

      <div className="mt-6 px-5">
        <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="mb-3 text-xs font-bold uppercase text-gray-400 px-5">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
