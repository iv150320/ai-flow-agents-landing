import { Zap } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <Zap className="w-4 h-4" />
            <span className="font-medium text-neutral-600">AI Flow Agents</span>
          </div>

          <p className="text-neutral-400 text-sm">
            &copy; {year} AI Flow Agents. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
