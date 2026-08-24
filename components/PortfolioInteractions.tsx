"use client";

import { useEffect, useState, type ReactNode } from "react";

export type Project = {
  index: string;
  kind: string;
  period: string;
  title: string;
  short: string;
  description: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  highlights: string[];
  image: string;
  link?: string;
};

export type Certificate = {
  index: string;
  type: string;
  title: string;
  org: string;
  year: string;
  description: string;
  link: string;
};

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className={`group relative grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-20 lg:py-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* PROJECT VISUAL */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-[40px] bg-cyan-300/[0.025] blur-3xl transition duration-700 group-hover:bg-cyan-300/[0.06]" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0d12] shadow-2xl">
            <ProjectVisual project={project} />

            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-mono uppercase tracking-[0.16em] text-white/55 backdrop-blur-md">
                Case Study
              </span>

              <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-mono text-white/45 backdrop-blur-md">
                {project.index} / 02
              </span>
            </div>
          </div>
        </div>

        {/* PROJECT INFORMATION */}
        <div className="relative">
          <div className="flex items-center gap-4 text-sm font-mono uppercase tracking-[0.16em] text-white/40">
            <span className="text-cyan-300">{project.index}</span>
            <span className="h-px w-10 bg-white/15" />
            <span>{project.kind}</span>
          </div>

          <h3 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h3>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
            {project.short}
          </p>

          {/* METRICS */}
          <div className="mt-9 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
            {project.metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`pr-4 ${
                  index !== 0 ? "border-l border-white/10 pl-4" : ""
                }`}
              >
                <div
                  className={`text-xl font-semibold sm:text-2xl ${
                    index === 1 ? "text-cyan-300" : "text-white"
                  }`}
                >
                  {metric.value}
                </div>

                <div className="mt-1 text-xs leading-5 text-white/40">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* STACK */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-white/55 transition duration-300 group-hover:border-cyan-300/20 group-hover:text-white/70"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* ACTION */}
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => setOpen(true)}
              className="group/button inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-base font-medium text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
            >
              Explore case study

              <span className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1">
                ↗
              </span>
            </button>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-base font-medium text-white/60 transition duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
              >
                View project

                <span className="transition-transform duration-300 hover:translate-x-1">
                  ↗
                </span>
              </a>
            )}
          </div>

          <div className="mt-5 text-sm font-mono text-white/25">
            {project.period}
          </div>
        </div>
      </article>

      {open && (
        <Modal
          title={project.title}
          onClose={() => setOpen(false)}
        >
          <div className="space-y-10">
            <ProjectVisual project={project} large />

            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <div className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-300/70">
                  Overview
                </div>

                <p className="mt-5 text-lg leading-8 text-white/65">
                  {project.description}
                </p>

                <div className="mt-10">
                  <div className="text-sm font-mono uppercase tracking-[0.2em] text-white/35">
                    Key contributions
                  </div>

                  <ul className="mt-5 space-y-4">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-4 text-base leading-7 text-white/65"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                  <div className="text-sm font-mono uppercase tracking-[0.2em] text-white/35">
                    Project metrics
                  </div>

                  <div className="mt-6 space-y-5">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
                      >
                        <div className="text-2xl font-semibold text-white">
                          {metric.value}
                        </div>

                        <div className="mt-1 text-sm text-white/40">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                  <div className="text-sm font-mono uppercase tracking-[0.2em] text-white/35">
                    Technology
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/55"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* PROJECT VISUAL                                                             */
/* -------------------------------------------------------------------------- */

function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#090c11] ${
        large ? "min-h-[360px] sm:min-h-[560px]" : "aspect-[16/10]"
      }`}
    >
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 z-10 h-64 w-64 rounded-full bg-cyan-300/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      {/* project label */}
      <div className="absolute bottom-5 left-5 z-20">
        <span className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-mono uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
          {project.kind}
        </span>
      </div>

      {/* project number */}
      <div className="absolute bottom-5 right-5 z-20">
        <span className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-mono text-white/50 backdrop-blur-md">
          {project.index}
        </span>
      </div>
    </div>
  );
}

