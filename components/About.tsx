"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, Shield } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Nos comprometemos con los mas altos estandares de calidad en cada tratamiento.",
  },
  {
    icon: Users,
    title: "Atencion Personalizada",
    description: "Cada paciente recibe un plan de tratamiento unico adaptado a sus necesidades.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Tu bienestar bucal es nuestra prioridad. Tratamos a cada paciente como familia.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protocolos de bioseguridad y esterilizacion de ultima generacion.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                alt="Equipo de odontologos profesionales"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary-500 p-6 text-white shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm font-medium text-primary-100">
                Anos de experiencia
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
              Sobre Nosotros
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Tu salud bucal en manos expertas
            </h2>
            <p className="mb-6 text-lg text-gray-600 leading-relaxed">
              En OdontClinic llevamos mas de 15 anos transformando sonrisas.
              Nuestro equipo de especialistas altamente capacitados combina la
              experiencia clinica con la tecnologia mas avanzada para ofrecer
              tratamientos efectivos y comodos.
            </p>
            <p className="mb-8 text-gray-600 leading-relaxed">
              Nuestra mision es proporcionar atencion dental de excelencia en un
              ambiente calido y acogedor, garantizando la satisfaccion y
              bienestar de cada uno de nuestros pacientes.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
