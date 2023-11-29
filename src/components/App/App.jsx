import TotalPitchers from '../TotalPitchers/TotalPitchers';
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import PitcherList from '../PitcherList/PitcherList';
import OnTheMound from '../OnTheMound/OnTheMound';
import PitcherForm from '../PitcherForm/PitcherForm';
import CatcherList from '../CatcherList/CatcherList';
import BehindThePlate from '../BehindThePlate/BehindThePlate';
import CatcherForm from '../CatcherForm/CatcherForm';

function App() {

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <OnTheMound />
      <BehindThePlate />
      <TotalPitchers />
      <TotalCatchers />
      <h3>All Pitchers</h3>
      <PitcherForm />
      <PitcherList />
      <h3>All Catchers</h3>
      <CatcherForm />
      <CatcherList />
    </div>
  );
}

export default App;
