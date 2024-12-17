import type { MetaFunction } from "@remix-run/node";
import { PageLayout } from "~/components/Layout";
import { Canvas } from "~/components/Canvas";
import { Voucher } from "~/components/Voucher";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {
          [1, 2, 3, 4, 5, 6].map(() => <Voucher />)
        }
      </div>
    </PageLayout >
  );
}
