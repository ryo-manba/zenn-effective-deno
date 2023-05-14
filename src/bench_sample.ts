import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.106.0/testing/bench.ts";

// Redisに代わるダミーのオブジェクト
const dummyRedis = {
  ping: async () => {
    await new Promise((resolve) => setTimeout(resolve, 10));
    return "PONG";
  },
};

bench({
  name: "ping",
  runs: 10_000, // 10,000回実行し、平均実行時間を計測
  async func(b) {
    b.start();
    await dummyRedis.ping();
    b.stop();
  },
});

await runBenchmarks();
