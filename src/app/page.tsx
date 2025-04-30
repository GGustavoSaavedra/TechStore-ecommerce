// src/App/page.tsx  (o donde tengas tu Home)
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CardList />
      </div>
    </section>
  );
}
