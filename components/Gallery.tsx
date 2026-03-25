"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
    alt: "Consultorio dental moderno",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
    alt: "Equipos de ultima tecnologia",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80",
    alt: "Equipo de profesionales",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80",
    alt: "Sala de espera confortable",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
    alt: "Tratamiento dental profesional",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    alt: "Sonrisa perfecta resultado",
    span: "col-span-2",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Galeria
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestras instalaciones
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Conoce nuestro consultorio equipado con la tecnologia mas avanzada
            para brindarte la mejor experiencia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              variants={imageVariants}
              className={`group relative overflow-hidden rounded-2xl ${image.span}`}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
