"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Sun,
  AlignVerticalSpaceAround,
  Puzzle,
  Activity,
  Smile,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Dental",
    description:
      "Eliminamos placa y sarro con tecnologia ultrasonica para mantener tus dientes sanos y brillantes.",
  },
  {
    icon: Sun,
    title: "Blanqueamiento",
    description:
      "Devuelve la blancura natural a tus dientes con nuestro tratamiento profesional de blanqueamiento LED.",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Ortodoncia",
    description:
      "Brackets metalicos, ceramicos e invisalign para alinear tu sonrisa de forma comoda y efectiva.",
  },
  {
    icon: Puzzle,
    title: "Implantes",
    description:
      "Reemplaza dientes perdidos con implantes de titanio de ultima generacion, seguros y duraderos.",
  },
  {
    icon: Activity,
    title: "Endodoncia",
    description:
      "Tratamientos de conducto indoloros con tecnologia avanzada para salvar tus dientes naturales.",
  },
  {
    icon: Smile,
    title: "Odontologia Estetica",
    description:
      "Carillas, coronas y diseno de sonrisa para lograr la apariencia dental que siempre sonaste.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="servicios" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Nuestros Servicios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Cuidado dental integral
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Contamos con un amplio rango de servicios odontologicos para toda la
            familia, con la mejor tecnologia y profesionales certificados.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary-100"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
