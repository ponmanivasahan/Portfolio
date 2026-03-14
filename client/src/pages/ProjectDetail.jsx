import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import {
  ArrowLeft, Github, Calendar,
  Users, User, Zap, CheckCircle2, Layers, Target, Award
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Project Not Found</h1>
          <Link to="/" className="text-sm hover:underline" style={{ color: "hsl(var(--gold))" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "hsl(var(--gold) / 0.1)", color: "hsl(var(--gold-foreground))" }}>
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Award className="h-3 w-3" /> Featured
              </span>
            )}
          </div>

          <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            {project.title}
          </h1>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-4 text-xs text-muted-foreground sm:text-sm">
            {project.role && (
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" /> {project.role}
              </span>
            )}
            {project.duration && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {project.duration}
              </span>
            )}
            {project.team && (
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" /> {project.team}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:scale-105 sm:text-sm">
              <Github className="h-4 w-4" /> View Code
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-10 lg:col-span-2">
            {project.challenge && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <Target className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">The Challenge</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{project.challenge}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "hsl(var(--gold) / 0.1)", color: "hsl(var(--gold-foreground))" }}>
                    <Zap className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">The Solution</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{project.solution}</p>
              </div>
            )}

            {project.architecture && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-foreground/70">
                    <Layers className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">Architecture</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{project.architecture}</p>
              </div>
            )}

            {project.features && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "hsl(var(--gold) / 0.1)", color: "hsl(var(--gold-foreground))" }}>
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">Key Features</h2>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 sm:p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "hsl(var(--gold) / 0.6)" }} />
                      <span className="text-xs text-foreground sm:text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.impact && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent-foreground">
                    <Award className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">Impact & Results</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold" style={{ background: "hsl(var(--gold) / 0.1)", color: "hsl(var(--gold-foreground))" }}>
                        {i + 1}
                      </span>
                      <span className="text-xs text-muted-foreground sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-lg border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Facts</h3>
              <div className="space-y-3">
                {project.role && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium text-foreground">{project.role}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium text-foreground">{project.duration}</span>
                  </div>
                )}
                {project.team && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Team</span>
                    <span className="font-medium text-foreground">{project.team}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium text-foreground">{project.category}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Other Projects</h3>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 5)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/project/${p.id}`}
                      className="block rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {p.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;