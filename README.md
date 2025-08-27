# Semester Test 1 - React & React Native Store Apps

## Project Structure
```
assignment-root/
├── question1/    # React.js Web (npm create vite@latest question1)
└── question2/    # React Native (expo init question2)
```

---

## Question 1: React.js Web Store

## How to Run

```bash
cd question1
npm install
npm install react-router-dom
npm run dev
# Open http://localhost:5173
```

### 1. Component Design 
```
<App> - routing setup
    <ProductList> - holds products state, fetches data  
      <ProductCard> - receives product via props
    <ProductDetail> - fetches single product by ID
```

### 2. Product List & Cards
- Fetch products from `https://fakestoreapi.com/products`
- Grid layout with product image, title, price
- Use `useState` and `useEffect`

### 3. Routing & Detail Page 
- Routes: `/` (home) and `/product/:id` (detail)
- Click card -> navigate to detail
- Fetch single product: `https://fakestoreapi.com/products/{id}`

---

## Question 2: React Native Mobile Store

```bash
cd question2
npm install
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
npm start
```
# Use Expo Go app on your phone or simulator

### 1. Navigation Setup 
Stack Navigator with HomeScreen and DetailScreen

### 2. Home Screen
- Fetch products with `useEffect`/`useState`
- FlatList with product cards (image + title)
- Loading states and error handling

### 3. Detail Screen  
- Navigate with `navigation.navigate('Detail', {id})`
- Get ID from `route.params.id`
- Show full product info (image, title, price, description)

## API Used
- Products: `https://fakestoreapi.com/products`
- Single: `https://fakestoreapi.com/products/{id}`