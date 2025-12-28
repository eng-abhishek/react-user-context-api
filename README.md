## useContext Hook in React (Easy Explanation)

useContext is a React Hook used to share data globally between components without passing props manually at every level (this problem is called prop drilling).

❓ Why do we need useContext?

Imagine this situation:

You have User data (name, role, theme, cart, login status)

Many components need this data

Passing props from App → Navbar → Page → Component becomes messy 😵

👉 useContext solves this by providing a central store.

🧠 How useContext Works (3 Steps)
1️⃣ Create Context
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;

2️⃣ Provide Context (Provider)

Wrap components that need access to the data.

import UserContext from "./UserContext";

function App() {
const user = {
name: "Abhi",
role: "Admin"
};

return (
<UserContext.Provider value={user}>
<Navbar />
<Dashboard />
</UserContext.Provider>
);
}

export default App;

3️⃣ Consume Context using useContext

Any child component can access the data directly.

import { useContext } from "react";
import UserContext from "./UserContext";

function Dashboard() {
const user = useContext(UserContext);

return (

<h2>Welcome {user.name} ({user.role})</h2>
);
}

export default Dashboard;

✅ Output
Welcome Abhi (Admin)

🔥 Real-Life Use Cases

You can use useContext for:

🌗 Theme (dark/light mode)

🔐 Authentication (user login)

🛒 Cart data (you used this in cart project)

🌍 Language settings

⚠️ Important Rules

useContext must be used inside a Provider

Context value updates re-render all consumers

Not ideal for very frequent updates → use Redux/Zustand instead

🆚 Props vs useContext
Props useContext
Manual passing Automatic access
Good for small apps Best for medium apps
Prop drilling issue No prop drilling
🔄 Example: Cart Context (Short)
const CartContext = createContext();

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

return (
<CartContext.Provider value={{ cart, setCart }}>
{children}
</CartContext.Provider>
);
};

const { cart, setCart } = useContext(CartContext);

🧠 When NOT to use useContext

❌ For heavy state updates
❌ For large-scale apps
❌ For complex async logic
