import styled from "styled-components";
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
    <DashboardSection>
      <DashboardHeader>
        <h1>Dashboard</h1>
      </DashboardHeader>

      <DashboardCardList>
        <DashboardCard $flex="2" $color="#e7582b" to={"/"} $highlight={!filter}>
          <div>
            <ClipboardCheck color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            {allTodos?.length} <br />
            All Task
          </p>
        </DashboardCard>
        <DashboardCard
          $flex="1"
          $color="#582be7"
          to={"?filter=completed"}
          $highlight={filter === "completed"}
        >
          <div>
            <Monitor color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            {completedTodos?.length} <br />
            Completed
          </p>
        </DashboardCard>
        <DashboardCard
          $flex="1"
          $color="#242424"
          to={"?filter=pending"}
          $highlight={filter === "pending"}
        >
          <div>
            <Video color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            {pendingTodos?.length} <br />
            Pending
          </p>
        </DashboardCard>
      </DashboardCardList>
    </DashboardSection>
  );
};

export default TodoDashboard;

const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DashboardHeader = styled.article`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const DashboardCardList = styled.article`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const DashboardCard = styled(Link)`
  background-color: ${({ $color }) => $color};
  padding: 1rem;
  border-radius: 1rem;
  height: calc(640px / 4);

  color: white;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${({ $flex }) => $flex};

  text-decoration: ${({ $highlight }) => ($highlight ? "underline" : "none")};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${({ $color }) => $color};
  }
`;
