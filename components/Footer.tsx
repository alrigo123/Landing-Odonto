import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#galeria", label: "Galeria" },
  { href: "#reservar", label: "Reservar Cita" },
  { href: "#contacto", label: "Contacto" },
];

const serviceLinks = [
  "Limpieza Dental",
  "Blanqueamiento",
  "Ortodoncia",
  "Implantes",
  "Endodoncia",
  "Odontologia Estetica",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-white font-bold text-lg">
                O
              </div>
              <span className="text-xl font-bold text-white">
                Odont<span className="text-primary-400">Clinic</span>
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Mas de 15 anos cuidando tu sonrisa. Tecnologia avanzada y un
              equipo de profesionales dedicados a tu salud bucal.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-400" />
                (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-400" />
                info@odontclinic.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                Av. Principal 1234
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Enlaces rapidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-sm transition-colors hover:text-primary-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Horarios
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="text-white">8:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabado</span>
                <span className="text-white">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span className="text-white">Cerrado</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                Legal
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-primary-400">
                    Politica de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary-400">
                    Terminos y condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary-400">
                    Aviso legal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} OdontClinic. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
