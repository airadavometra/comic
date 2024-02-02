import { useEffect, useState } from "react";
import s from "./ComicPage.module.css";
import { ComicViewer } from "../../components/ComicViewer/ComicViewer";
import { ReadingMode } from "@/types/readingMode";
import { comicInfo } from "@/data/comic";
import { ComicNavArrows } from "@components/ComicNavArrows/ComicNavArrows";
import { DropdownList } from "@components/DropdownList/DropdownList";
import { Arrow } from "@icons/Arrow";

export const ComicPage = () => {
  const [readingMode, setReadingMode] = useState<ReadingMode>(() => {
    const saved = localStorage.getItem("readingMode");
    return saved === "fullchapter" ? "fullchapter" : "onepage";
  });

  const [chapter, setChapter] = useState<number>(() => {
    const saved = localStorage.getItem("chapter");
    return saved ? Number(saved) : 1;
  });

  const [page, setPage] = useState<number>(() => {
    const saved = localStorage.getItem("page");
    return saved ? Number(saved) : 1;
  });

  useEffect(() => {
    localStorage.setItem("readingMode", readingMode);
  }, [readingMode]);

  useEffect(() => {
    localStorage.setItem("chapter", chapter.toString());
  }, [chapter]);

  useEffect(() => {
    localStorage.setItem("page", page.toString());
  }, [page]);

  return (
    <main className={s.main}>
      <section className={s.controllers}>
        <DropdownList
          value={undefined}
          onChange={setReadingMode}
          label="Reading mode:"
          displayValue={readingMode === "onepage" ? "One page" : "Full chapter"}
          options={[
            { key: "onepage", value: "onepage", displayValue: "One page" },
            {
              key: "fullchapter",
              value: "fullchapter",
              displayValue: "Full chapter",
            },
          ]}
        />
        <DropdownList
          value={chapter}
          onChange={(value) => {
            setChapter(Number(value));
            setPage(1);
          }}
          label="Chapter:"
          displayValue={chapter}
          options={comicInfo.chapters.map((chapter) => ({
            key: chapter.id,
            value: chapter.id,
            displayValue: chapter.title,
          }))}
          className={s.topListbox}
        />
        {readingMode === "onepage" && (
          <DropdownList
            value={page}
            onChange={(value) => setPage(Number(value))}
            label="Page:"
            displayValue={page}
            options={Array.from(
              {
                length: comicInfo.chapters[chapter - 1].numberOfPages,
              },
              (_, i) => i + 1
            ).map((page) => ({
              key: page,
              value: page,
              displayValue: `Page ${page}`,
            }))}
          />
        )}
        <ComicNavArrows
          readingMode={readingMode}
          currentChapter={chapter}
          currentPage={page}
          updateCurrentChapter={setChapter}
          updateCurrentPage={setPage}
          className={s.topArrows}
        />
      </section>
      <ComicViewer
        readingMode={readingMode}
        currentChapter={chapter}
        currentPage={page}
      />
      {readingMode === "fullchapter" && (
        <div className={s.bottomControllers}>
          <button
            className={s.button}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Arrow className={s.buttonIcon} />
            Back to top
          </button>
          <DropdownList
            value={chapter}
            onChange={(value) => {
              setChapter(Number(value));
              setPage(1);
            }}
            label="Chapter:"
            displayValue={chapter}
            options={comicInfo.chapters.map((chapter) => ({
              key: chapter.id,
              value: chapter.id,
              displayValue: chapter.title,
            }))}
            className={s.bottomListbox}
          />
          <ComicNavArrows
            readingMode={readingMode}
            currentChapter={chapter}
            currentPage={page}
            updateCurrentChapter={setChapter}
            updateCurrentPage={setPage}
            className={s.bottomArrows}
          />
        </div>
      )}
      <div>Ads</div>
    </main>
  );
};
