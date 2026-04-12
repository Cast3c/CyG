import React from "react";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { testimonials } from "@/data/Index";

const Testimonials = () => {
  return (
    <section className="pb-12" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-end text-2xl font-light text-neutral-600 leading-[0.9]">
          {testimonials.title}
        </h1>

        <div className="relative overflow-hidden mt-10">
          {/* Fade izquierda */}
          <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-white to-transparent z-10" />

          {/* Fade derecha */}
          <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-white to-transparent z-10" />

          <div className="flex gap-5 animate-scroll py-4">
            {[...testimonials.items, ...testimonials.items].map((item, key) => (
              <div
                key={`${item.name}-${key}`}
                className="p-px bg-linear-to-b from-neutral-300 to-transparent rounded-2xl"
              >
                <Card className="flex flex-row items-center justify-between gap-4 py-4 px-6 min-w-80 h-full">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover shadow-xl"
                  />
                  <div className=" flex flex-col gap-1 items-center justify-start">
                    <p className="font-bold text-start text-sm">{item.name}</p>
                    <p className="text-sm text-muted-foreground text-center">
                      {item.role}
                    </p>

                    <p className=" italic text-start text-sm">
                      {`"${item.quote}"`}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
