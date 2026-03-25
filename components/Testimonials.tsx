"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Maria Garcia",
    role: "Paciente desde 2019",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "Excelente atencion desde la primera consulta. El Dr. Martinez me explico cada paso del tratamiento de blanqueamiento. El resultado supero mis expectativas. Recomiendo OdontClinic al 100%.",
  },
  {
    name: "Carlos Rodriguez",
    role: "Paciente desde 2020",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "Tenia mucho miedo al dentista, pero el equipo de OdontClinic me hizo sentir muy comodo. Mi tratamiento de ortodoncia fue excelente y ahora tengo la sonrisa que siempre quise.",
  },
  {
    name: "Ana Lopez",
    role: "Paciente desde 2021",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Los implantes dentales que me colocaron son increibles, se ven completamente naturales. El proceso fue mucho mas sencillo de lo que esperaba. Profesionales de primera.",
  },
  {
    name: "Roberto Fernandez",
    role: "Paciente desde 2018",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "Llevo toda mi familia a OdontClinic. Desde mis hijos hasta mis padres, todos reciben una atencion personalizada y de calidad. Las instalaciones son modernas y siempre limpias.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonios" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Testimonios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            La satisfaccion de nuestros pacientes es nuestro mayor logro.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white p-8 shadow-sm sm:p-12"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  )
                )}
              </div>
              <blockquote className="mb-8 text-lg text-gray-700 leading-relaxed sm:text-xl">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-primary-500 hover:text-primary-500"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary-500"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-primary-500 hover:text-primary-500"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
