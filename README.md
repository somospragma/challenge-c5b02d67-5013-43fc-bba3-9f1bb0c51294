# Rediseño del estado del carrito de compras

El sistema de e-commerce gestiona carritos de compras para usuarios. Cada carrito tiene productos con nombre, precio, cantidad y estado. Los usuarios pueden añadir, eliminar y modificar productos. El sistema debe mantener la consistencia del carrito ante operaciones concurrentes y fallos temporales. El carrito debe ser accesible desde múltiples dispositivos y sincronizado con el servidor. Los productos en el carrito deben estar disponibles en inventario. El sistema notifica al usuario si un producto se agota mientras está en el carrito.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Manejo de estado en aplicaciones complejas |
| **Nivel** | senior-l2 |
| **Tipo** | mixed |
| **Tiempo estimado** | 1 semana |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis del estado actual del carrito

**Objetivo:** Identificar las deficiencias en el manejo del estado del carrito de compras.

**Tiempo estimado:** 2 días

**Instrucciones:**

- Revisar el código existente del carrito de compras.
- Identificar problemas de consistencia, latencia y disponibilidad.
- Documentar hallazgos y proponer mejoras.

**Entregable:** Reporte de análisis con hallazgos y propuestas de mejora.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la latencia entre dispositivos y el servidor.
- Evalúa la consistencia del estado del carrito ante operaciones concurrentes.

</details>

### Fase 2: Diseño del nuevo manejo de estado del carrito

**Objetivo:** Proponer un nuevo diseño para el manejo del estado del carrito de compras.

**Tiempo estimado:** 3 días

**Instrucciones:**

- Elige un patrón de manejo de estados adecuado para el carrito de compras.
- Justifica cuándo el estado debe ser local, compartido o servidor.
- Documenta el nuevo diseño con diagramas y descripciones.

**Entregable:** Documentación del nuevo diseño del manejo de estado del carrito de compras.

<details>
<summary>Pistas de conocimiento</summary>

- Considera patrones como Redux, Context API o MobX.
- Evalúa los pros y contras de cada opción.

</details>

### Fase 3: Implementación del nuevo manejo de estado del carrito

**Objetivo:** Implementar el nuevo diseño del manejo de estado del carrito de compras.

**Tiempo estimado:** 3 días

**Instrucciones:**

- Implementar el nuevo diseño del manejo de estado del carrito de compras.
- Asegurar la consistencia del estado ante operaciones concurrentes y fallos temporales.
- Sincronizar el estado del carrito con el servidor.

**Entregable:** Código implementado del nuevo manejo de estado del carrito de compras.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza hooks de React para gestionar el estado.
- Implementa mecanismos de sincronización con el servidor.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un patrón de manejo de estados y por qué es importante en el carrito de compras?
- **paraQueSirve**: ¿Para qué sirve cada patrón de manejo de estados en el contexto del carrito de compras?
- **comoSeUsa**: ¿Cómo se implementa un patrón de manejo de estados en React para el carrito de compras?
- **erroresComunes**: ¿Cuáles son los errores comunes al manejar el estado del carrito de compras y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica elegir un patrón de manejo de estados para el carrito de compras?

## Criterios de Evaluacion

- Analizar el estado actual del carrito de compras y documentar hallazgos.
- Proponer un nuevo diseño para el manejo de estado del carrito de compras.
- Implementar el nuevo diseño del manejo de estado del carrito de compras.
- Asegurar la consistencia del estado ante operaciones concurrentes y fallos temporales.
- Sincronizar el estado del carrito con el servidor.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
