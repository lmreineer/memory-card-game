import ImageCards from "./components/ImageCards";

export default function App() {
  return (
    <div className="flex h-screen flex-col justify-around">
      <div className="flex select-none justify-around">
        <ImageCards />
      </div>
    </div>
  );
}
