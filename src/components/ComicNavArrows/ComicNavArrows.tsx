import { ReadingMode } from "@/types/readingMode";
import s from "./ComicNavArrows.module.css";
import classNames from "classnames";
import { comicInfo } from "@/data/comic";
import { VisuallyHidden } from "@components/VisuallyHidden/VisuallyHidden";
import { Chevron } from "@icons/Chevron";
import { Chevrons } from "@icons/Chevrons";
import { WithClassName } from "@/types/withClassName";

type ComicNavArrowsProps = WithClassName & {
  readingMode: ReadingMode;
  currentChapter: number;
  currentPage: number;
  updateCurrentChapter: (newChapter: number) => void;
  updateCurrentPage: (newPage: number) => void;
};

export const ComicNavArrows = ({
  readingMode,
  currentChapter,
  currentPage,
  updateCurrentChapter,
  updateCurrentPage,
  className,
}: ComicNavArrowsProps) => {
  return (
    <div className={classNames(s.navigationButtons, className)}>
      <button
        disabled={
          readingMode === "onepage"
            ? currentChapter === 1 && currentPage === 1
            : currentChapter === 1
        }
        className={s.navigationButton}
        onClick={() => {
          updateCurrentChapter(1);
          updateCurrentPage(1);
          window.scrollTo(0, 0);
        }}
      >
        <Chevrons
          className={classNames(
            s.navigationButtonIcon,
            s.navigationButtonIconRotated
          )}
        />
        <VisuallyHidden>First</VisuallyHidden>
      </button>
      <button
        disabled={
          readingMode === "onepage"
            ? currentChapter === 1 && currentPage === 1
            : currentChapter === 1
        }
        className={s.navigationButton}
        onClick={() => {
          if (readingMode === "onepage") {
            if (currentPage === 1) {
              if (currentChapter !== 1) {
                const previousChapterId = currentChapter - 1;
                const previousChapter =
                  comicInfo.chapters[previousChapterId - 1];
                updateCurrentChapter(previousChapterId);
                updateCurrentPage(previousChapter.numberOfPages);
              }
              return;
            }
            updateCurrentPage(currentPage - 1);
          } else {
            const previousChapterId = currentChapter - 1;
            updateCurrentChapter(previousChapterId);
            updateCurrentPage(1);
          }
          window.scrollTo(0, 0);
        }}
      >
        <Chevron
          className={classNames(
            s.navigationButtonIcon,
            s.navigationButtonIconRotated
          )}
        />
        <VisuallyHidden>Previous</VisuallyHidden>
      </button>
      <button
        disabled={
          readingMode === "onepage"
            ? currentChapter === comicInfo.chapters.length &&
              currentPage ===
                comicInfo.chapters[comicInfo.chapters.length - 1].numberOfPages
            : currentChapter === comicInfo.chapters.length
        }
        className={s.navigationButton}
        onClick={() => {
          if (readingMode === "onepage") {
            if (
              currentPage ===
              comicInfo.chapters[currentChapter - 1].numberOfPages
            ) {
              if (currentChapter !== comicInfo.chapters.length) {
                const nextChapterId = currentChapter + 1;
                updateCurrentChapter(nextChapterId);
                updateCurrentPage(1);
              }
              return;
            }
            updateCurrentPage(currentPage + 1);
          } else {
            const nextChapterId = currentChapter + 1;
            updateCurrentChapter(nextChapterId);
            updateCurrentPage(1);
          }
          window.scrollTo(0, 0);
        }}
      >
        <Chevron className={s.navigationButtonIcon} />
        <VisuallyHidden>Next</VisuallyHidden>
      </button>
      <button
        disabled={
          readingMode === "onepage"
            ? currentChapter === comicInfo.chapters.length &&
              currentPage ===
                comicInfo.chapters[comicInfo.chapters.length - 1].numberOfPages
            : currentChapter === comicInfo.chapters.length
        }
        className={s.navigationButton}
        onClick={() => {
          const lastChapter = comicInfo.chapters[comicInfo.chapters.length - 1];
          updateCurrentChapter(lastChapter.id);
          updateCurrentPage(lastChapter.numberOfPages);
          window.scrollTo(0, 0);
        }}
      >
        <Chevrons className={s.navigationButtonIcon} />
        <VisuallyHidden>Latest</VisuallyHidden>
      </button>
    </div>
  );
};