function ClassifyPreview() {
  return (
    <div className="h-full p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-cyan-300/70">
            Computer Vision
          </div>

          <div className="mt-2 text-lg font-semibold text-white/90">
            Smart Attendance
          </div>
        </div>

        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-3 py-2 text-right">
          <div className="text-[8px] uppercase tracking-widest text-white/30">
            mAP@0.5
          </div>

          <div className="mt-1 text-xs font-mono text-cyan-300">
            0.995
          </div>
        </div>
      </div>

      <div className="relative mt-5 aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <div className="absolute left-[18%] top-[20%] h-24 w-20 rounded-lg border border-cyan-300/80 shadow-[0_0_30px_rgba(103,232,249,.12)]" />

        <div className="absolute left-[52%] top-[28%] h-20 w-16 rounded-lg border border-cyan-300/50" />

        <div className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 text-[8px] font-mono text-white/50">
          LIVE DETECTION
        </div>

        <div className="absolute right-3 top-3 rounded-md border border-emerald-300/20 bg-emerald-300/5 px-3 py-1.5 text-[8px] font-mono text-emerald-300/70">
          2 FACES
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["YOLO", "Detection"],
          ["Cloud", "Backend"],
          ["Mobile", "Interface"],
        ].map(([value, label]) => (
          <div
            key={value}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-3"
          >
            <div className="text-sm font-semibold text-white/80">
              {value}
            </div>

            <div className="mt-1 text-[8px] uppercase tracking-widest text-white/30">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CarRentalPreview() {
  return (
    <div className="h-full p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-orange-300/70">
            Rental Platform
          </div>

          <div className="mt-2 text-lg font-semibold text-white/90">
            Car Rental
          </div>
        </div>

        <div className="rounded-lg border border-orange-300/20 bg-orange-300/5 px-3 py-2">
          <div className="text-[8px] uppercase tracking-widest text-white/30">
            Status
          </div>

          <div className="mt-1 text-xs font-mono text-orange-300">
            LIVE
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          ["Toyota", "Avanza", "Rp 350K/day"],
          ["Honda", "Brio", "Rp 300K/day"],
          ["Mitsubishi", "Xpander", "Rp 450K/day"],
          ["Toyota", "Fortuner", "Rp 750K/day"],
        ].map(([brand, model, price]) => (
          <div
            key={`${brand}-${model}`}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-3"
          >
            <div className="h-12 rounded-lg bg-white/[0.035]" />

            <div className="mt-3 text-[8px] uppercase tracking-widest text-white/30">
              {brand}
            </div>

            <div className="mt-1 text-sm font-semibold text-white/80">
              {model}
            </div>

            <div className="mt-2 text-[9px] font-mono text-orange-300/70">
              {price}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Search", "Booking", "Payment"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 px-3 py-2 text-center text-[8px] uppercase tracking-widest text-white/35"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function EpicBooksPreview() {
  return (
    <div className="h-full p-5">
      <div>
        <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-violet-300/70">
          Mobile Application
        </div>

        <div className="mt-2 text-lg font-semibold text-white/90">
          EpicBooks
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="w-36 rounded-[22px] border border-white/15 bg-[#11151c] p-2 shadow-2xl">
          <div className="rounded-[16px] border border-white/10 bg-[#0a0d12] p-3">
            <div className="h-24 rounded-xl bg-violet-300/10" />

            <div className="mt-3 h-2 w-20 rounded bg-white/20" />
            <div className="mt-2 h-1.5 w-24 rounded bg-white/10" />
            <div className="mt-4 h-1.5 w-16 rounded bg-white/10" />

            <div className="mt-5 rounded-lg border border-white/10 p-2 text-center text-[7px] text-violet-300/60">
              VIEW DETAILS
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          ["Java", "Android"],
          ["Retrofit", "API"],
          ["Books", "Catalog"],
        ].map(([value, label]) => (
          <div
            key={value}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-3"
          >
            <div className="text-sm font-semibold text-white/80">
              {value}
            </div>

            <div className="mt-1 text-[8px] uppercase tracking-widest text-white/30">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SweetLifePreview() {
  return (
    <div className="h-full p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-emerald-300/70">
            Machine Learning
          </div>

          <div className="mt-2 text-lg font-semibold text-white/90">
            SweetLife
          </div>
        </div>

        <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/5 px-3 py-2">
          <div className="text-[8px] uppercase tracking-widest text-white/30">
            Model
          </div>

          <div className="mt-1 text-xs font-mono text-emerald-300">
            RF
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-4">
        <div className="text-[9px] font-mono uppercase tracking-widest text-white/30">
          Health indicators
        </div>

        <div className="mt-4 space-y-3">
          {[
            ["Glucose", "72%"],
            ["BMI", "61%"],
            ["Age", "48%"],
            ["Blood Pressure", "39%"],
          ].map(([label, width]) => (
            <div key={label}>
              <div className="mb-1.5 flex justify-between text-[8px] text-white/35">
                <span>{label}</span>
                <span>{width}</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400/30 to-emerald-300/80"
                  style={{ width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] p-4">
        <div className="text-[8px] uppercase tracking-widest text-white/30">
          Prediction
        </div>

        <div className="mt-2 text-xl font-semibold text-emerald-300">
          Classification Ready
        </div>

        <div className="mt-1 text-[9px] text-white/35">
          Random Forest prediction pipeline
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* ABSA PREVIEW                                                               */
/* -------------------------------------------------------------------------- */

function ABSAPreview() {
  const bars = [34, 58, 46, 76, 63, 88, 70, 94, 78, 85];

  return (
    <div className="h-full p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-cyan-300/70">
            ABSA Dashboard
          </div>

          <div className="mt-2 text-lg font-semibold text-white/90">
            Campus Service Sentiment
          </div>
        </div>

        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-3 py-2 text-right">
          <div className="text-[8px] uppercase tracking-widest text-white/30">
            Model
          </div>
          <div className="mt-1 text-xs font-mono text-cyan-300">
            IndoBERT
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-2">
        {[
          ["1,000+", "Data"],
          ["4", "Aspects"],
          ["87%", "Positive"],
          ["0.8", "Threshold"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-3"
          >
            <div className="text-base font-semibold text-white">
              {value}
            </div>
            <div className="mt-1 text-[8px] uppercase tracking-widest text-white/30">
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <div className="flex items-center justify-between">
          <div className="text-[9px] font-mono uppercase tracking-widest text-white/35">
            Sentiment distribution
          </div>

          <div className="text-[9px] text-white/25">
            synthetic → real
          </div>
        </div>

        <div className="mt-5 flex h-28 items-end gap-1.5">
          {bars.map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-t bg-gradient-to-t from-cyan-400/20 to-cyan-300/80 transition-all duration-700 group-hover:h-[95%]"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 p-3">
          <div className="text-[8px] uppercase tracking-widest text-white/25">
            Accuracy
          </div>
          <div className="mt-2 text-sm font-semibold text-white/80">
            Evaluation
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-3">
          <div className="text-[8px] uppercase tracking-widest text-white/25">
            Pipeline
          </div>
          <div className="mt-2 text-sm font-semibold text-white/80">
            Synthetic → Real
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* AL-BAYYAN PREVIEW                                                          */
/* -------------------------------------------------------------------------- */

function AlBayyanPreview() {
  return (
    <div className="h-full p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-violet-300/70">
            Semantic Matching
          </div>

          <div className="mt-2 text-lg font-semibold text-white/90">
            Al-Bayyan NLP
          </div>
        </div>

        <div className="rounded-lg border border-violet-300/20 bg-violet-300/5 px-3 py-2">
          <div className="text-[8px] uppercase tracking-widest text-white/30">
            Similarity
          </div>

          <div className="mt-1 text-xs font-mono text-violet-300">
            0.80
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {[
          {
            label: "Fatwa",
            width: "88%",
          },
          {
            label: "Al-Qur'an",
            width: "76%",
          },
          {
            label: "Hadis",
            width: "68%",
          },
        ].map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex justify-between text-[9px]">
              <span className="text-white/45">{item.label}</span>
              <span className="font-mono text-white/25">
                semantic relevance
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-400/30 to-violet-300/80"
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <div className="text-[8px] uppercase tracking-widest text-white/25">
            Model A
          </div>

          <div className="mt-2 text-base font-semibold text-white/80">
            IndoBERT
          </div>

          <div className="mt-1 text-[9px] text-white/30">
            Transformer
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <div className="text-[8px] uppercase tracking-widest text-white/25">
            Model B
          </div>

          <div className="mt-2 text-base font-semibold text-white/80">
            LSTM
          </div>

          <div className="mt-1 text-[9px] text-white/30">
            Sequence model
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">
            Processing pipeline
          </span>

          <span className="text-[9px] text-violet-300/60">
            NLP
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {["Raw Text", "Tokenize", "Encode", "Match"].map(
            (step, index) => (
              <div
                key={step}
                className="flex flex-1 items-center gap-2"
              >
                <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.025] px-2 py-2 text-center text-[8px] text-white/40">
                  {step}
                </div>

                {index < 3 && (
                  <span className="text-[9px] text-white/20">
                    →
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CERTIFICATE CARD                                                           */
/* -------------------------------------------------------------------------- */

export function CertificateCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  return (
    <a
      href={certificate.link}
      target="_blank"
      rel="noreferrer"
      className="group block w-full rounded-2xl border border-white/10 bg-white/[0.035] p-7 text-left transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055] sm:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-cyan-300">
          {certificate.index}
        </span>

        <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-white/40">
          {certificate.type}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-semibold leading-snug text-white transition group-hover:text-cyan-200 sm:text-3xl">
        {certificate.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-white/55">
        {certificate.org} · {certificate.year}
      </p>

      <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
        {certificate.description}
      </p>

      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-sm font-mono uppercase tracking-[0.15em] text-white/35 transition group-hover:text-cyan-300/70">
          View credential
        </span>

        <span className="text-lg text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300">
          ↗
        </span>
      </div>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* MODAL                                                                      */
/* -------------------------------------------------------------------------- */

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 p-4 backdrop-blur-md sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-white/10 bg-[#0d1016] p-6 shadow-2xl sm:p-9">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[.25em] text-cyan-300/70">
              Detailed view
            </div>

            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-white/10 px-3 py-1.5 text-white/50 transition hover:border-white/30 hover:text-white"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}