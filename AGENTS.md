# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Rediseño del estado del carrito de compras**.

| | |
|---|---|
| Tema | Manejo de estado en aplicaciones complejas |
| Nivel | senior-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | patrón de manejo de estado con TanStack Query + Zustand para estado local reactivo, sincronización con servidor mediante optimistic updates y polling estratégico |
| Tiempo estimado | 1 semana |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- react 19.0.0-rc.0
- react-dom 19.0.0-rc.0
- @tanstack/react-query 5.51.11
- zustand 4.5.4
- react-router-dom 6.25.1
- axios 1.7.2
- vite 5.3.4
- @vitejs/plugin-react 4.3.1
- @types/react 18.3.3
- @types/react-dom 18.3.0
- typescript 5.5.3
- vitest 2.0.4
- @testing-library/react 16.0.0
- @testing-library/jest-dom 6.4.6
- @testing-library/user-event 14.5.2
- eslint 8.56.0
- eslint-plugin-react 7.34.3
- eslint-plugin-react-hooks 4.6.2

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Análisis del estado actual del carrito**: Reporte de análisis con hallazgos y propuestas de mejora.
- **Fase 2 — Diseño del nuevo manejo de estado del carrito**: Documentación del nuevo diseño del manejo de estado del carrito de compras.
- **Fase 3 — Implementación del nuevo manejo de estado del carrito**: Código implementado del nuevo manejo de estado del carrito de compras.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### Archivos corruptos (1) — arreglá esto primero

El contenido de estos archivos no corresponde a su extension. Regeneralos completos:

- [ ] `tsconfig.json` — El contenido no corresponde a un archivo json. Hay que regenerarlo completo.

### Presentes (17)

- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `src/main.tsx`
- `src/app/App.tsx`
- `index.html`
- `README.md`
- `src/features/cart/components/Cart.tsx`
- `src/features/cart/components/CartItem.tsx`
- `src/features/cart/hooks/useCart.ts`
- `src/features/cart/services/cartService.ts`
- `src/features/cart/types/cartTypes.ts`
- `src/features/cart/utils/cartUtils.ts`
- `src/features/cart/__tests__/useCart.test.tsx`
- `src/features/cart/__tests__/cartService.test.ts`
- `src/shared/services/apiClient.ts`
- `src/shared/hooks/usePolling.ts`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src`
- `src/app`
- `src/features/cart`
- `src/features/cart/components`
- `src/features/cart/hooks`
- `src/features/cart/services`
- `src/features/cart/types`
- `src/features/cart/utils`
- `src/shared`
- `src/shared/components`
- `src/shared/hooks`
- `src/shared/services`
- `src/shared/types`
- `src/shared/utils`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **patrón de manejo de estado con TanStack Query + Zustand para estado local reactivo, sincronización con servidor mediante optimistic updates y polling estratégico**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Senior
- Brecha que el reto ataca: Aplica un patron de manejo de estados y justifica cuando el estado debe ser local, compartido o servidor
- Mision: Rediseñar el estado del carrito de compras

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
