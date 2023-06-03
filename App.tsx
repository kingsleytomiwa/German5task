import { Text, View, SafeAreaView } from "react-native";
import BottomNav from "./components/BottomNav";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Gallery />
      <BottomNav />
    </SafeAreaView>
  );
}
