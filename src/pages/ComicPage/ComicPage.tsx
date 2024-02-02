import { useEffect, useState } from "react";
import s from "./ComicPage.module.css";
import { OnePageView } from "./OnePageView";
import { FullChapterView } from "./FullChapterView";
import { ReadingMode } from "@/types/readingMode";
import { Listbox } from "@headlessui/react";
import { comicInfo } from "@/data/comic";

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
    setPage(1);
  }, [chapter]);

  useEffect(() => {
    // Add logic for the last/first page in chapter if it's onepage reading mode.
    // In this case we need to change chapter too. But it's better to move it into onclick
    localStorage.setItem("page", page.toString());
  }, [page]);

  return (
    <main className={s.main}>
      <div className={s.controllers}>
        <Listbox value={readingMode} onChange={setReadingMode}>
          <Listbox.Label>Reading mode:</Listbox.Label>
          <Listbox.Button>{readingMode}</Listbox.Button>
          <Listbox.Options>
            <Listbox.Option key="onepage" value="onepage">
              One page
            </Listbox.Option>
            <Listbox.Option key="fullchapter" value="fullchapter">
              Full chapter
            </Listbox.Option>
          </Listbox.Options>
        </Listbox>

        <Listbox
          value={readingMode}
          onChange={(value) => setChapter(Number(value))}
        >
          <Listbox.Label>Chapter:</Listbox.Label>
          <Listbox.Button>{chapter}</Listbox.Button>
          <Listbox.Options>
            {comicInfo.chapters.map((chapter) => (
              <Listbox.Option key={chapter.id} value={chapter.id}>
                {chapter.title}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        {readingMode === "onepage" && (
          <Listbox
            value={readingMode}
            onChange={(value) => setPage(Number(value))}
          >
            <Listbox.Label>Page:</Listbox.Label>
            <Listbox.Button>{page}</Listbox.Button>
            <Listbox.Options>
              {Array.from(
                { length: comicInfo.chapters[chapter - 1].numberOfPages },
                (_, i) => i + 1
              ).map((page) => (
                <Listbox.Option key={page} value={page}>
                  {page}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        )}
      </div>
      {readingMode === "onepage" ? <OnePageView /> : <FullChapterView />}
      <div>Ads</div>
    </main>
  );
};
