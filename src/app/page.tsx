"use client";
import { Button } from "@/components/button";
import ThemeToggle from "@/components/themeToggle";

export default function Home() {
  return (
    <div className="flex flex-col  items-center w-full h-screen py-4 gap-4">
      <h1 className="text-green-500 text-3xl font-bold">Desafio Codecon</h1>
      <Button name="testButton" func={() => console.log("clicado!")} />
      <ThemeToggle />
    </div>
  );
}
