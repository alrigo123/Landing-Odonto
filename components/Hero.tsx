"use client";

import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
          alt="Consultorio dental moderno"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary-500/20 px-4 py-1.5 text-sm font-medium text-primary-300">
              Tu sonrisa, nuestra prioridad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Sonrisas saludables,{" "}
            <span className="text-primary-400">vidas felices</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-lg text-lg text-gray-300"
          >
            Ofrecemos tratamientos dentales de la mas alta calidad con
            tecnologia de vanguardia y un equipo de profesionales dedicados a tu
            bienestar bucal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-600 hover:shadow-primary-500/40"
            >
              <CalendarCheck className="h-5 w-5" />
              Reserva tu cita
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              (123) 456-7890
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex gap-8"
          >
            {[
              { number: "15+", label: "Anos de experiencia" },
              { number: "10k+", label: "Pacientes felices" },
              { number: "25+", label: "Especialistas" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary-400 sm:text-3xl">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
