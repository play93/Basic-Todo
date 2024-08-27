import styled from "styled-components";
import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";

const TodoDashboard = () => {
  return (
    <DashboardSection>
      <DashboardHeader>
        <h1>Dashboard</h1>
      </DashboardHeader>

      <DashboardCardList>
        <DashboardCard flex="2" color="#e7582b">
          <div>
            <ClipboardCheck color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            16 <br />
            New Task
          </p>
        </DashboardCard>
        <DashboardCard flex="1" color="#582be7">
          <div>
            <Monitor color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            3 <br />
            Completed
          </p>
        </DashboardCard>
        <DashboardCard flex="1" color="#242424">
          <div>
            <Video color="white" />
            <Ellipsis color="rgba(255,255,255,0.4)" />
          </div>
          <p>
            13 <br />
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

const DashboardCard = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 1rem;
  height: calc(640px / 4);

  color: white;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${(props) => props.flex};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${(props) => props.color};
  }
`;
