// components/rentals/RentalsListSkeleton.tsx
import { Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@radix-ui/themes";

export default function RentalsListSkeleton({ rows = 8 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-4 pt-2">
      {Array.from({ length: rows }).map((_, i) => (
        <Card key={i} className="my-1">
          <Flex justify="between" align="start">
            <Flex direction="column" gap="4" className="py-1">
              {/* Customer */}
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-24 rounded" /> {/* Customer label */}
                <Skeleton className="h-3 w-40 rounded" /> {/* Name */}
                <Skeleton className="h-3 w-32 rounded" /> {/* Phone */}
                <Skeleton className="h-3 w-20 rounded" /> {/* isGold */}
              </div>

              {/* Movie */}
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-20 rounded" /> {/* Movie label */}
                <Skeleton className="h-3 w-40 rounded" /> {/* Movie name */}
                <Skeleton className="h-3 w-24 rounded" /> {/* Rate */}
              </div>

              {/* Dates */}
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-48 rounded" /> {/* Date out */}
                <Skeleton className="h-3 w-48 rounded" /> {/* Date in */}
                <Skeleton className="h-3 w-32 rounded" /> {/* Fee */}
              </div>
            </Flex>

            {/* Actions (e.g. Return button) */}
            <Flex gap="2" align="center">
              <Skeleton className="h-8 w-28 rounded" />
            </Flex>
          </Flex>
        </Card>
      ))}
    </div>
  );
}
