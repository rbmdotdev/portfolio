import { TailwindProvider } from 'tailwindcss-react-native';
import Navigation from "./components/navigation/Navigation";


export default function App() {
  return (
      <TailwindProvider>
        <Navigation />
      </TailwindProvider>
  );
}

