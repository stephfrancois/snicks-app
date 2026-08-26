// 1. Définis le type
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

// 2. Écris une fonction qui décrit chaque statut en français

function describeStatus(status: OrderStatus): string {
  switch (status) {
    case "pending":
      return "En attente";
    case "shipped":
      return "Expédié";
    case "delivered":
      return "Livré";
    case "cancelled":
      return "Annulé";
    default:
      const _exhaustive: never = status;
      return _exhaustive;
  }
}

// 3. Écris une fonction qui vérifie si une transition est valide.
function canTransition(from: OrderStatus, to: OrderStatus): boolean {
  if (from === "pending" && to === "shipped") return true;

  if (from === "shipped" && to === "delivered") return true;
  return false;
}

console.log(canTransition("pending", "shipped"));
console.log(canTransition("delivered", "pending"));
console.log(canTransition("cancelled", "shipped"));
