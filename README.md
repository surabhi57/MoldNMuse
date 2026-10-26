# Mold & Muse

Mold & Muse is a frontend-only e-commerce experience for handmade clay charms and keychains. The visual direction pairs playful pastel colors and editorial serif typography with a Figma-inspired product journey.

## Features

- Responsive Home, Shop, search results, Account, Sign up, Log in, Cart, Checkout, order confirmation, Orders, and Credits pages.
- Search suggestions, URL-based filters, cart quantity controls, and localStorage persistence.
- Frontend-only checkout validation, order history, delivery transition, and confirmation confetti. Payment fields are never written to localStorage or sent to a server.
- Light and dark themes, a prefers-color-scheme default, reduced-motion support, keyboard focus styling, and skip-to-content navigation.

## Setup

```sh
npm install
npm run dev
npm run build
```

## Design styles

- **Glassmorphism** separates the header, hero copy, product, cart, and payment surfaces from the pastel backdrop while retaining the brand's soft, handmade feel.
- **Neumorphism** gives search, form fields, filters, and quantity controls subtle raised or pressed states.
- **Brutalist CTAs** make the primary purchase actions clear and tactile with a dark outline and hard offset shadow.
- **Pastel motion** adds drifting bubbles, a short delivery-van transition, and confirmation confetti; reduced-motion preferences disable decorative movement.

## Tech stack

- React, Vite, React Router, plain CSS, and lucide-react icons.
- No backend, database, or payment provider.

## Live link

Add the published URL here: **[Live link placeholder]**

## Screenshots

Add competition screenshots here: **[Screenshots placeholder]**

## Credits

### Images

The project owner supplied the brand/product imagery and Figma references. No separate image license file was provided; use is assumed to be authorized by the project owner.

| File | Use |
| --- | --- |
| `src/assets/logo.png` | Header logo, cropped from the supplied logo reference and made transparent |
| `assets/charm-board.png` / `public/assets/charm-board.png` | Homepage collage |
| `assets/clay-charms.png` / `public/assets/clay-charms.png` | Homepage collage and checkout background |
| `assets/pendant-detail.png` / `public/assets/pendant-detail.png` | Homepage collage |
| `assets/handmade-clay.png` / `public/assets/handmade-clay.png` | Handmade feature card |
| `assets/custom-tools.png` / `public/assets/custom-tools.png` | Customizable feature card |
| `assets/gift-charms.png` / `public/assets/gift-charms.png` | Perfect Gifts feature card |
| `assets/feature-handmade.png` / `public/assets/feature-handmade.png` | Handmade feature detail |
| `assets/feature-customizable.png` / `public/assets/feature-customizable.png` | Customizable feature detail |
| `assets/feature-gift.png` / `public/assets/feature-gift.png` | Perfect Gift feature detail |
| `public/assets/products/watermelon-keychain.jpg` | Watermelon Keychain product |
| `public/assets/products/camera-star-keychain.png` | Camera & Shooting Star Keychain product |
| `public/assets/products/pink-giraffe-charm.png` | Pink Heart Giraffe Charm product |
| `public/assets/products/flower-headphones-keychain.png` | Flower & Headphones Keychain product |
| `public/assets/products/storytime-keychain.png` | Storytime Keepsake Keychain product |
| `public/assets/products/blue-camera-charms.png` | Blue Camera & Polaroid Charms product |
| `public/assets/products/headphones-phone-charm.png` | Headphones Phone Charm product |
| `public/assets/order-map.png` | Supplied order-tracking visual asset |

### Fonts

- [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) are loaded from Google Fonts and distributed under the SIL Open Font License 1.1.
- Georgia, Times New Roman, Arial, and Courier New are system font fallbacks; their licensing follows the operating system that supplies them.

### Icons and illustrations

- [Lucide](https://lucide.dev/) icons are provided by `lucide-react` under the ISC License.
- The delivery van, pastel bubble field, and confetti are original inline SVG, CSS, and canvas illustrations in this project.
