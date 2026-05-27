import { AppContainer, ArchiveBox, CardGrid } from "./components/AppStyles";

import Profile from "./components/Profile";
import CategoryNav from "./components/CategoryNav";
import HanroroCard from "./components/HanroroCard";
import AkmuCard from "./components/AkmuCard";
import BlackSkirtsCard from "./components/BlackSkirtsCard";

function App() {
  return (
    <AppContainer>
      <Profile />

      <h2>SEOHYUN'S ARCHIVE 📂</h2>

      <ArchiveBox>
        <CategoryNav />

        <CardGrid>
          <HanroroCard />
          <AkmuCard />
          <BlackSkirtsCard />
        </CardGrid>
      </ArchiveBox>
    </AppContainer>
  );
}

export default App;
