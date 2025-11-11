// components/customers/CustomersListSkeleton.tsx
import { Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@radix-ui/themes";

export default function CustomersListSkeleton({ rows = 8 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-4 p-2">
      {Array.from({ length: rows }).map((_, i) => (
        <Card key={i} className="my-1">
          <Flex justify="between" align="start">
            {/* Customer info */}
            <Flex className="flex flex-col gap-2 py-1">
              <Skeleton className="h-4 w-40 rounded" /> {/* Name */}
              <Skeleton className="h-3 w-32 rounded" /> {/* Phone */}
              <Skeleton className="h-3 w-20 rounded" /> {/* isGold */}
              <Skeleton className="h-3 w-48 rounded" /> {/* ID */}
            </Flex>

            {/* Actions */}
            <Flex direction="column" align="end" gap="2">
              <Skeleton className="h-8 w-1 rounded" />{" "}
              {/* RentalFormCustomers */}
              <Flex gap="2" className="mt-2">
                <Skeleton className="h-8 w-8 rounded" /> {/* Update */}
                <Skeleton className="h-8 w-8 rounded" /> {/* Delete */}
              </Flex>
            </Flex>
          </Flex>
        </Card>
      ))}
    </div>
  );
}
