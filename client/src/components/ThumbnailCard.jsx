import { useState } from "react";
import { resolveThumbnailUrl } from "../utils/thumbnailUrls";

// props: item, onDelete, onLike,
//        showDelete (default: false), showLike (default: false), showAuthor (default: false)
const ThumbnailCard = ({
  item,
  onDelete,
  onLike,
  showDelete = false,
  showLike = false,
  showAuthor = false
}) => {
  // state: downloading (local)
  // thumbnailUrl → resolveThumbnailUrl(item.imageUrl)

  // handleDownload() → fetches image, creates blob URL, triggers download, reverts downloading state

  return (
    <div className="glass-card overflow-hidden rounded-3xl">
      {/* Thumbnail image */}
      <div className="space-y-4 p-5">
        <div>
          {/* Title */}
          {/* if showAuthor → author name */}
        </div>

        {/* Style / aspectRatio / mode tag pills */}

        <div className="flex items-center gap-3">
          {/* Download button → shows "Preparing..." when downloading */}
          {/* if showDelete → Delete button */}
          {/* if showLike  → Like button with like count */}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCard;