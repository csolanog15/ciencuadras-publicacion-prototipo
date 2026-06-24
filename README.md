# Ciencuadras - Prototipo Publicacion de Inmuebles

Prototipo interactivo de alta fidelidad para el flujo de publicacion de inmuebles en Ciencuadras.

## Demo en vivo

[Ver prototipo](https://csolanog15.github.io/ciencuadras-publicacion-prototipo/)

## Estructura

```
docs/
  index.html          - Prototipo interactivo (GitHub Pages)
  styles.css          - CSS con variables Ciencuadras
src/
  app/
    publicacion/      - Componente Angular standalone v17+
    shared/
      models/         - Interfaces TypeScript (DTO backend)
      services/       - Servicio HTTP publicaciones-ms
```

## Endpoints backend

| Metodo | Endpoint | Descripcion |
|--------|----------|-------------|
| POST | /api/v1/properties | Crear propiedad |
| POST | /api/v1/properties/:id/media | Subir fotos |
| POST | /api/v1/properties/:id/publish | Publicar |
| POST | /api/v1/properties/ai/description | Descripcion IA |

## Paleta

| Variable | Valor | Uso |
|----------|-------|-----|
| --cc-primary | #3e98cc | CTA, links, progress |
| --cc-dark | #1a5276 | Logo, textos |
| --cc-title | #1a7ab5 | Titulos |
| --cc-coral | #ff6b35 | Boton Publicar header |
| --cc-success | #28a745 | Boton publicar final |
