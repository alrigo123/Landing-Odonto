# Landing Odonto

Landing page para clínica dental. Next.js 14 · Tailwind · desplegada en Vercel (`landing-odonto`) desde `main`.

## Mantenimiento de seguridad

| Fecha | Cambio | Motivo |
|---|---|---|
| 2026-10-23 | `images.unoptimized: true` en `next.config.js` | CVE-2026-96889: ejecución remota de código sin autenticación en el optimizador de imágenes (`/_next/image`). Afecta Next.js 10.0.0–15.5.27 y **no hay parche para la línea 14**. Apagar el optimizador quita esa superficie: las imágenes (incluidas las de Unsplash) se sirven sin optimizar. |

Pendiente: migrar a Next.js ≥ 15.5.28 (con `sharp` ≥ 0.35.5) y quitar `unoptimized`. Es una
migración mayor: Next 15 en App Router pide React 19 y vuelve asíncronas `cookies()`, `headers()`
y `params`, que usan el panel admin, `middleware.ts` y las rutas de `app/api`. Hacerla cuando el
panel admin esté commiteado.
