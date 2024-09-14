export async function register() {
  if (
    process.env.NEXT_RUNTIME === "nodejs"
  ) {
    const { init } = await import("@hyperdx/node-opentelemetry");
    init({
      apiKey: process.env.HYPERDX_API_KEY,
      service: process.env.OTEL_SERVICE_NAME,
      betaMode: true,
    });
  }
}
