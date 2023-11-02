import Background from "~/components/Background";
import TodoList from "~/components/TodoList";

export default function HomePage() {
  return (
    <main className="min-w-screen relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#5155c1] to-[#041d56]">
      {/* Background materials */}
      <TodoList />
      <Background />
    </main>
  );
}
