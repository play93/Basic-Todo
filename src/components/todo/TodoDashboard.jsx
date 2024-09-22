import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useTodoQuery } from "../../hooks/useTodoQuery";
import { useGetFilter } from "../../hooks/useGetFilter";

const TodoDashboard = () => {
  const { filter } = useGetFilter();

  const { data: allTodos } = useTodoQuery();
  const { data: completedTodos } = useTodoQuery("completed");
  const { data: pendingTodos } = useTodoQuery("pending");

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
      </div>

      <div className="flex flex-row gap-2 w-full">
        <Link
          to={"/"}
          className={`dashboard-card bg-[#d7582b] flex-grow-[2] ${
            !filter ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <ClipboardCheck color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            {allTodos?.length} <br />
            All Task
          </p>
        </Link>
        <Link
          to={"?filter=completed"}
          className={`dashboard-card bg-[#582be7] flex-grow ${
            !filter ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <Monitor color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            {completedTodos?.length} <br />
            Completed
          </p>
        </Link>
        <Link
          to={"?filter=pending"}
          className={`dashboard-card bg-[#242424] flex-grow ${
            !filter ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <Video color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            {pendingTodos?.length} <br />
            Pending
          </p>
        </Link>
      </div>
    </section>
  );
};

export default TodoDashboard;
