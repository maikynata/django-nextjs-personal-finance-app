export async function getTransactions() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/transactions/`);
  return res.json();
}