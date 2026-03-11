import { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger } from "gsap/ScrollTrigger";
import {Github, Code2, BookOpen, Star, GitFork, Flame, Target, TrendingUp, Award, ExternalLink } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const platforms =[
  {
    name:"GitHub",icon: Github,link: "github.com/xyz", color: "from-foreground/10 to-foreground/5",
    stats: [
      { label: "Repositories", value: "40+", icon: BookOpen },
      { label: "Stars Earned", value: "120+", icon: Star },
      { label: "Contributions", value: "1,200+", icon: GitFork },
    ],
  },
  {
    name: "LeetCode", icon: Code2, link: "leetcode.com/xyz", color: "from-yellow-500/10 to-yellow-500/5",
    stats: [
      { label: "Problems Solved", value: "500+", icon: Target },
      { label: "Contest Rating", value: "1,850", icon: TrendingUp },
      { label: "Max Streak", value: "120 days", icon: Flame },
    ],
  },
  {
    name: "GeeksforGeeks", icon: BookOpen, link: "geeksforgeeks.org/user/xyz", color: "from-green-500/10 to-green-500/5",
    stats: [
      { label: "Problems Solved", value: "350+", icon: Target },
      { label: "Institute Rank", value: "#5", icon: Award },
      { label: "Coding Score", value: "780", icon: Star },
    ],
  },
];

const leetcodeBreakdown = [
  { label: "Easy", solved: 180, color: "bg-green-500", stroke: "#22c55e" },
  { label: "Medium", solved: 250, color: "bg-yellow-400", stroke: "hsl(var(--gold))" },
  { label: "Hard", solved: 70, color: "bg-red-500", stroke: "#ef4444" },
];

const getIntensity = (week, day) => {
  const seed = week * 7 + day;
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const greenColors = ["bg-secondary", "bg-green-200", "bg-green-400", "bg-green-600", "bg-green-800"];

const CodingStats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".stat-card");
    gsap.set(cards, { y: 40, opacity: 0 });
    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.to(batch, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }),
      start: "top 85%",
    });
  }, []);

  return (
    <section id="stats" className="section-gray relative">
      <div className="section-divider" />
      <div ref={sectionRef} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1 w-1 rounded-full" style={{ background: "hsl(var(--gold))" }} />
          Coding Profiles
        </div>
        <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-5xl">Competitive Stats</h2>
        <p className="mb-10 max-w-2xl text-sm text-muted-foreground sm:mb-12 sm:text-base">
          Consistent problem solver across multiple platforms with a focus on data structures and algorithms.
        </p>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {platforms.map((platform) => {
            const PlatformIcon = platform.icon;
            return (
              <div key={platform.name} className="stat-card card-elevated overflow-hidden">
                <div className={`bg-gradient-to-br ${platform.color} px-5 py-4 sm:px-6 sm:py-5`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-card shadow-sm">
                        <PlatformIcon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground sm:text-base">{platform.name}</h3>
                        <p className="text-[10px] text-muted-foreground">{platform.link}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {platform.stats.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="flex items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground sm:text-sm">{s.label}</span>
                        </div>
                        <span className="text-sm font-bold text-foreground sm:text-base">{s.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-5">
          <div className="stat-card card-elevated p-4 sm:p-5 lg:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground sm:text-sm">Contribution Activity</p>
              <span className="text-[10px] text-muted-foreground">Last 12 months</span>
            </div>
            <div className="flex gap-[2px] overflow-x-auto pb-2 sm:gap-[3px]">
              {Array.from({ length: 52 }).map((_, week) => (
                <div key={week} className="flex flex-col gap-[2px] sm:gap-[3px]">
                  {Array.from({ length: 7 }).map((_, day) => {
                    const intensity = getIntensity(week, day);
                    const colorIdx = intensity > 0.8 ? 4 : intensity > 0.6 ? 3 : intensity > 0.35 ? 2 : intensity > 0.15 ? 1 : 0;
                    return (
                      <div key={day} className={`h-2 w-2 rounded-[1px] sm:h-[10px] sm:w-[10px] sm:rounded-[2px] ${greenColors[colorIdx]}`} />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-end gap-1 text-[9px] text-muted-foreground sm:text-[10px]">
              <span>Less</span>
              {greenColors.map((c, i) => <div key={i} className={`h-2 w-2 rounded-[1px] sm:h-[10px] sm:w-[10px] ${c}`} />)}
              <span>More</span>
            </div>
          </div>
          <div className="stat-card card-elevated p-4 sm:p-5 lg:col-span-2">
            <p className="mb-4 text-xs font-semibold text-foreground sm:text-sm">Problem Breakdown</p>
            <div className="mb-5 flex items-center justify-center">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" className="stroke-secondary" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="3"
                    strokeDasharray={`${(180 / 500) * 100} ${100 - (180 / 500) * 100}`} strokeDashoffset="0" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(45 100% 51%)" strokeWidth="3"
                    strokeDasharray={`${(250 / 500) * 100} ${100 - (250 / 500) * 100}`}
                    strokeDashoffset={`-${(180 / 500) * 100}`} />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ef4444" strokeWidth="3"
                    strokeDasharray={`${(70 / 500) * 100} ${100 - (70 / 500) * 100}`}
                    strokeDashoffset={`-${((180 + 250) / 500) * 100}`} />
                </svg>
                <div className="absolute text-center">
                  <p className="text-lg font-bold text-foreground">500+</p>
                  <p className="text-[9px] text-muted-foreground">Solved</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {leetcodeBreakdown.map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${d.color}`} />
                  <span className="flex-1 text-xs text-muted-foreground">{d.label}</span>
                  <span className="text-xs font-semibold text-foreground">{d.solved}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;