const USDC_SCALE = 1_000_000n;

export function formatUsdc(atomic: bigint | string) {
  const value = BigInt(atomic);
  const whole = value / USDC_SCALE;
  const fraction = (value % USDC_SCALE)
    .toString()
    .padStart(6, "0")
    .replace(/0+$/, "");

  return fraction
    ? `${whole.toLocaleString()}.${fraction} USDC`
    : `${whole.toLocaleString()} USDC`;
}