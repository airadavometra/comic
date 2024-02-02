import { ReadingMode } from "@/types/readingMode";
import s from "./ComicViewer.module.css";
import { comicInfo } from "@/data/comic";

type ComicViewerProps = {
  readingMode: ReadingMode;
  currentChapter: number;
  currentPage: number;
};

export const ComicViewer = ({
  readingMode,
  currentChapter,
  currentPage,
}: ComicViewerProps) => {
  const pageUrls =
    readingMode === "onepage"
      ? [`/${currentChapter}/${currentPage}.jpg`]
      : Array.from(
          {
            length: comicInfo.chapters[currentChapter - 1].numberOfPages,
          },
          (_, i) => i + 1
        ).map((page) => `/${currentChapter}/${page}.jpg`);

  return (
    <section className={s.pagesContainer}>
      {pageUrls.map((_pageUrl) => (
        <div className={s.imagePlaceholder} />
      ))}
    </section>
  );
};
