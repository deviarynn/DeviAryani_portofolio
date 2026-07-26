import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineCamera } from "react-icons/hi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { certifications, trainings, recognitions, gallery, certificationLinks } from "../data/certifications";
import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
      const normalGallery = gallery.filter(
        item => !item.instagram && item.layout !== "landscape"
      );

    const feedsGallery = gallery.find(
    item => item.layout === "portrait"
    )

    const bannerGallery = gallery.find(
      item => item.layout === "landscape"
    )
  return (
    <section id="credentials" className="section-shell py-24 sm:py-32">
      <SectionHeading
        path="~/credentials"
        title="Certifications & recognition"
        description="Formal credentials from national bodies and industry partners, alongside campus creative work."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="card p-7"
        >
          <p className="eyebrow mb-5 flex items-center gap-2">
            <HiOutlineBadgeCheck className="text-base" /> Professional certifications
          </p>
          <ul className="space-y-5">
            {certifications.map((cert) => (
              <li key={cert.title} className="border-b border-ink-line pb-5 last:border-0 last:pb-0">
                <p className="font-medium text-paper">{cert.title}</p>
                <p className="font-mono text-xs text-circuit">{cert.issuer}</p>
                <p className="mt-1 text-sm text-slate">{cert.detail}</p>
              </li>
            ))}
          </ul>
          <a
            href={certificationLinks.certifications}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-lg border border-signal px-4 py-2 text-sm font-medium text-signal transition hover:bg-signal hover:text-black"
          >
            View All Certificates →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-7"
        >
          <p className="eyebrow mb-5">Training & bootcamps</p>
          <ul className="space-y-5">
            {trainings.map((t) => (
              <li key={t.title} className="border-b border-ink-line pb-5 last:border-0 last:pb-0">
                <p className="font-medium text-paper">{t.title}</p>
                <p className="font-mono text-xs text-circuit">{t.issuer}</p>
                <p className="mt-1 text-sm text-slate">{t.detail}</p>
              </li>
            ))}
          </ul>
          <a
            href={certificationLinks.trainings}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-lg border border-signal px-4 py-2 text-sm font-medium text-signal transition hover:bg-signal hover:text-black"
          >
            View Training Certificates →
          </a>
          <p className="eyebrow mb-3 mt-7">Also recognized for</p>
          <ul className="space-y-2">
            {recognitions.map((r) => (
              <li key={r} className="flex gap-2.5 text-sm text-paper/85">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {r}
              </li>
            ))}
          </ul>
          <a
            href={certificationLinks.recognitions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-lg border border-signal px-4 py-2 text-sm font-medium text-signal transition hover:bg-signal hover:text-black"
          >
            View Recognition Certificates →
          </a>
        </motion.div>
      </div>

      {/* Creative media gallery */}
      <div className="mt-16">
        <p className="eyebrow mb-5 flex items-center gap-2">
          <HiOutlineCamera className="text-base" /> Creative & media production
        </p>
        {/* Normal gallery */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {normalGallery.map((item, i) => (
            <GalleryCard
              key={item.title}
              item={item}
              index={i}
            />
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-start gap-4 lg:flex-row">
          {feedsGallery && (
            <div className="lg:w-1/3">
              <GalleryCard item={feedsGallery}/>
            </div>
          )}
          {bannerGallery && (       
            <div className="lg:w-2/3">
              <GalleryCard item={bannerGallery}/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function GalleryCard({ item, index }) {
  const isYoutube = !!item.youtube;
  const [current, setCurrent] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      className="card overflow-hidden"
    >
      {/* IMAGE */}

      <div
        className={`relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900
          ${
            item.layout === "portrait"
            ? "w-full aspect-[4/5]"
              : item.layout === "landscape"
                ? "w-full min-h-[2/1]"
              : "w-full aspect-video"
          }
        `}
      >
        {isYoutube ? (
        <a
          href={item.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full w-full"
        >

          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 cursor-pointer"
          />

          <div className="absolute inset-0 bg-black/45 flex items-center justify-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-white shadow-xl transition group-hover:scale-110">
              ▶
            </div>

          </div>

        </a>

      ) : (

        <img
          src={item.images[current]}
          alt={item.title}
          className="h-full w-full object-cover cursor-pointer"
        />

      )}

      <div className="absolute inset-0 bg-black/30" />


        {/* Left */}

        {item.images && item.images.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent(
                (current - 1 + item.images.length) %
                  item.images.length
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white hover:bg-black/70"
          >
            ❮
          </button>

          <button
            onClick={() =>
              setCurrent(
                (current + 1) %
                  item.images.length
              )
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white hover:bg-black/70"
          >
            ❯
          </button>
        </>
      )}

        {/* Right */}

        {item.images && item.images.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent(
                (current - 1 + item.images.length) %
                  item.images.length
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white hover:bg-black/70"
          >
            ❮
          </button>

          <button
            onClick={() =>
              setCurrent(
                (current + 1) %
                  item.images.length
              )
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white hover:bg-black/70"
          >
            ❯
          </button>
        </>
      )}

      </div>

      {/* TEXT */}

      <div className="p-5">

        <p className="font-mono text-xs text-circuit">
          {item.role}
        </p>

        <h4 className="mt-1 font-semibold">
          {item.title}
        </h4>

        <p className="mt-1 text-sm text-slate">
          {item.note}
        </p>
        {item.instagram && (
          <a
            href={item.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-300 transition hover:bg-pink-500 hover:text-white"
          >
            📷 View More Designs on Instagram
          </a>
        )}
        {isYoutube && (
          <a
            href={item.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
          >
            ▶ Watch on YouTube
          </a>
        )}

        {/* DOT */}

        {item.images && item.images.length > 1 && (

  <div className="mt-4 flex justify-center gap-2">

    {item.images.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrent(i)}
        className={`h-2 w-2 rounded-full ${
          current === i
            ? "bg-orange-400"
            : "bg-gray-500"
        }`}
      />
    ))}

  </div>

)}      
      </div>
    </motion.div>
  );
}