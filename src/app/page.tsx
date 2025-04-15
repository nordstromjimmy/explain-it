"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [level, setLevel] = useState<"5" | "15" | "25">("15");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, level }),
      });
      const data = await res.json();
      setOutput(data.result);
    } catch (error) {
      setOutput("There was an error generating the explanation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full max-w-2xl bg-white p-4 sm:p-8 rounded-2xl shadow-md mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Explainit.io</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a topic or concept you want explained..."
        className="w-full h-40 p-3 sm:p-4 mb-4 border border-gray-300 rounded-lg text-base"
      />
      <h4 className="text-xl font-bold mb-6 text-center">like i'm..</h4>
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
        {["5", "15", "25"].map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l as "5" | "15" | "25")}
            className={`px-4 py-2 rounded-lg transition text-sm sm:text-base font-medium cursor-pointer ${
              level === l ? "bg-indigo-400 text-white" : "bg-gray-300"
            }`}
          >
            {l} years old
          </button>
        ))}
      </div>

      <button
        onClick={handleExplain}
        className="w-full sm:w-auto block mx-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-gray-900"
        disabled={!input.trim()}
      >
        Explain it!
      </button>

      {loading ? (
        <div className="text-center mt-6 text-lg font-medium animate-pulse text-gray-600">
          🤔 Thinking like a {level}-year-old...
        </div>
      ) : (
        output && (
          <div className="mt-6 bg-gray-50 p-4 rounded-md border text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl font-semibold mb-2">Explanation:</h2>
            <p>{output}</p>
          </div>
        )
      )}
    </main>
  );
}
