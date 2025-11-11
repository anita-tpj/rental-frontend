// components/movies/MoviesListSkeleton.tsx
import { Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@radix-ui/themes";

export default function MoviesListSkeleton({ rows = 8 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-4 pt-2">
      {Array.from({ length: rows }).map((_, i) => (
        <Card key={i} className="my-1">
          <Flex justify="between" align="center" className="gap-6">
            <div className="flex flex-col gap-2 py-1">
              <Skeleton className="h-4 w-56 rounded" /> {/* Title */}
              <Skeleton className="h-3 w-28 rounded" /> {/* Genre */}
              <Skeleton className="h-3 w-28 rounded" /> {/* Rate */}
              <Skeleton className="h-3 w-20 rounded" /> {/* Stock */}
              <Skeleton className="h-3 w-40 rounded" /> {/* ID */}
            </div>

            <div className="flex flex-col items-end gap-2">
              <Skeleton className="h-8 w-16 rounded" />{" "}
              {/* RentalForm button */}
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8 rounded" /> {/* Update */}
                <Skeleton className="h-8 w-8 rounded" /> {/* Delete */}
              </div>
            </div>
          </Flex>
        </Card>
      ))}
    </div>
  );
}
