import { useTranslations } from "next-intl";
import Container from "@/components/Container";

export default function RealTimeDemo() {
  const t = useTranslations("realTimeDemo");
  const features = t.raw("features") as string[];

  return (
    <section id="demo" className="bg-[#060606] py-24 border-t border-[#1f1f1f]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block text-[13px] font-medium text-[#3d5afe] uppercase tracking-widest mb-4">
              Live
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-6">
              {t("headline")}
            </h2>
            <p className="text-[18px] text-[#a0a0a0] leading-relaxed mb-8">
              {t("description")}
            </p>
            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[15px] text-[#a0a0a0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3d5afe] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: mock UI */}
          <div className="flex flex-col gap-4">
            {/* Main dashboard mock */}
            <div className="rounded-[12px] border border-[#1f1f1f] bg-[#0d0d0d] p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[13px] font-semibold text-white">Live Match</span>
                <span className="flex items-center gap-1.5 text-[12px] text-[#22c55e]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  Live
                </span>
              </div>
              {/* Match rows */}
              {[
                { a: "Marko P.", b: "Stefan J.", score: "3 : 2" },
                { a: "Nikola R.", b: "Ivan M.", score: "1 : 1" },
                { a: "Djordje S.", b: "Filip K.", score: "0 : 0" },
              ].map((match) => (
                <div
                  key={match.a}
                  className="flex items-center justify-between py-3 border-t border-[#1f1f1f] first:border-t-0"
                >
                  <span className="text-[13px] text-white w-24 truncate">{match.a}</span>
                  <span className="text-[15px] font-bold text-[#3d5afe] tabular-nums">{match.score}</span>
                  <span className="text-[13px] text-white w-24 text-right truncate">{match.b}</span>
                </div>
              ))}
            </div>

            {/* Bottom row: 2 smaller mocks */}
            <div className="grid grid-cols-2 gap-4">
              {/* QR mock */}
              <div className="rounded-[12px] border border-[#1f1f1f] bg-[#0d0d0d] p-5 flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-[#1f1f1f] rounded-[8px] grid grid-cols-3 gap-0.5 p-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-[1px] ${[0,2,4,6,8].includes(i) ? "bg-white" : "bg-[#1f1f1f]"}`}
                    />
                  ))}
                </div>
                <span className="text-[12px] text-[#a0a0a0] text-center">Share via QR</span>
              </div>
              {/* Leaderboard mock */}
              <div className="rounded-[12px] border border-[#1f1f1f] bg-[#0d0d0d] p-5">
                <p className="text-[12px] font-semibold text-white mb-3">Standings</p>
                {["1. Marko P.", "2. Stefan J.", "3. Nikola R."].map((p) => (
                  <p key={p} className="text-[12px] text-[#a0a0a0] py-1 border-b border-[#1f1f1f] last:border-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
