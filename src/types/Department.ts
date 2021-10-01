export type Department = "Design"
  | "Integrations" 
  | "Mobile"
  | "Production"
  | "Sales"
  | "Web";

export const Icons: Map<Department, string> = new Map([
    ["Design", "🎨"],
    ["Integrations", "🧱"],
    ["Mobile", "📱"],
    ["Production", "🧭"],
    ["Sales", "💸"],
    ["Web", "🌍"],
]);