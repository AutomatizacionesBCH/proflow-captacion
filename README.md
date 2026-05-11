# proflow-captacion

Landing pages públicas de captación de leads para ProFlow OS.

## Descripción

Sistema de landing pages multi-variante para capturar leads desde campañas de redes sociales (Meta, TikTok, etc.). Soporta múltiples cuentas y variantes de copy vía parámetros UTM y dominios propios.

## Variantes disponibles

| Variante    | Descripción                        |
|-------------|------------------------------------|
| `educativa` | Tono informativo, explica el cupo  |
| `ejecutiva` | Tono profesional, enfoque en valor |
| `historia`  | Storytelling, caso de éxito        |
| `avatar`    | Dirigida a perfil específico       |
| `directa`   | CTA directo, sin rodeos (default)  |

Selecciona variante con `?v=<variante>` o configura por dominio en `proxy.ts`.

## Variables de entorno

Copia `.env.local.example` a `.env.local` y completa:

```bash
PROFLOW_API_URL=https://<url-proflow-os-en-easypanel>
LANDING_API_SECRET=<mismo-secreto-que-en-proflow-os>
NEXT_PUBLIC_WHATSAPP_NUMBER=56966810468
NEXT_PUBLIC_DEFAULT_VARIANT=directa
```

## Desarrollo

```bash
npm install
npm run dev
```

## Deploy

Usar EasyPanel apuntando al repo `AutomatizacionesBCH/proflow-captacion`.
