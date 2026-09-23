# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos corruptos — arreglar primero

El contenido no corresponde a la extension. Regeneralos completos:

- `tsconfig.json` — El contenido no corresponde a un archivo json. Hay que regenerarlo completo.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Senior

### Brecha de conocimiento
Aplica un patron de manejo de estados y justifica cuando el estado debe ser local, compartido o servidor

### Misión / candidato
Rediseñar el estado del carrito de compras

### Datos adicionales
Candidato con 5 años en React

### Reto
- Tema: Manejo de estado en aplicaciones complejas
- Seniority: senior-l2
- Tipo: mixed
- Título: Rediseño del estado del carrito de compras
- Tiempo estimado: 1 semana

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Análisis del estado actual del carrito — objetivo: Identificar las deficiencias en el manejo del estado del carrito de compras. — entregable (NO resolver): Reporte de análisis con hallazgos y propuestas de mejora.
- Fase 2: Diseño del nuevo manejo de estado del carrito — objetivo: Proponer un nuevo diseño para el manejo del estado del carrito de compras. — entregable (NO resolver): Documentación del nuevo diseño del manejo de estado del carrito de compras.
- Fase 3: Implementación del nuevo manejo de estado del carrito — objetivo: Implementar el nuevo diseño del manejo de estado del carrito de compras. — entregable (NO resolver): Código implementado del nuevo manejo de estado del carrito de compras.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "ecommerce-cart-state",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:watch": "vitest watch",
    "lint": "eslint . --ext ts,tsx",
    "format": "prettier --write ."
  },
  "dependencies": {
    "react": "19.0.0-rc.0",
    "react-dom": "19.0.0-rc.0",
    "@tanstack/react-query": "5.51.11",
    "zustand": "4.5.4",
    "react-router-dom": "6.25.1",
    "axios": "1.7.2"
  },
  "devDependencies": {
    "vite": "5.3.4",
    "@vitejs/plugin-react": "4.3.1",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "typescript": "5.5.3",
    "vitest": "2.0.4",
    "@testing-library/react": "16.0.0",
    "@testing-library/jest-dom": "6.4.6",
    "@testing-library/user-event": "14.5.2",
    "eslint": "8.56.0",
    "eslint-plugin-react": "7.34.3",
    "eslint-plugin-react-hooks": "4.6.2",
    "prettier": "3.3.3",
    "@types/node": "20.14.11"
  },
  "eslintConfig": {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
  "prettier": {
    "semi": false,
    "singleQuote": true,
    "trailingComma": "es5",
    "printWidth": 80
  }
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          tanstack: ['@tanstack/react-query'],
          zustand: ['zustand'],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
  },
})

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    
    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    
    /* Path aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@features/*": ["src/features/*"],
      "@shared/*": ["src/shared/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

// === ARCHIVO: src/main.tsx ===
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './app/App'

// Creamos el cliente de TanStack Query con configuración para optimistic updates
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
    mutations: {
      onError: (error, variables, context) => {
        // Rollback automático en caso de error en optimistic updates
        if (context?.rollback) {
          queryClient.setQueryData(context.queryKey, context.rollback)
        }
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)

// === ARCHIVO: src/app/App.tsx ===
import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import LoadingSpinner from '@shared/components/LoadingSpinner'
import ErrorFallback from '@shared/components/ErrorFallback'

// Lazy loading de features
const CartFeature = lazy(() => import('@features/cart/CartFeature'))

const App = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={ErrorFallback}
        >
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner fullScreen />}>
              <Routes>
                <Route path="/" element={<CartFeature />} />
                <Route path="/cart" element={<CartFeature />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default App

// === ARCHIVO: index.html ===
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ecommerce Cart State</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>

// === ARCHIVO: README.md ===
# Ecommerce Cart State

## Descripción
Este proyecto es un ejemplo de cómo manejar el estado del carrito de compras en una aplicación de e-commerce utilizando React, TanStack Query y Zustand.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/ecommerce-cart-state.git
   cd ecommerce-cart-state
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución
1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre tu navegador y visita `http://localhost:3000`.

## Arquitectura
El proyecto sigue el patrón de manejo de estado con TanStack Query para la sincronización con el servidor y Zustand para el estado local reactivo. La separación entre componentes contenedores y presentacionales se mantiene estrictamente.

## Scripts
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Inicia el servidor de preview con la build de producción.
- `npm test`: Ejecuta los tests.
- `npm run test:watch`: Ejecuta los tests en modo watch.
- `npm run lint`: Lintea el código.
- `npm run format`: Formatea el código con Prettier.

## Convenciones
- TypeScript 5.7 con strict mode.
- Componentes funcionales con hooks.
- Zustand para estado local reactivo.
- TanStack Query para gestión de estado asíncrono.
- Patrón de optimistic updates para operaciones del carrito.
- Separación estricta entre componentes contenedores y presentacionales.
- Nomenclatura BEM para clases CSS.
- Manejo de errores con try/catch en servicios y hooks.
- Pruebas unitarias con Vitest y React Testing Library.

// === ARCHIVO: src/features/cart/components/Cart.tsx ===
import React from 'react';
import { useCart } from '@/features/cart/hooks/useCart';
import { CartItem } from '@/features/cart/components/CartItem';

const Cart: React.FC = () => {
  const { cartItems, addItem, removeItem, updateQuantity } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              status={item.status}
              onRemove={() => removeItem(item.id)}
              onQuantityChange={(quantity) => updateQuantity(item.id, quantity)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

// === ARCHIVO: src/features/cart/components/CartItem.tsx ===
import React from 'react';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  status: string;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  quantity,
  status,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <p>Estado: {status}</p>
      <button onClick={onRemove}>Eliminar</button>
      <input
        type='number'
        value={quantity}
        onChange={(e) => onQuantityChange(Number(e.target.value))}
      />
    </div>
  );
};

export default CartItem;

// === ARCHIVO: src/features/cart/hooks/useCart.ts ===
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useQueryClient } from '@tanstack/react-query';
import { cartService } from '@/features/cart/services/cartService';
import { CartItem as CartItemType } from '@/features/cart/types/cartTypes';

interface CartState {
  cartItems: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addItem: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),
      removeItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id!== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id? {...item, quantity } : item
          ),
        })),
    }),
    {
      name: 'cart-storage',
      getStorage: () => localStorage,
    }
  )
);

export const useCart = () => {
  const queryClient = useQueryClient();
  const { cartItems, addItem, removeItem, updateQuantity } = useCartStore((state) => state);

  return {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
  };
};

// === ARCHIVO: src/features/cart/services/cartService.ts ===
import axios from 'axios';
import { Cart, CartItem, CartStatus } from '@/features/cart/types/cartTypes';
import { cartUtils } from '@/features/cart/utils/cartUtils';

const API_BASE_URL = 'https://api.ecommerce.com/cart';

export class CartService {
  private axiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });

  async getCart(userId: string): Promise<Cart> {
    try {
      const response = await this.axiosInstance.get<Cart>(`/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw new Error('Failed to fetch cart');
    }
  }

  async addItemToCart(userId: string, item: CartItem): Promise<Cart> {
    try {
      const response = await this.axiosInstance.post<Cart>(`/${userId}/items`, item);
      return response.data;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw new Error('Failed to add item to cart');
    }
  }

  async updateItemInCart(userId: string, item: CartItem): Promise<Cart> {
    try {
      const response = await this.axiosInstance.put<Cart>(`/${userId}/items/${item.id}`, item);
      return response.data;
    } catch (error) {
      console.error('Error updating item in cart:', error);
      throw new Error('Failed to update item in cart');
    }
  }

  async removeItemFromCart(userId: string, itemId: string): Promise<Cart> {
    try {
      const response = await this.axiosInstance.delete<Cart>(`/${userId}/items/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw new Error('Failed to remove item from cart');
    }
  }
}

// === ARCHIVO: src/features/cart/types/cartTypes.ts ===
export interface Cart {
  id: string;
  items: CartItem[];
  status: CartStatus;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  status: CartStatus;
}

export enum CartStatus {
  ACTIVE = 'ACTIVE',
  ABANDONED = 'ABANDONED',
  PURCHASED = 'PURCHASED',
}

export interface AddItem {
  item: CartItem;
}

export interface UpdateItem {
  item: CartItem;
}

export interface RemoveItem {
  itemId: string;
}

// === ARCHIVO: src/features/cart/utils/cartUtils.ts ===
import { Cart, CartItem } from '@/features/cart/types/cartTypes';

export const cartUtils = {
  calculateTotal(cart: Cart): number {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  applyDiscount(cart: Cart, discount: number): Cart {
    const total = this.calculateTotal(cart);
    const discountedTotal = total - (total * discount / 100);
    return {...cart, total: discountedTotal };
  },

  validateInventory(cart: Cart, inventory: { [id: string]: number }): boolean {
    for (const item of cart.items) {
      if (inventory[item.id] < item.quantity) {
        return false;
      }
    }
    return true;
  },

  handleTransientState(cart: Cart, transientState: string): Cart {
    return {...cart, transientState };
  },

  isCartValid(cart: Cart): boolean {
    return cart.items.every(item => item.quantity > 0 && item.price > 0);
  },

  mergeCarts(cart1: Cart, cart2: Cart): Cart {
    const mergedItems = [...cart1.items,...cart2.items];
    const mergedCart: Cart = {
      id: cart1.id,
      items: mergedItems,
      status: cart1.status,
    };
    return mergedCart;
  },
};

// === ARCHIVO: src/features/cart/__tests__/useCart.test.tsx ===
import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '@/features/cart/hooks/useCart';
import { cartService } from '@/features/cart/services/cartService';
import { CartItem } from '@/features/cart/types/cartTypes';

describe('useCart hook', () => {
  it('should handle adding a product to the cart', async () => {
    const { result } = renderHook(() => useCart());
    const product: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product);
    });
    expect(result.current.cart).toContainEqual(product);
  });

  it('should handle removing a product from the cart', async () => {
    const { result } = renderHook(() => useCart());
    const product: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product);
      result.current.removeFromCart(product.id);
    });
    expect(result.current.cart).not.toContainEqual(product);
  });

  it('should handle updating the quantity of a product in the cart', async () => {
    const { result } = renderHook(() => useCart());
    const product: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product);
      result.current.updateCartItem(product.id, 2);
    });
    expect(result.current.cart).toContainEqual({...product, quantity: 2 });
  });

  it('should handle concurrent updates to the cart', async () => {
    const { result } = renderHook(() => useCart());
    const product1: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    const product2: CartItem = { id: '2', name: 'Product 2', price: 200, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product1);
      result.current.addToCart(product2);
    });
    expect(result.current.cart).toContainEqual(product1);
    expect(result.current.cart).toContainEqual(product2);
  });

  it('should handle temporary server failures', async () => {
    jest.spyOn(cartService, 'syncCartWithServer').mockRejectedValueOnce(new Error('Server error'));
    const { result } = renderHook(() => useCart());
    const product: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product);
    });
    expect(result.current.cart).toContainEqual(product);
    expect(result.current.error).toBe('Server error');
  });
});

// === ARCHIVO: src/features/cart/__tests__/cartService.test.ts ===
import { cartService } from '@/features/cart/services/cartService';
import { CartItem } from '@/features/cart/types/cartTypes';
import { apiClient } from '@/shared/services/apiClient';

describe('cartService', () => {
  it('should sync cart with server', async () => {
    const cartItems: CartItem[] = [
      { id: '1', name: 'Product 1', price: 100, quantity: 1 },
      { id: '2', name: 'Product 2', price: 200, quantity: 1 },
    ];
    jest.spyOn(apiClient, 'post').mockResolvedValue({ data: cartItems });
    await cartService.syncCartWithServer();
    expect(apiClient.post).toHaveBeenCalledWith('/cart', cartItems);
  });

  it('should handle server errors during sync', async () => {
    jest.spyOn(apiClient, 'post').mockRejectedValueOnce(new Error('Server error'));
    try {
      await cartService.syncCartWithServer();
    } catch (error) {
      expect(error).toBe('Server error');
    }
  });
});

// === ARCHIVO: src/shared/services/apiClient.ts ===
import axios from 'axios';

interface ApiClientConfig {
  baseUrl: string;
  headers?: { [key: string]: string };
}

class ApiClient {
  private axiosInstance: any;

  constructor(config: ApiClientConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // Add auth token or other common headers
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          // Handle specific HTTP error codes
          switch (error.response.status) {
            case 401:
              // Handle unauthorized
              break;
            case 403:
              // Handle forbidden
              break;
            case 404:
              // Handle not found
              break;
            default:
              // Handle other errors
              break;
          }
        }
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, params?: any): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, { params });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }

  public async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to post data: ${error.message}`);
    }
  }

  public async put<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to put data: ${error.message}`);
    }
  }

  public async delete<T>(url: string): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete data: ${error.message}`);
    }
  }
}

export default ApiClient;

// === ARCHIVO: src/shared/hooks/usePolling.ts ===
import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import ApiClient from '@/shared/services/apiClient';

interface UsePollingProps {
  queryKey: string[];
  queryFn: () => Promise<any>;
  enabled: boolean;
  interval: number;
}

const usePolling = ({ queryKey, queryFn, enabled, interval }: UsePollingProps) => {
  const { data, isLoading, isError, error, refetch } = useQuery(queryKey, queryFn, {
    enabled: false,
  });
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (enabled) {
      const poll = async () => {
        await refetch();
        pollingRef.current = setTimeout(poll, interval);
      };

      poll();

      return () => {
        if (pollingRef.current) {
          clearTimeout(pollingRef.current);
        }
      };
    }
  }, [enabled, interval, refetch]);

  return { data, isLoading, isError, error };
};

export default usePolling;
```
