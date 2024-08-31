import { TransactionViews } from "@/pages/Transactions/Transactions";

export type TransactionsTabsProps = {
    view: TransactionViews;
    setView: (view: TransactionViews) => void;
};